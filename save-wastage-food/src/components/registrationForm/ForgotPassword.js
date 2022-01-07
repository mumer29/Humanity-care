import React, { useState, useEffect } from 'react';
import './sign.css'
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate, useHistory } from "react-router-dom";
import { toast } from 'react-toastify'
import { firestore, auth, sendPasswordResetEmail } from "../../firebase";



function ForgotPassword() {

    const history = useHistory();
    const [email, setEmail] = useState("");
    const [user, loading, error] = useAuthState(auth);

    useEffect(() => {
        if (loading) return;
        if (user) history.push("/dashboard");
    }, [user, loading]);


    // const [password, setPassword] = useState(true)
    // const [user, setUser] = useState({
    //     email: "",
    //     password: "",
    //     uid: '',

    // })


    // let name, value;
    // const getUserData = (evt) => {
    //     name = evt.target.name;
    //     value = evt.target.value;
    //     setUser({ ...user, [name]: value })
    // }

    // let db = []
    // const firestoreDatabase = async () => {
    //     await firestore.collection("care-humanity").get().then((querySnapshot) => {
    //         querySnapshot.forEach(element => {
    //             var data = element.data()
    //             db.push(data)
    //         })
    //     })
    // }





    // const postData = async (e) => {
    //     e.preventDefault();
    //     // console.log(user);

    //     // firebase auth
    //     auth.createUserWithEmailAndPassword(user.email, user.password)
    //         .then(user => {
    //             console.log(user);
    //         }).catch(err => {
    //             console.log(err);
    //         })


    //     let result = db.find((item) => {
    //         if (item.uid[0] === user.uid && item.email === user.email && item.password === user.password) {
    //             return item;
    //         }
    //     })
    //     if (result) {
    //         toast.success('log in successfully')
    //         document.getElementById('loginForm').reset()
    //         navigate("/dashboard")
    //     } else {
    //         toast.error("Email or Password or designation is incorect")
    //         navigate("/sign-in")
    //     }

    // }
    // useEffect(() => {
    //     firestoreDatabase()
    // }, [])


    // function registration() {
    //     navigate("/sign-up")

    // }
    // function showPassword() {
    //     setPassword(false)
    //     document.getElementById("show").style.display = "none";
    //     document.getElementById("hide").style.display = "table";

    // }
    // function hidePassword() {
    //     setPassword(true)
    //     document.getElementById("show").style.display = "table";
    //     document.getElementById("hide").style.display = "none";
    // }
    // function designation(e) {
    //     const userValue = e.target.value;
    //     if (userValue === "donor") {
    //         user.uid = "D"
    //     } else if (userValue === "seeker") {
    //         user.uid = "S"
    //     } else {
    //         user.uid = "A"
    //     }
    // }


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
