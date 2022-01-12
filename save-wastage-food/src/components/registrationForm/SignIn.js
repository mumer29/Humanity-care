import React, { useState, useEffect } from 'react';
import './sign.css'
import { Link, useHistory } from "react-router-dom";
import { toast } from 'react-toastify'
import { firestore, auth, signInWithEmailAndPassword, } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";




function SignIn() {

    const [passwordType, setPasswordType] = useState(true)
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, loading] = useAuthState(auth);
    const [userType, setuserType] = useState("");


    const history = useHistory();
    useEffect(() => {
        if (loading) {
            return;
        }
        if (user) history.push("/dashboard");
    }, [user, loading]);





    const postData = async () => {



        if (!userType) {
            toast.error("Please select a designation from  Donor, Seeker and Admin")
        } else if (!email) {
            toast.error("Please inter your email")
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
                if (item.userType === userType && item.email === email) {
                    return item;
                }
            })
            if (result) {
                signInWithEmailAndPassword(email, password)
            } else {
                toast.error("Email or Password or designation is incorect")
                history.push("/sign-in")
            }
        }

    }
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
                <h1 className="display-6 fw-bold text-uppercase">Sign in</h1>
                <hr className="w-25 mx-auto " />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xxl-8 col-10 col-md-4 mx-auto  ">
                        <div  >
                            <div>
                                <h4>
                                    Who you are?
                                </h4>
                            </div>
                            <div className="row py-2">
                                <div className='col '>
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
                                <div className='col '>
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
                                <div className='col '>
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
                                <label
                                    className="form-label fw-bold">Email address</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="form-control"
                                    required
                                />
                            </div>

                            <div className="mb-3"
                                style={{ position: "relative" }}
                            >
                                <label className="form-label fw-bold">Password</label>
                                <input

                                    id="password"
                                    type={passwordType ? "password" : "text"}
                                    name="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}

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
                                    className="btn btn-primary w-100 "
                                    onClick={postData}
                                >Submit</button>

                            </div>
                            <div className='py-2'    >
                                <Link to="/forgotPassword"
                                    className='forgotPassword '
                                >Forgot Password</Link>
                            </div>
                            <div>
                                Don't have an account? <Link to="/Sign-up">Register</Link> now.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default SignIn
