import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify'
import { firestore } from "../../firebase";



function SignIn() {

    const navigate = useNavigate();
    const [password, setPassword] = useState(true)
    const [user, setUser] = useState({
        email: "",
        password: "",
        // userID:""
    })


    let name, value;
    const getUserData = (evt) => {
        name = evt.target.name;
        value = evt.target.value;
        setUser({ ...user, [name]: value })
    }

    const postData = async (e) => {
        e.preventDefault();
        let db = []
        await firestore.collection("care-humanity").get().then((querySnapshot) => {
            querySnapshot.forEach(element => {
                var data = element.data()
                db.push(data)
            })
        })
        let result = db.find((item) => {
            if (item.userID === user.userID && item.email === user.email && item.password === user.password) {
                return item;
            }
        })
        if (result) {
            toast.success('log in successfully')
            document.getElementById('loginForm').reset()
            navigate("/dashboard")
        } else {
            toast.error("Email or Password is incorect")
            navigate("/sign-in")
        }
    }
    function registration() {
        navigate("/sign-up")

    }
    function showHidePassword(e) {
        const checked = e.target.checked;
        if (checked) {
            setPassword(false)
        } else {
            setPassword(true)
        }
    }
    function designation(e) {
        const user = e.target.value;
       

    }

    return (
        <section className="main-about-heading mt-5 ">
            <div className="text-center">
                <h1 className="display-6 fw-bold text-uppercase">Sign in</h1>
                <hr className="w-25 mx-auto " />
            </div>
            <div className="container my-5">
                <div className="row">
                    <div className="col-xxl-8 col-10 col-md-8 mx-auto  ">
                        <form autoComplete="on" id="loginForm" method='POST'>
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
                                        value=" donor"
                                        className="form-check-input me-2"
                                        type="radio"
                                        name="flexRadioDefault"
                                        id="flexRadioDefault1"
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
                                        defaultChecked
                                    />
                                    <label className="form-check-label" htmlFor="flexRadioDefault3">
                                        Admin
                                    </label>
                                </div>
                            </div>


                            <div className="mb-3">
                                <label className="form-label">Email address</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={user.email}
                                    onChange={getUserData}
                                    className="form-control"
                                    placeholder="abc@example.com"
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Password</label>
                                <input

                                    id="password"
                                    type={password ? "password" : "text"}
                                    name="password"
                                    value={user.password}
                                    onChange={getUserData}
                                    className="form-control"
                                    placeholder="Password"
                                />
                            </div>
                            <div className="mb-3 form-check">
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
                            </div>

                            <div className="h5">
                                <a style={{ color: "blue", cursor: "pointer" }}
                                    onClick={registration}
                                >Create Account</a>
                            </div>
                            <div className="text-center">
                                <button
                                    type="submit"
                                    className="btn btn-primary "
                                    onClick={postData}
                                >Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SignIn
