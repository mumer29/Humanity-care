import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap'
import { useNavigate, useHistory } from 'react-router-dom'
import { toast } from 'react-toastify';
import { NonRegisterDonor } from '../../firebase'

import './quichDonate.css'


function QuickDonate() {
    const history = useHistory();
    const [showHide, setShowHide] = useState("hide");
    const [payment, setPayment] = useState("");
    const [amount, setAmount] = useState("");
    const [donationType, setdonationType] = useState("");
    const [PHolder, setPHolder] = useState(true);
    const [show, setShow] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [userType, setuserType] = useState("Donor");
    const [registered, setregistered] = useState("No");


    const handleClose = () => setShow(false);
    const handleShow = () => {
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
            setShow(true);
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
    const authentication = (e) => {
        let result = e.target.value;
        if (result === "yes") {
            history.push("/sign-up");
        } else {
            setShowHide("show")
        }

    }

    const postdata = () => {
        if (!name) {
            toast.error("Please enter your name")
        } else if (!email) {
            toast.error("Please enter your email address")
        } else if (!phone) {
            toast.error("Please enter your phone number")
        } else {
            NonRegisterDonor(name, email, phone, payment, amount, donationType, userType, registered)
            setShow(false)
        }
    }


    return (
        <div className="container-fluid " style={{ backgroundColor: "#0195d3" }} >
            <div className="container "  >
                <div className="row  justify-content-center align-items-center py-3">
                    <div className="col-lg-2 col-sm-12 col-md-12 text-center my-2  " style={{ height: "45px" }}>
                        <h5 style={{ height: "100%", width: "100%", lineHeight: "40px", color: "white" }}>QUICK DONATE</h5>
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
                    <div className="col-lg-2 text-center my-2 col-sm-12 col-md-6  " style={{ height: "45px" }}>
                        <button className="btn "
                            onClick={handleShow}
                            style={{
                                height: "100%", width: "100%", borderRadius: '15px', padding: '0 30px',
                                fontWight: ' bold', color: 'white', fontSize: '17px', backgroundColor: 'rgb(193, 35, 35)'
                            }}> Donate Now</button>
                    </div>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Do you want to register?</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div className="container">
                                <div className="row">
                                    <div className="col-xxl-8 col-10 col-md-10 mx-auto  ">
                                        <div>
                                            <div className="row py-2">
                                                <div className='col '>
                                                    <input
                                                        onClick={(e) => {
                                                            authentication(e);
                                                        }}
                                                        value="yes"
                                                        className="form-check-input me-2"
                                                        type="radio"
                                                        name="flexRadioDefault"
                                                        id="flexRadioDefault1"
                                                    />
                                                    <label className="form-check-label fw-bold" htmlFor="flexRadioDefault1">
                                                        Yes
                                                    </label>
                                                </div>
                                                <div className='col '>
                                                    <input
                                                        onClick={(e) => {
                                                            authentication(e);
                                                        }}
                                                        value="no"
                                                        className="form-check-input me-2"
                                                        type="radio"
                                                        name="flexRadioDefault"
                                                        id="flexRadioDefault2"
                                                    />
                                                    <label className="form-check-label fw-bold" htmlFor="flexRadioDefault2">
                                                        No
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div
                                id={showHide}
                                className="container mb-2 ">
                                <div className="row">
                                    <div className="col-md-10 mx-auto  ">
                                        <div >
                                            <div className="mb-3">
                                                <label className="form-label fw-bold" >Name</label>
                                                <input
                                                    name='name'
                                                    type="text"
                                                    className="form-control"
                                                    required
                                                    value={name}
                                                    onChange={(e) => {
                                                        setName(e.target.value);
                                                    }}
                                                />
                                            </div>

                                            <div className="mb-3">
                                                <label className="form-label fw-bold">Email address</label>
                                                <input

                                                    name="email"
                                                    type="email"
                                                    className="form-control"
                                                    required
                                                    value={email}
                                                    onChange={(e) => {
                                                        setEmail(e.target.value);
                                                    }}
                                                />
                                            </div>

                                            <div className="mb-3">
                                                <label className="form-label fw-bold">Phone number</label>
                                                <input
                                                    name='phone'
                                                    type="number"
                                                    className="form-control"
                                                    required
                                                    value={phone}
                                                    onChange={(e) => {
                                                        setPhone(e.target.value);
                                                    }}

                                                />
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label fw-bold">Payment for</label>
                                                <input
                                                    name='payment'
                                                    type="text"
                                                    className="form-control"
                                                    disabled
                                                    value={payment}
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label fw-bold">Amount</label>
                                                <input
                                                    name='amount'
                                                    type="number"
                                                    className="form-control"
                                                    disabled
                                                    value={amount}

                                                />
                                            </div>

                                            <div className="mb-3">
                                                <label className="form-label fw-bold">Donation for</label>
                                                <input
                                                    name='donation'
                                                    type="text"
                                                    className="form-control"
                                                    disabled
                                                    value={donationType}
                                                />
                                            </div>

                                            <div className="text-center py-3">
                                                <button
                                                    type="submit"
                                                    className="btn btn-primary w-100"
                                                    onClick={postdata}
                                                >Submit</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </Modal.Body>
                    </Modal>
                </div>
            </div>
        </div >

    )
}

export default QuickDonate
