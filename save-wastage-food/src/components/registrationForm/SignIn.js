import React, { useState } from 'react';
import './sign.css'
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify'
import { firestore } from "../../firebase";



function SignIn() {

    const navigate = useNavigate();
    const [password, setPassword] = useState(true)
    const [user, setUser] = useState({
        email: "",
        password: "",
        uid: '',

    })


    let name, value;
    const getUserData = (evt) => {
        name = evt.target.name;
        value = evt.target.value;
        setUser({ ...user, [name]: value })
    }

    const postData = async (e) => {
        e.preventDefault();
        console.log(user);
        let db = []
        await firestore.collection("care-humanity").get().then((querySnapshot) => {
            querySnapshot.forEach(element => {
                var data = element.data()
                db.push(data)
            })
        })
        let result = db.find((item) => {
            if (item.uid[0] === user.uid && item.email === user.email && item.password === user.password) {
                return item;
            }
        })
        if (result) {
            toast.success('log in successfully')
            document.getElementById('loginForm').reset()
            navigate("/dashboard")
        } else {
            toast.error("Email or Password or designation is incorect")
            navigate("/sign-in")
        }
    }
    function registration() {
        navigate("/sign-up")

    }
    function showPassword() {
        setPassword(false)
        document.getElementById("show").style.display = "none";
        document.getElementById("hide").style.display = "table";

    }
    function hidePassword() {
        setPassword(true)
        document.getElementById("show").style.display = "table";
        document.getElementById("hide").style.display = "none";
    }
    function designation(e) {
        const userValue = e.target.value;
        if (userValue === "donor") {
            user.uid = "D"
        } else if (userValue === "seeker") {
            user.uid = "S"
        } else {
            user.uid = "A"
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
            <div className="container my-5">
                <div className="row">
                    <div className="col-xxl-8 col-10 col-md-8 mx-auto  ">
                        <form
                            autoComplete="off"
                            id="loginForm"
                            method='POST'
                            onSubmit={postData}>
                            <div>
                                <h4>
                                    Who you are?
                                </h4>
                            </div>
                            <div className="row py-2">
                                <div className='col text-center'>
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
                                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                                        Donor
                                    </label>
                                </div>
                                <div className='col text-center'>
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
                                <div className='col text-center'>
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
                            </div>


                            <div className="mb-3">
                                <label
                                    className="form-label">Email address</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={user.email}
                                    onChange={getUserData}
                                    className="form-control"
                                    placeholder="abc@example.com"
                                    required
                                />
                            </div>

                            <div className="mb-3"
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
                            </div>
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

                            <div className="h6 forgotPassword">
                                <a style={{ color: "red", cursor: "pointer" }}
                                // onClick={registration}
                                >forgot password.??</a>
                            </div>
                            <div className="text-center">
                                <button
                                    type="submit"
                                    className="btn btn-primary "
                                // onClick={postData}
                                >Submit</button>
                                <div className="h6 text-end ">
<<<<<<< HEAD
                                    <a
                                        className=' createAccount'

                                        style={{ color: "blue", cursor: "pointer" }}
                                        onClick={registration}
                                    >Create An Account</a>
=======
                                    <a style={{ color: "blue", cursor: "pointer" }}
                                        onClick={registration}>
                                    <u>Create An Account</u></a>
>>>>>>> 30bcf0c0e04711c66ccec54c1104de993c120880
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SignIn
