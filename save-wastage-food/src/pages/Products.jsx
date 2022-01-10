

// import React, { useState } from 'react';

import { useNavigate, useHistory } from 'react-router-dom'
import { toast } from 'react-toastify';
import { NonRegisterDonor, auth, db, logout, RegisterDonor } from '../firebase'

import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";




function Products() {
    const history = useHistory();
    // const [showHide, setShowHide] = useState("hide");
    const [payment, setPayment] = useState("");
    const [amount, setAmount] = useState("");
    const [donationType, setdonationType] = useState("");
    const [PHolder, setPHolder] = useState(true);


    const [user, loading, error] = useAuthState(auth);
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");

    const fetchUserEmail = async () => {
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
           
            console.log("user",name, email);

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

    }
    useEffect(() => {
        if (loading) return;
        if (!user) return history.push("/");
        fetchUserEmail();
    }, [user, loading]);

    return (
        <div className="container-fluid "  >
            <div>{email}</div>
            <div className="container "  >
                <div className="row  justify-content-center align-items-center py-3">
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
            </div>
        </div >

    )
}

export default Products

