import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify'
import firebase from "../../firebase";



function SignUp() {

    const navigate = useNavigate();
    const [password, setPassword] = useState(true)
    const [user, setUser] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
    })

    let name, value;
    const getUserData = (evt) => {
        name = evt.target.name;
        value = evt.target.value;
        setUser({ ...user, [name]: value })
    }

    const postData = async (e) => {
        e.preventDefault();
        const db = firebase.firestore();
        const userRef = await db.collection("care-humanity").add(user);
        toast.success('Your account has been create successfully')
        document.getElementById('signUpForm').reset()
        navigate("/sign-in")
    }

    function registration() {
        navigate("/sign-in")

    }
    function showHidePassword(e) {
        const checked = e.target.checked;
        if (checked) {
            setPassword(false)
        } else {
            setPassword(true)
        }
    }

    return (
        <section className="main-about-heading mt-5 ">
            <div className="text-center">
                <h1 className="display-6 fw-bold text-uppercase">sign up</h1>
                <hr className="w-25 mx-auto " />
            </div>
            <div className="container my-5">
                <div className="row">
                    <div className="col-xxl-8 col-10 col-md-8 mx-auto  ">
                        <form
                            method='POST'
                            autoComplete="on"
                            id="signUpForm"
                        >
                            <div className="mb-3">
                                <label className="form-label" >Name</label>
                                <input
                                    value={user.value}
                                    onChange={getUserData}
                                    name='name'
                                    type="text"
                                    className="form-control"
                                    placeholder="enter your name"
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Email address</label>
                                <input
                                    value={user.value}
                                    onChange={getUserData}
                                    name="email"
                                    type="email"
                                    className="form-control"
                                    placeholder="name@example.com"
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Phone number</label>
                                <input
                                    value={user.value}
                                    onChange={getUserData}
                                    name='phone'
                                    type="number"
                                    className="form-control"
                                    placeholder="enter Phone number"

                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Password</label>
                                <input
                                    value={user.value}
                                    onChange={getUserData}
                                    name='password'
                                    id="password"
                                    type={password ? "password" : "text"}
                                    className="form-control"
                                    placeholder="password" />

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
                            <div className="h5 ">
                                <a style={{ color: "blue", cursor: "pointer" }}
                                    onClick={registration}>
                                    Already have and Account</a>

                            </div>
                            <div className="text-center">
                                <button
                                    type="submit"
                                    className="btn btn-primary"
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

export default SignUp
