import React, { useState, useEffect } from 'react';
import './sign.css'
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useHistory } from "react-router-dom";
import { toast } from 'react-toastify'
import {
    auth,
    registerWithEmailAndPassword,
    firestore
} from "../../firebase";

function SignUp() {

    const history = useHistory();
    const [passwordType, setPasswordType] = useState(true)
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("")
    const [user, loading] = useAuthState(auth);
    const [userType, setuserType] = useState("");
    // const [registered, setregistered] = useState("Yes");

    const register = async () => {
        if (!userType) {
            toast.error("Please select a designation from  Donor, Seeker and Admin")
        } else if (!name) {
            toast.error("Please inter your name")
        } else if (!email) {
            toast.error("Please inter your email")
        }
        else if (!phone) {
            toast.error("Please inter your phone number")
        } else if (!password) {
            toast.error("Please inter your password at least 6 characters long")
        }
        else {
            let db = [];
            await firestore.collection("users").get().then((querySnapshot) => {
                querySnapshot.forEach(element => {
                    var data = element.data()
                    db.push(data)
                })
            })
            let result = db.find((item) => {


                if (item.userType === "Admin" && item.userType === userType) {
                    return item;
                }

            })
            if (result) {
                toast.error("Admin is alreay exist")
            } else {
                let registered = "yes"
                registerWithEmailAndPassword(name, email, phone, userType, password, registered);
            }
        }

    };
    useEffect(() => {
        if (loading) return;
        if (user) history.push("/dashboard");
    }, [user, loading]);

    function showPassword() {
        setPasswordType(false)
        document.getElementById("show").style.display = "none";
        document.getElementById("hide").style.display = "table";

    }
    function hidePassword() {
        setPasswordType(true)
        document.getElementById("show").style.display = "table";
        document.getElementById("hide").style.display = "none";
    }

    function designation(e) {

        const userValue = e.target.value;
        if (userValue === "donor") {
            setuserType("Donor")

        } else if (userValue === "seeker") {
            setuserType("Seeker")

        }
        else {
            setuserType("Admin")

        }
    }

    return (
        <section className="main-about-heading  ">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <img
                            style={{
                                width: "100px",
                                display: "inline"
                            }}
                            src="logo/blueLogo.png"
                            alt="logo"
                        />
                        <h2
                            style={{
                                display: "inline",
                                color: "#05a9cc",
                                fontWeight: "bold"
                            }}
                        >Care Humanity</h2>
                    </div>
                </div>
            </div>
            <div className="text-center">
                <h1 className="display-6 fw-bold text-uppercase">sign up</h1>
                <hr className="w-25 mx-auto " />
            </div>
            <div className="container mb-2">
                <div className="row">
                    <div className="col-xxl-8 col-10 col-md-4 mx-auto  ">
                        <div>
                            <div>
                                <h4>
                                    Who you are?
                                </h4>
                            </div>
                            <div className="row py-2">
                                <div className='col'>
                                    <input
                                        onClick={(e) => {
                                            designation(e);
                                        }}
                                        value="donor"
                                        className="form-check-input me-2"
                                        type="radio"
                                        name="flexRadioDefault"
                                        id="flexRadioDefault1"
                                    />
                                    <label className="form-check-label fw-bold" htmlFor="flexRadioDefault1">
                                        Donor
                                    </label>
                                </div>
                                <div className='col'>
                                    <input
                                        onClick={(e) => {
                                            designation(e);
                                        }}
                                        value="seeker"
                                        className="form-check-input me-2"
                                        type="radio"
                                        name="flexRadioDefault"
                                        id="flexRadioDefault2"
                                    />
                                    <label className="form-check-label fw-bold" htmlFor="flexRadioDefault2">
                                        Seeker
                                    </label>
                                </div>
                                <div className='col'>
                                    <input
                                        onClick={(e) => {
                                            designation(e);
                                        }}
                                        value="admin"
                                        className="form-check-input me-2"
                                        type="radio"
                                        name="flexRadioDefault"
                                        id="flexRadioDefault3"

                                    />
                                    <label className="form-check-label fw-bold" htmlFor="flexRadioDefault3">
                                        Admin
                                    </label>
                                </div>
                            </div>

                            <div className="mb-3">
                                <label className="form-label fw-bold" >Name</label>
                                <input
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    name='name'
                                    type="text"
                                    className="form-control"
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label fw-bold">Email address</label>
                                <input
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}

                                    name="email"
                                    type="email"
                                    className="form-control"
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label fw-bold">Phone number</label>
                                <input
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    name='phone'
                                    type="number"
                                    className="form-control"
                                    required

                                />
                            </div>

                            <div className="mb-3"
                                style={{ position: "relative" }}
                            >
                                <label className="form-label fw-bold">Password</label>
                                <input
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}

                                    id="password"
                                    type={passwordType ? "password" : "text"}
                                    className="form-control"
                                    required
                                />
                                <i className="fas fa-eye visible"
                                    id='show'
                                    onClick={showPassword}
                                ></i>
                                <i className="fas fa-eye-slash visible"
                                    id="hide"
                                    onClick={hidePassword}
                                    style={{ display: "none" }}
                                ></i>

                            </div>

                            <div className="text-center py-3">
                                <button
                                    type="submit"
                                    className="btn btn-primary w-100"
                                    onClick={register}
                                >Submit</button>


                            </div>

                            <div className='py-2'>
                                Already have an account? <Link to="/sign-in">Login</Link> now.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SignUp
