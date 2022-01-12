import React, { useEffect, useState } from 'react'

import { Link, Outlet } from 'react-router-dom'

import Chart from 'react-apexcharts'

import { useSelector } from 'react-redux'

import StatusCard from '../components/status-card/StatusCard'

import Table from '../components/table/Table'

import Badge from '../components/badge/Badge'

import statusCards from '../assets/JsonData/status-card-data.json'

import { NonRegisterDonor, auth, db, logout, RegisterDonor, firestore, RegistredSeeker } from '../firebase'

import { toast } from 'react-toastify';

import { useAuthState } from "react-firebase-hooks/auth";




const chartOptions = {
    series: [{
        name: 'Online Customers',
        data: [40, 70, 20, 90, 36, 80, 30, 91, 60]
    }, {
        name: 'Store Customers',
        data: [40, 30, 70, 80, 40, 16, 40, 20, 51, 10]
    }],
    options: {
        color: ['#6ab04c', '#2980b9'],
        chart: {
            background: 'transparent'
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
        },
        legend: {
            position: 'top'
        },
        grid: {
            show: false
        }
    }
}

const topCustomers = {
    head: [
        'Service',
        'total order'
    ],
    body: [
        {
            "username": "john doe",
            "order": "490",
            "price": "$15,870"
        },
        {
            "username": "frank iva",
            "order": "250",
            "price": "$12,251"
        },
        {
            "username": "anthony baker",
            "order": "120",
            "price": "$10,840"
        },
        {
            "username": "frank iva",
            "order": "110",
            "price": "$9,251"
        },
        {
            "username": "anthony baker",
            "order": "80",
            "price": "$8,840"
        }
    ]
}

const renderCusomerHead = (item, index) => (
    <th key={index}>{item}</th>
)

const renderCusomerBody = (item, index) => (
    <tr key={index}>
        <td>{item.username}</td>
        <td>{item.order}</td>
        <td>{item.price}</td>
    </tr>
)

const latestOrders = {
    header: [
        "order id",
        "user",
        "total price",
        "date",
        "status"
    ],
    body: [
        {
            id: "#OD1711",
            user: "john doe",
            date: "17 Jun 2021",
            price: "$900",
            status: "shipping"
        },
        {
            id: "#OD1712",
            user: "frank iva",
            date: "1 Jun 2021",
            price: "$400",
            status: "paid"
        },
        {
            id: "#OD1713",
            user: "anthony baker",
            date: "27 Jun 2021",
            price: "$200",
            status: "pending"
        },
        {
            id: "#OD1712",
            user: "frank iva",
            date: "1 Jun 2021",
            price: "$400",
            status: "paid"
        },
        {
            id: "#OD1713",
            user: "anthony baker",
            date: "27 Jun 2021",
            price: "$200",
            status: "refund"
        }
    ]
}

const orderStatus = {
    "shipping": "primary",
    "pending": "warning",
    "paid": "success",
    "refund": "danger"
}

const renderOrderHead = (item, index) => (
    <th key={index}>{item}</th>
)

const renderOrderBody = (item, index) => (
    <tr key={index}>
        <td>{item.id}</td>
        <td>{item.user}</td>
        <td>{item.price}</td>
        <td>{item.date}</td>
        <td>
            <Badge type={orderStatus[item.status]} content={item.status} />
        </td>
    </tr>
)


