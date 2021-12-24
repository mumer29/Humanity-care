import React from 'react';
import { useNavigate } from "react-router-dom";

import { toast } from 'react-toastify'
import { useForm } from "react-hook-form";



function SignIn() {
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm();

    const createUser = (user) => {
        console.log(user)

        toast.success('Sign in successfully')
        
        document.getElementById('loginForm').reset()
        navigate("/")


    }
    function myFunction() {
        let x = document.getElementById("password");
        if (x.type === "password") {
            x.type = "text";

        }
        else {
            x.type = "password";
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
                        <form autoComplete="on" id="loginForm" onSubmit={handleSubmit(createUser)}>

                            <div className="mb-3">
                                <label className="form-label">Email address</label>
                                <input type="email" className="form-control"  {...register("email", { required: true })}
                                    placeholder="name@example.com" />
                                {errors.exampleRequired && <span>This field is required</span>}
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Password</label>
                                <input id="password" type="password" className="form-control"  {...register("password", { required: true })}
                                    placeholder="password" />
                                <i id="visible-on" className="bi bi-eye-fill float-end h3 visibility" onClick={myFunction} ></i>
                                <i id="visible-ff" className="bi bi-eye-slash-fill float-end h3 visibility" onClick={myFunction} style={{ display: "none" }}></i>
                                {errors.exampleRequired && <span>This field is required</span>}
                            </div>
                            <div className="h5">
                                {/* <Link to ='/sign-up'>Create Account</Link> */}
                                <a style={{ color: "blue", cursor: "pointer" }} onClick={registration}>Create Account</a>
                            </div>
                            <div className="text-center">
                                <button type="submit" className="btn btn-primary ">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SignIn
