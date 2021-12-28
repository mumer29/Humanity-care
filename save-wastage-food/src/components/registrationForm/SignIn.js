import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify'
import { firestore } from "../../firebase";



function SignIn() {

    const navigate = useNavigate();
    const [user, setUser] = useState({
        email: "",
        password: ""
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
            if (item.email === user.email && item.password === user.password) {
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

    return (
        <section className="main-about-heading mt-5 ">
            <div className="text-center">
                <h1 className="display-6 fw-bold text-uppercase">log in</h1>
                <hr className="w-25 mx-auto " />
            </div>
            <div className="container my-5">
                <div className="row">
                    <div className="col-xxl-8 col-10 col-md-8 mx-auto  ">
                        <form autoComplete="on" id="loginForm" method='POST'>

                            <div className="mb-3">
                                <label className="form-label">Email address</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={user.email}
                                    onChange={getUserData}
                                    className="form-control"
                                    placeholder="name@example.com"
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Password</label>
                                <input
                                    id="password"
                                    type="password"
                                    name="password"
                                    value={user.password}
                                    onChange={getUserData}
                                    className="form-control"
                                    placeholder="password"
                                />
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
