import React, { useState, useEffect } from 'react';
import './sign.css'
import { useAuthState } from "react-firebase-hooks/auth";
import { Link,  useHistory } from "react-router-dom";
import {  auth, sendPasswordResetEmail } from "../../firebase";



function ForgotPassword() {

    const history = useHistory();
    const [email, setEmail] = useState("");
    const [user, loading] = useAuthState(auth);

    useEffect(() => {
        if (loading) return;
        if (user) history.push("/dashboard");
    }, [user, loading]);




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
                <h2 className=" fw-bold text-uppercase">Forgot Password ?</h2>
                <hr className="w-25 mx-auto " />
            </div>
            <div className="container my-5">
                <div className="row">
                    <div className="col-xxl-8 col-10 col-md-4 mx-auto  ">
                        <div
                            // autoComplete="off"
                            id="loginForm"
                        // method='POST'
                        // onSubmit={postData}
                        >
                            {/* <div>
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
                                        defaultChecked


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
                                    <label className="form-check-label" htmlFor="flexRadioDefault2">
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
                                    <label className="form-check-label" htmlFor="flexRadioDefault3">
                                        Admin
                                    </label>
                                </div>
                            </div> */}


                            <div className="mb-3">
                                <label
                                    className="form-label fw-bold">Email address</label>
                                <input
                                    type="email"
                                    // name="email"
                                    value={email}
                                    // onChange={getUserData}
                                    onChange={(e) => setEmail(e.target.value)}

                                    className="form-control"
                                    placeholder="E-mail Address"
                                    required
                                />
                            </div>

                            {/* <div className="mb-3"
                                style={{ position: "relative" }}
                            >
                                <label className="form-label">Password</label>
                                <input

                                    id="password"
                                    type={password ? "password" : "text"}
                                    name="password"
                                    value={user.password}
                                    onChange={getUserData}
                                    className="form-control"
                                    placeholder="Password"
                                    required
                                />
                                <i className="fas fa-eye visible"
                                    id='show'
                                    onClick={showPassword}
                                ></i>
                                <i class="fas fa-eye-slash visible"
                                    id="hide"
                                    onClick={hidePassword}
                                    style={{ display: "none" }}
                                ></i>
                            </div> */}
                            {/* <div className="mb-3 form-check">
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    id="exampleCheck1"
                                    onClick={(e) => {
                                        showHidePassword(e);
                                    }}
                                />
                                <label className="form-check-label" htmlFor="exampleCheck1">
                                    Show password
                                </label>
                            </div> */}

                            {/* <div className="h6 forgotPassword">
                                <a style={{ color: "red", cursor: "pointer" }}
                                // onClick={registration}
                                >forgot password.??</a>
                            </div> */}
                            <div className="text-center py-3">
                                <button
                                    type="submit"
                                    className="btn btn-primary w-100 "
                                    // onClick={postData}
                                    onClick={() => sendPasswordResetEmail(email)}
                                >Send Email</button>
                            </div>

                            <div>
                                Don't have an account? <Link to="/sign-up">Register</Link> now.
                            </div>
                            {/* <div className="h6 text-end ">
                                Not yet register ?
                                <a
                                    className=' createAccount'
                                    style={{ color: "blue", cursor: "pointer" }}
                                    onClick={registration}
                                > Sign up</a>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ForgotPassword
