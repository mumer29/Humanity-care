import React, { useState } from 'react';
import './sign.css'
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
        const db = await firebase.firestore();
        db.collection("care-humanity").add(user);
        toast.success('Your account has been create successfully')
        document.getElementById('signUpForm').reset()
        navigate("/sign-in")
    }

    function registration() {
        navigate("/sign-in")

    }
    // function showHidePassword(e) {
    //     const checked = e.target.checked;
    //     if (checked) {
    //         setPassword(false)
    //     } else {
    //         setPassword(true)
    //     }
    // }
    function showPassword() {
        setPassword(false)
         document.getElementById("show").style.display="none";
         document.getElementById("hide").style.display="table";
      
    }
    function hidePassword(){
        setPassword(true)
        document.getElementById("show").style.display="table";
        document.getElementById("hide").style.display="none";
    }

    let uniqueIdGenerator = () => {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }

    function designation(e) {

        let userData = document.getElementById("userID");
        const userValue = e.target.value;
        if (userValue === "donor") {
            let result = uniqueIdGenerator()
            let userdezi = "D-"
            let final = userdezi.concat(result)
            userData.value = final
            user.uid = final

        } else if (userValue === "seeker") {
            let result = uniqueIdGenerator()
            let userdezi = "S-"
            let final = userdezi.concat(result)
            userData.value = final
            user.uid = final

        }
        else {
            let result = uniqueIdGenerator()
            let userdesi = "A-"
            let final = userdesi.concat(result)
            userData.value = final
            user.uid = final

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
            <div className="container my-5">
                <div className="row">
                    <div className="col-xxl-8 col-10 col-md-8 mx-auto  ">
                        <form
                            method='POST'
                            autoComplete="off"
                            id="signUpForm"
                            onSubmit={postData}
                        >
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
                                <label className="form-label">User ID</label>
                                <input
                                    // {getUserData}
                                    id='userID'
                                    type="text"
                                    name="userId"
                                    value={user.value}
                                    className="form-control"
                                    placeholder="User ID"
                                    // readonly
                                    disabled

                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label" >Name</label>
                                <input
                                    value={user.value}
                                    onChange={getUserData}
                                    name='name'
                                    type="text"
                                    className="form-control"
                                    placeholder="XYZ"
                                    required
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
                                    placeholder="abc@example.com"
                                    required
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
                                    placeholder="0000-0000000"
                                    required

                                />
                            </div>

                            <div className="mb-3"
                                style={{ position: "relative" }}
                                >
                                <label className="form-label">Password</label>
                                <input
                                    value={user.value}
                                    onChange={getUserData}
                                    name='password'
                                    id="password"
                                    type={password ? "password" : "text"}
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
                                                       <div className="text-center">
                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                // onClick={postData}
                                >Submit</button>
                                <div className="h6 ">
                                <a style={{ color: "blue", cursor: "pointer",align:"right" }}
                                    onClick={registration}>
                                    Already have an Account</a>

                            </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SignUp
