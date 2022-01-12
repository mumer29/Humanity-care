// import React from 'react';
import { firestore, auth, db, logout } from "../firebase";
import React, { useState, useEffect } from 'react';

import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useHistory } from "react-router-dom";
import { toast } from 'react-toastify'


const Customers = () => {

    const [user, loading, error] = useAuthState(auth);
    // const [name, setName] = useState("");
    const history = useHistory();
    const [donorData, setDonorData] = useState([])
    const [adminData, setAdminData] = useState([])
    const [seekerData, setSeekerData] = useState([])
    const [seekerRequest, setSeekerRequest] = useState([])
    // console.log(donorData);

    const fetchUserData = async () => {

        try {
            const query = await db
                .collection("users")
                .where("uid", "==", user?.uid)
                .get();
            const data = await query.docs[0].data();
            // console.log(data.name);

            if (data.userType === "Admin") {

                document.getElementById("customerAdmin").style.display = "inline-table"
                document.getElementById("customerSeeker").style.display = "none"
                document.getElementById("customerDonor").style.display = "none"
                let users = [];
                await firestore.collection("users").get().then((querySnapshot) => {
                    querySnapshot.forEach(element => {
                        var data = element.data()
                        users.push(data);
                    })
                })
                setAdminData(users);

            } else if (data.userType === "Donor") {
                // let users;


                document.getElementById("customerAdmin").style.display = "none"
                document.getElementById("customerSeeker").style.display = "none"
                document.getElementById("customerDonor").style.display = "inline-table"
                // try {
                //     const query = await db
                //         .collection("users")
                //         .where("uid", "==", user?.uid)
                //         .get();
                //     const data = await query.docs[0].data();
                //     users = data
                // } catch (err) {
                //     alert("An error occured while fetching user data");
                // }
                await firestore.collection("donor").get().then((querySnapshot) => {
                    let donorDetail = []
                    querySnapshot.forEach(element => {
                        var donorData = element.data()

                        if (donorData.email === data.email) {
                            donorDetail.push(donorData)
                        }
                    })
                    setDonorData(donorDetail)
                })


            } else {
                document.getElementById("customerAdmin").style.display = "none"
                document.getElementById("customerSeeker").style.display = "block"
                document.getElementById("customerDonor").style.display = "none"

                let users = [];
                await firestore.collection("users").get().then((querySnapshot) => {
                    querySnapshot.forEach(element => {
                        var data = element.data()
                        users.push(data)
                    })
                })
                setSeekerData(users)


                await firestore.collection("seeker").get().then((querySnapshot) => {
                    let requests = [];
                    querySnapshot.forEach(element => {
                        var seekerData = element.data()
                        if (seekerData.seekerEmail === data.email) {
                            requests.push(seekerData)
                        }

                    })
                    setSeekerRequest(requests)
                })


            }
        } catch (err) {
            toast.error("An error occured while fetching user data")
        }
    };


    useEffect(() => {
        if (loading) return;
        if (!user) return history.push("/");
        fetchUserData();
    }, [user, loading]);

    return (
        <>
            <div >
                {/* <div>{name}</div> */}
                {/* <div>{email}</div> */}
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card__body">
                                <table className="table"
                                    id="customerAdmin"
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

                                        <tbody key={index}>
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

                                <table className="table"
                                    id="customerDonor"
                                    style={{ display: "none" }}>
                                    <thead>
                                        <tr>
                                            <th scope="col">Sr.</th>
                                            <th scope="col">payment for</th>
                                            <th scope="col">Donation type</th>
                                            <th scope="col">Amount</th>
                                        </tr>
                                    </thead>
                                    {donorData.map((item, index) => (

                                        <tbody>
                                            <tr>
                                                <th scope="row">{index + 1}</th>
                                                <td>{item.payment}</td>
                                                <td>{item.donationType}</td>
                                                <td>{item.amount}</td>

                                            </tr>
                                        </tbody>
                                    ))}
                                </table>

                                {/* Seeker */}
                                
                                <div id="customerSeeker"
                                    style={{ display: "none" }}>
                                    <h3>Donor Detail</h3>
                                    <table className="table"
                                    >

                                        <thead>

                                            <tr>
                                                <th scope="col">sr.</th>
                                                <th scope="col">Donor Name</th>
                                            </tr>
                                        </thead>
                                        {seekerData.map((item, index) => (

                                            <tbody key={index}>
                                                <tr>
                                                    <th scope="row">{index + 1}</th>
                                                    <td> {item.name}</td>
                                                </tr>
                                            </tbody>
                                        ))}
                                    </table>


                                    <h3 className="mt-5"
                                    >Request details</h3>
                                    <table className="table"
                                    >

                                        <thead>

                                            <tr>
                                                <th scope="col">sr.</th>
                                                <th scope="col">Request message</th>
                                            </tr>
                                        </thead>
                                        {seekerRequest.map((item, index) => (

                                            <tbody key={index}>
                                                <tr>
                                                    <th scope="row">{index + 1}</th>
                                                    <td> {item.seekerMessage}</td>

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
        </>
    )
}

export default Customers
