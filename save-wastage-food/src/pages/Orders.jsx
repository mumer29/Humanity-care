

// import React, { useState } from 'react';

import { useNavigate, useHistory } from 'react-router-dom'
import { toast } from 'react-toastify';
import { NonRegisterDonor, auth, db, logout, RegisterDonor, firestore } from '../firebase'

import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
// import { firestore, auth, db, logout } from "../firebase";





function Orders() {
    const history = useHistory();
    // const [showHide, setShowHide] = useState("hide");
    const [payment, setPayment] = useState("");
    const [amount, setAmount] = useState("");
    const [donationType, setdonationType] = useState("");
    const [PHolder, setPHolder] = useState(true);

    const [donorData, setDonorData] = useState([])

    const [user, loading, error] = useAuthState(auth);
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");




    const fetchUserData = async () => {

        try {
            const query = await db
                .collection("users")
                .where("uid", "==", user?.uid)
                .get();
            const data = await query.docs[0].data();


            if (data.userType === "Admin") {

                document.getElementById("admin").style.display = "block"
                document.getElementById("seeker").style.display = "none"
                document.getElementById("donor").style.display = "none"
                let users;


                await firestore.collection("donor").get().then((querySnapshot) => {
                    let donorDetail = []
                    querySnapshot.forEach(element => {
                        var data = element.data()
                        // console.log(data.name);
                        // console.log(email);

                        // if (data.email === users.email) {
                            // console.log("good ho gya");
                            // console.log(data);
                            donorDetail.push(data)
                        // }
                    })
                    setDonorData(donorDetail)
                })



            } else if (data.userType === "Donor") {



                document.getElementById("admin").style.display = "none"
                document.getElementById("seeker").style.display = "none"
                document.getElementById("donor").style.display = "inline-table"
                try {
                    const query = await db
                        .collection("users")
                        .where("uid", "==", user?.uid)
                        .get();
                    const data = await query.docs[0].data();
                    setEmail(data.email)
                    setName(data.name)
                } catch (err) {
                    console.error(err);
                    alert("An error occured while fetching user data");
                }


            } else {

                document.getElementById("admin").style.display = "none"
                document.getElementById("seeker").style.display = "inline-table"
                document.getElementById("donor").style.display = "none"
                // let users = [];
                // await firestore.collection("users").get().then((querySnapshot) => {
                //     querySnapshot.forEach(element => {
                //         var data = element.data()

                //         users.push(data)
                //     })
                // })
                // setSeekerData(users)

            }
        } catch (err) {
            toast.error("An error occured while fetching user data")
        }

        // try {
        //     const query = await db
        //         .collection("users")
        //         .where("uid", "==", user?.uid)
        //         .get();
        //     const data = await query.docs[0].data();
        //     setEmail(data.email)
        //     setName(data.name)
        // } catch (err) {
        //     console.error(err);
        //     alert("An error occured while fetching user data");
        // }


        // const handleShow = async () => {
        //     if (!payment) {
        //         toast.error("Who do you want to pay for? ")
        //     } else if (!amount) {
        //         toast.error("Please select amount ")
        //     }
        //     else if (amount < 0) {
        //         toast.error("Please select positive amount ")
        //     } else if (!donationType) {
        //         toast.error("What kind of payment do you want? ")
        //     } else {

        //         // console.log("user",name, email);

        //         RegisterDonor(email, name, payment, amount, donationType)
        //     }

        // }

        // const donatePayment = (e) => {
        //     let data = e.target.value
        //     if (data === "Cook Food" || data === "Uncook Food") {
        //         setPHolder(false)
        //     } else {
        //         setPHolder(true)
        //     }
        // };

    };
    const handleShow = async () => {
        if (!payment) {
            toast.error("Who do you want to pay for? ")
        } else if (!amount) {
            toast.error("Please select amount ")
        }
        else if (amount < 0) {
            toast.error("Please select positive amount ")
        } else if (!donationType) {
            toast.error("What kind of payment do you want? ")
        } else {

            // console.log("user",name, email);

            RegisterDonor(email, name, payment, amount, donationType)
        }

    }

    const donatePayment = (e) => {
        let data = e.target.value
        if (data === "Cook Food" || data === "Uncook Food") {
            setPHolder(false)
        } else {
            setPHolder(true)
        }
    };
    useEffect(() => {
        if (loading) return;
        if (!user) return history.push("/");
        // fetchUserEmail();
        fetchUserData();

    }, [user, loading]);

    return (
        <div>
            <div id='admin'
                style={{ display: "none" }}>
                <h2 className="page-header">
                    Order History
                </h2>
                {/* <div>{name}</div> */}
                {/* <div>{email}</div> */}
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card__body">

                                <table class="table"
                                   >
                                    <thead>
                                        <tr>
                                            <th scope="col">Sr.</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Email</th>
                                            <th scope="col">Donation type</th>
                                            <th scope="col">Amount</th>

                                            {/* <th scope="col">Payment for</th>
                                            <th scope="col">Registred</th> */}
                                        </tr>
                                    </thead>
                                    {donorData.map((item, index) => (
                                        <tbody>
                                            <tr>
                                                <th scope="row">{index + 1}</th>
                                                <td> {item.name}</td>
                                                <td>{item.email}</td>
                                                <td>{item.donationType}</td>

                                                <td>{item.amount}</td>
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



            <div className="row  justify-content-center align-items-center py-3"
                id="donor"
                style={{display:"none"}}
            >
                <div className="col-lg-2 col-sm-12 col-md-12 text-center my-2  " style={{ height: "45px" }}>
                    <p style={{
                        height: "100%", width: "100%", lineHeight: "50px",
                        fontWeight: "bolder"
                    }}>QUICK DONATE</p>
                </div>
                <div className="col-lg-3 col-md-4 text-center my-2 " style={{ height: "45px" }}>
                    <select
                        onClick={e => { donatePayment(e) }}
                        onChange={e => setPayment(e.target.value)}
                        className="form-select border-success border-2 "
                        aria-label="Default select example"
                        style={{ height: "100%", width: "100%" }}>
                        <option > Payment for</option>
                        <option value="Single Payment">Single Payment</option>
                        <option value="Regular Payment">Regular Payment</option>
                        <option value="Cook Food"> Cook Food</option>
                        <option value="Uncook Food">Uncook Food</option>
                        <option value="Medical">Medical</option>
                        <option value="Water ">Water </option>
                        <option value="Ration">Ration</option>
                        <option value="Education">Education</option>

                    </select>
                </div>
                <div className="col-lg-2 col-md-4 text-center my-2  " style={{ height: "45px" }}>
                    <div
                        style={{ height: "100%", width: "100%", borderRadius: "3px" }}>
                        <input
                            className="border border-success border-2 px-2 rounded"
                            type="number"
                            name=""
                            id="amount"
                            placeholder={PHolder ? "Amount" : "QTY"}
                            onChange={e => setAmount(e.target.value)}
                            style={{ height: "100%", width: "100%", border: "none" }} />
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 text-center my-2 " style={{ height: "45px" }}>
                    <select
                        className="form-select border-success border-2 "
                        aria-label="Default select example"
                        onChange={e => setdonationType(e.target.value)}
                        style={{ height: "100%", width: "100%" }}>
                        <option > Donation type</option>
                        <option value="general-donation">General Donation</option>
                        <option value="sadka">Sadka</option>
                        <option value="zakat">Zakat</option>
                    </select>
                </div>
                <div className="col-lg-2 text-center my-2 col-sm-12 col-md-6" >
                    <button className="btn "
                        onClick={handleShow}
                        style={{
                            borderRadius: '15px',
                            fontWight: ' bold', color: 'white', backgroundColor: 'rgb(193, 35, 35)'
                        }}> Donate Now</button>
                </div>

            </div>


            {/* Seeker */}

            < div className="container "
                id='seeker'
                style={{ display: "none" }
                } >
               <h1>seeker</h1>
                {/* </div> */}
            </div >
        </div >

    )
}

export default Orders

