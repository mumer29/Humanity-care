// import React from 'react';
import { firestore, auth, db, logout } from "../firebase";
import React, { useState, useEffect } from 'react';

import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useHistory } from "react-router-dom";
import { toast } from 'react-toastify'




// import Table from '../components/table/Table'

// import customerList from '../assets/JsonData/customers-list.json'

// const customerTableHead = [
//     'amount',
//     'authProvider',
//     'donationType',
//     'donorEmail',
//     'donorName',
//     'donorPhone',
//     'payment ',

//     'Name', 'Email', 'Phone', 'payment', 'amount', 'donationType', 'registrationType'

// ]

// const renderHead = (item, index) => <th key={index}>{item}</th>

// const renderBody = (item, index) => (
//     <tr key={index}>
//         <td>{item.amount}</td>
//         <td>{item.authProvider}</td>
//         <td>{item.donationType}</td>
//         <td>{item.donorEmail}</td>
//         <td>{item.donorName}</td>
//         <td>{item.donorPhone}</td>
//         <td>{item.payment}</td>
//     </tr>
// )

const Customers = () => {

    const [user, loading, error] = useAuthState(auth);
    // const [name, setName] = useState("");
    const history = useHistory();
    const [donorData, setDonorData] = useState([])
    const [adminData, setAdminData] = useState([])
    const [seekerData, setSeekerData] = useState([])
    // console.log(name);

    const admin = () => {
        document.getElementById("admin").style.display = "inline-table"
        document.getElementById("seeker").style.display = "none"
        document.getElementById("donor").style.display = "none"
        getAdminData();
    }
    const donor = () => {
        document.getElementById("admin").style.display = "none"
        document.getElementById("seeker").style.display = "none"
        document.getElementById("donor").style.display = "inline-table"
        getDonorData()
    }
    const seeker = () => {
        document.getElementById("admin").style.display = "none"
        document.getElementById("seeker").style.display = "inline-table"
        document.getElementById("donor").style.display = "none"
        getSeekerData()
    }


    const fetchUserName = async () => {
        try {
            const query = await db
                .collection("users")
                .where("uid", "==", user?.uid)
                .get();
            const data = await query.docs[0].data();

            if (data.userType === "Admin") {
                admin()
                // setName("Admin");
            } else if (data.userType === "Donor") {
                donor()

                // setName("Donor");
            } else {
                seeker()

                // setName("Seeker");
            }
        } catch (err) {
            // console.error(err);
            // alert("");
            toast.error("An error occured while fetching user data")
        }
    };


    async function getAdminData() {

        let users = [];
        await firestore.collection("users").get().then((querySnapshot) => {
            querySnapshot.forEach(element => {
                var data = element.data()

                users.push(data)
            })
        })
        setAdminData(users);
    }
    
    async function getDonorData() {

        let users = [];
        await firestore.collection("users").get().then((querySnapshot) => {
            querySnapshot.forEach(element => {
                var data = element.data()

                users.push(data)
            })
        })
        setDonorData(users)
    }
    
    async function getSeekerData() {

        let users = [];
        await firestore.collection("users").get().then((querySnapshot) => {
            querySnapshot.forEach(element => {
                var data = element.data()

                users.push(data)
            })
        })
        setSeekerData(users)
    }

    useEffect(() => {
        if (loading) return;
        if (!user) return history.push("/");
        fetchUserName();
        // getAdminData();
    }, [user, loading]);

    return (
        <div>
            <h2 className="page-header">
                customers
            </h2>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card__body">

                            <table class="table"
                                id="admin"
                                style={{ display: "none" }}>
                                <thead>
                                    <tr>
                                        <th scope="col">Sr.</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Phone No</th>

                                        <th scope="col">User Type</th>
                                        <th scope="col">Registred</th>
                                    </tr>
                                </thead>
                                {adminData.map((item, index) => (

                                    <tbody>
                                        <tr>
                                            <th scope="row">{index + 1}</th>
                                            <td> {item.name}</td>
                                            <td>{item.email}</td>
                                            <td>{item.phone}</td>

                                            <td>{item.userType}</td>
                                            <td>{item.registered}</td>

                                        </tr>
                                    </tbody>
                                ))}
                            </table>

                            {/* Donor */}
                            <table class="table"
                                id="donor"
                                style={{ display: "none" }}>
                                <thead>
                                    <tr>
                                        {/* <th>Donor</th> */}
                                        {/* <th scope="col">Sr.</th> */}
                                        <th scope="col">Donor Name</th>
                                        {/* <th scope="col">Email</th>
                                        <th scope="col">Phone No</th>
                                        <th scope="col">User Type</th>
                                        <th scope="col">Registred</th> */}
                                    </tr>
                                </thead>
                                {donorData.map((item, index) => (

                                    <tbody>
                                        <tr>
                                            <th scope="row">{index + 1}</th>
                                            <td> {item.name}</td>
                                            {/* <td>{item.email}</td>
                                            <td>{item.phone}</td>
                                            <td>{item.userType}</td>
                                            <td>{item.registered}</td> */}

                                        </tr>
                                    </tbody>
                                ))}
                            </table>

                            {/* Seeker */}
                            <table class="table"
                                id="seeker"
                                style={{ display: "none" }}>
                                <thead>
                                    <tr>
                                        {/* <th scope="col">Sr.</th> */}
                                        <th scope="col">Donor Name</th>
                                        {/* <th scope="col">Email</th>
                                        <th scope="col">Phone No</th>
                                        <th scope="col">User Type</th>
                                        <th scope="col">Registred</th> */}
                                    </tr>
                                </thead>
                                {seekerData.map((item, index) => (

                                    <tbody>
                                        <tr>
                                            <th scope="row">{index + 1}</th>
                                            <td> {item.name}</td>
                                            {/* <td>{item.email}</td> */}
                                            {/* <td>{item.phone}</td> */}
                                            {/* <td>{item.userType}</td> */}
                                            {/* <td>{item.registered}</td> */}

                                        </tr>
                                    </tbody>
                                ))}
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Customers
