

// import React, { useState } from 'react';

import { useNavigate, useHistory } from 'react-router-dom'
import { toast } from 'react-toastify';
import { NonRegisterDonor, auth, db, logout, RegisterDonor, firestore, RegistredSeeker } from '../firebase'

import React, { useEffect, useState } from "react";
import { Form, Button } from 'react-bootstrap';

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

    // Seeker states

    const [seekerName, setSeekerName] = useState("");
    const [seekerEmail, setSeekerEmail] = useState("");
    const [seekerPhone, setSeekerPhone] = useState("");
    const [seekerMessage, setSeekerMessage] = useState("");
    const [seekerData, setSeekerData] = useState([])


    




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

                await firestore.collection("seeker").get().then((querySnapshot) => {
                    let seekerDetail = []
                    querySnapshot.forEach(element => {
                        var data = element.data()
                        // console.log(data.name);
                        // console.log(email);

                        // if (data.email === users.email) {
                        // console.log("good ho gya");
                        // console.log(data);
                        seekerDetail.push(data)
                        // }
                    })
                    setSeekerData(seekerDetail)
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

    const postData = () => {
        if (!seekerName) {
            toast.error("Please enter your name")
        } else if (!seekerEmail) {
            toast.error("Please enter your email")
        } else if (!seekerPhone) {
            toast.error("Please enter your phone")
        } else if (!seekerMessage) {
            toast.error("Please enter your message")
        } else {
            RegistredSeeker(seekerName, seekerEmail, seekerPhone, seekerMessage)
        }
    }


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
                    Donation History
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
                <h2 className="page-header">
                    Request History
                </h2>
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
                                            <th scope="col">Phone number</th>
                                            <th scope="col">Message</th>
                                          
                                        </tr>
                                    </thead>
                                    {seekerData.map((item, index) => (
                                        <tbody>
                                            <tr>
                                                <th scope="row">{index + 1}</th>
                                                <td> {item.seekerName}</td>
                                                <td>{item.seekerEmail}</td>
                                                <td>{item.seekerPhone}</td>

                                                <td>{item.seekerMessage}</td>

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
                style={{ display: "none" }}
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
                }
            >
                <div>
                    <div className="form-floating mb-3">
                        <input
                            type="text"
                            className="form-control"
                            id="floatingInput"
                            placeholder="Password"
                            value={seekerName}
                            onChange={(e) => setSeekerName(e.target.value)}
                        />
                        <label htmlFor="floatingPassword">Name:</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input
                            type="email"
                            className="form-control"
                            id="floatingInput1"
                            placeholder="Name"
                            value={seekerPhone}
                            onChange={(e) => setSeekerPhone(e.target.value)}

                        />
                        <label htmlFor="floatingInput">Phone Number:</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input
                            type="email"
                            className="form-control"
                            id="floatingInput2"
                            placeholder="Phone nember"
                            value={seekerEmail}
                            onChange={(e) => setSeekerEmail(e.target.value)}

                        />
                        <label htmlFor="floatingInput">Email Address:</label>
                    </div>

                    <div className="form-floating mb-3">
                        <textarea
                            className="form-control"
                            placeholder="Leave a comment here"
                            id="floatingTextarea2"
                            style={{ height: 100 }}
                            value={seekerMessage}
                            onChange={(e) => setSeekerMessage(e.target.value)}

                        />
                        <label htmlFor="floatingTextarea2">Message...</label>
                    </div>
                    <div>
                        <button className='btn btn-success'
                            onClick={postData}
                        >Submit</button>
                    </div>
                </div>
            </div >
        </div >

    )
}

export default Orders