const Dashboard = () => {

    const [totalDonorAmount, setTotalDonorAmount] = useState('')
    const [seekeAndDonorLength, setSeekeAndDonorLength] = useState('')
    const [donorServices, setDonorServices] = useState([])
    const [user, loading, error] = useAuthState(auth);


    const fetchDonorData = async () => {
        await firestore.collection("donor").get().then((querySnapshot) => {
            let total = 0
            querySnapshot.forEach(element => {
                var data = element.data()
                total += Math.floor(data.amount);
            })
            setTotalDonorAmount(total)
        })
    }
    const fetchSeekeAndDonor = async () => {
        await firestore.collection("users").get().then((querySnapshot) => {
            let total = 0
            querySnapshot.forEach(element => {
                var data = element.data()
                if (data) {
                    total += 1
                }
            })
            setSeekeAndDonorLength(total - 1)
        })

    }

    const fetchDonorServices = async () => {
        await firestore.collection("donor").get().then((querySnapshot) => {
            let total = []
            querySnapshot.forEach(element => {
                var data = element.data()
                total.push(data)
            })
            setDonorServices(total)
        })

    }




    const fetchUserData = async () => {

        try {
            const query = await db
                .collection("users")
                .where("uid", "==", user?.uid)
                .get();
            const data = await query.docs[0].data();

            if (data.userType === "Admin") {

                document.getElementById("dashboardAdmin").style.display = "block"
                document.getElementById("dashboardDonor").style.display = "none"
                document.getElementById("dashboardSeeker").style.display = "none"

            } else if (data.userType === "Donor") {

                document.getElementById("dashboardAdmin").style.display = "none"
                document.getElementById("dashboardDonor").style.display = "block"
                document.getElementById("dashboardSeeker").style.display = "none"

            } else {
                document.getElementById("dashboardAdmin").style.display = "none"
                document.getElementById("dashboardDonor").style.display = "none"
                document.getElementById("dashboardSeeker").style.display = "block"
            }
        }
        catch (err) {
            // console.log(err);
            // toast.error("An error occured while fetching user data")
        }



    };

    useEffect(() => {
        fetchUserData();
        fetchDonorData();
        fetchSeekeAndDonor();
        fetchDonorServices();

    }, [user, loading]);


    const themeReducer = useSelector(state => state.ThemeReducer.mode)

    return (
        <div>
            <div id="dashboardAdmin"
                style={{ display: "none" }}
            >
                <h2 className="page-header">Dashboard</h2>
               
                <div className="row">
                    <div className="col-12 ">
                        <div className="row">
                            <div className='status-card col-6'>
                                <div className="status-card__icon">
                                    <i className="bx bx-shopping-bag"></i>
                                </div>
                                <div className="status-card__info">
                                    <h4> {totalDonorAmount}</h4>
                                    <h5>Total Donations</h5>
                                </div>
                            </div>

                            <div className='status-card col-6'>
                                <div className="status-card__icon">
                                    <i className="bx bx-shopping-bag"></i>
                                </div>
                                <div className="status-card__info">
                                    <h4> {seekeAndDonorLength}</h4>
                                    <h5>Donors & Seeker</h5>
                                </div>
                            </div>


                            <div className='status-card col-6'>
                                <div className="status-card__icon">
                                    <i className="bx bx-shopping-bag"></i>
                                </div>
                                <div className="status-card__info">
                                    <h4> 150 K</h4>
                                    <h5>Required Amount</h5>
                                </div>
                            </div>

                            <div className='status-card col-6'>
                                <div className="status-card__icon">
                                    <i className="bx bx-shopping-bag"></i>
                                </div>
                                <div className="status-card__info">
                                    <h4> 100 KG</h4>
                                    <h5>Daily food required</h5>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12">

                        <div className="row">
                            <div className="col-12">
                                <div className="card">
                                    <div className="card__body">
                                     <h3>Latest Donations</h3>

                                        <table className="table" >
                                            <thead>
                                                <tr>
                                                    <th scope="col">Sr.</th>
                                                    <th scope="col">Name</th>
                                                    <th scope="col">Email</th>
                                                    <th scope="col">Donation type</th>
                                                    <th scope="col">Amount</th>
                                                    <th scope="col">Status</th>
                                                    
                                                </tr>
                                            </thead>
                                            {donorServices.map((item, index) => (
                                                <tbody key={index}>
                                                    <tr>
                                                        <th scope="row">{index + 1}</th>
                                                        <td> {item.name}</td>
                                                        <td>{item.email}</td>
                                                        <td>{item.donationType}</td>

                                                        <td>{item.amount}</td>
                                                        <td>Pending</td>
                                                    </tr>
                                                </tbody>
                                            ))}
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="dashboardDonor"
            style={{display:"none"}}
            >
                <h2 className="page-header">donor Dashboard</h2>
           
                {/* <div className="row">
                    <div className="col-12 ">
                        <div className="row">
                            <div className='status-card col-6'>
                                <div className="status-card__icon">
                                    <i className="bx bx-shopping-bag"></i>
                                </div>
                                <div className="status-card__info">
                                    <h4> {totalDonorAmount}</h4>
                                    <h5>Total Donations</h5>
                                </div>
                            </div>

                            <div className='status-card col-6'>
                                <div className="status-card__icon">
                                    <i className="bx bx-shopping-bag"></i>
                                </div>
                                <div className="status-card__info">
                                    <h4> {seekeAndDonorLength}</h4>
                                    <h5>Donors & Seeker</h5>
                                </div>
                            </div>


                            <div className='status-card col-6'>
                                <div className="status-card__icon">
                                    <i className="bx bx-shopping-bag"></i>
                                </div>
                                <div className="status-card__info">
                                    <h4> 150 K</h4>
                                    <h5>Required Amount</h5>
                                </div>
                            </div>

                            <div className='status-card col-6'>
                                <div className="status-card__icon">
                                    <i className="bx bx-shopping-bag"></i>
                                </div>
                                <div className="status-card__info">
                                    <h4> 100 KG</h4>
                                    <h5>Daily food required</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-12">

                        <div className="row">
                            <div className="col-12">
                                <div className="card">
                                    <div className="card__body">

                                        <table className="table"
                                        >
                                            <thead>
                                                <tr>
                                                    <th scope="col">Sr.</th>
                                                    <th scope="col">Name</th>
                                                    <th scope="col">Email</th>
                                                    <th scope="col">Donation type</th>
                                                    <th scope="col">Amount</th>
                                                    <th scope="col">Status</th>
                                                </tr>
                                            </thead>
                                            {donorServices.map((item, index) => (
                                                <tbody key={index}>
                                                    <tr>
                                                        <th scope="row">{index + 1}</th>
                                                        <td> {item.name}</td>
                                                        <td>{item.email}</td>
                                                        <td>{item.donationType}</td>

                                                        <td>{item.amount}</td>
                                                        <td>Pending</td>

                                                    </tr>
                                                </tbody>
                                            ))}
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>


            <div id="dashboardSeeker"
                style={{ display: "none" }}
            >
                <h2 className="page-header">Seeker Dashboard</h2>
               
                {/* <div className="row">
                    <div className="col-12 ">
                        <div className="row">
                            <div className='status-card col-6'>
                                <div className="status-card__icon">
                                    <i className="bx bx-shopping-bag"></i>
                                </div>
                                <div className="status-card__info">
                                    <h4> {totalDonorAmount}</h4>
                                    <h5>Total Donations</h5>
                                </div>
                            </div>

                            <div className='status-card col-6'>
                                <div className="status-card__icon">
                                    <i className="bx bx-shopping-bag"></i>
                                </div>
                                <div className="status-card__info">
                                    <h4> {seekeAndDonorLength}</h4>
                                    <h5>Donors & Seeker</h5>
                                </div>
                            </div>


                            <div className='status-card col-6'>
                                <div className="status-card__icon">
                                    <i className="bx bx-shopping-bag"></i>
                                </div>
                                <div className="status-card__info">
                                    <h4> 150 K</h4>
                                    <h5>Required Amount</h5>
                                </div>
                            </div>

                            <div className='status-card col-6'>
                                <div className="status-card__icon">
                                    <i className="bx bx-shopping-bag"></i>
                                </div>
                                <div className="status-card__info">
                                    <h4> 100 KG</h4>
                                    <h5>Daily food required</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-12">

                        <div className="row">
                            <div className="col-12">
                                <div className="card">
                                    <div className="card__body">

                                        <table className="table"
                                        >
                                            <thead>
                                                <tr>
                                                    <th scope="col">Sr.</th>
                                                    <th scope="col">Name</th>
                                                    <th scope="col">Email</th>
                                                    <th scope="col">Donation type</th>
                                                    <th scope="col">Amount</th>
                                                    <th scope="col">Status</th>
                                                </tr>
                                            </thead>
                                            {donorServices.map((item, index) => (
                                                <tbody key={index}>
                                                    <tr>
                                                        <th scope="row">{index + 1}</th>
                                                        <td> {item.name}</td>
                                                        <td>{item.email}</td>
                                                        <td>{item.donationType}</td>

                                                        <td>{item.amount}</td>
                                                        <td>Pending</td>

                                                    </tr>
                                                </tbody>
                                            ))}
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default Dashboard
