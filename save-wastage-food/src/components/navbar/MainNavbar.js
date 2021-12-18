import React, { useEffect, useState } from 'react';
import "./mainNavbar.css";
import Header from '../header/Header'

function Navbar() {
    const [state, setstate] = useState(false)
    const [image, setImage] = useState(false)
    // const [imageColor, setImageColor] = useState("/logo/whiteLogo.png")


    function ScrollFun() {
        if (window.scrollY > 50) {
            setstate(true)
            setImage(true)
            // setImageColor("/logo/blueLogo.png")
        } else {
            setstate(false)
            setImage(false)
            // setImageColor("/logo/whiteLogo.png")

        }
    }

    useEffect(() => {
        window.addEventListener("scroll", ScrollFun)

    }, []);
    return (
        <div className='fixed-top'>
            < Header />
            <nav className={state ? "navbar navbar-expand-lg navbar-light onScrollBgColorChange "
                : "navbar navbar-expand-lg navbar-light onHoverBgColorChange "}
                style={{ marginTop: '33px' }}>
                <div className="container ">
                    <a className="navbar-brand" href="#">
                        <img src="/logo/whiteLogo.png" alt="not found" className={image ? "smallLogo" : " largeLogo"} />
                        <h4 className="fw-bolder " style={{ display: "unset", color: "white" }}>Care Humanity</h4>
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto align-items-center">
                            <li className="nav-item px-1 text-center py-2  navbarManue"

                            >

                                <div className='border-end px-2'
                                    style={{ color: "white", fontSize: "15px", fontWeight: 500 }}>
                                    Home
                                </div>
                            </li>
                            <li className="nav-item px-1 text-center py-2  navbarManue"  >
                                <div
                                    className='border-end px-2'
                                    style={{ color: "white", fontSize: "15px", fontWeight: 500 }}>
                                    About Us
                                    <i className="fas fa-angle-down ps-2"></i>


                                    <div className=' navbarList' >
                                        <li>
                                            <a className="dropdown-item" href="#">
                                                Introduction
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#">
                                                Founder
                                            </a>
                                        </li>

                                    </div>
                                </div>

                            </li>
                            <li className="nav-item px-1 text-center py-2  navbarManue"  >

                                <div
                                    className='border-end px-2'
                                    style={{ color: "white", fontSize: "15px", fontWeight: 500 }} >
                                    Services
                                    <i className="fas fa-angle-down ps-2"></i>


                                    <div className=' navbarList' >
                                        <li>
                                            <a className="dropdown-item" href="#">
                                                Our Resources
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#">
                                                Our Sevices
                                            </a>
                                        </li>

                                    </div>

                                </div>

                            </li>
                            <li className="nav-item px-1 text-center py-2  navbarManue" >
                                <div
                                    className='border-end px-2'
                                    style={{ color: "white", fontSize: "15px", fontWeight: 500 }}>
                                    Success Stories

                                    <i className="fas fa-angle-down ps-2"></i>


                                    <div className=' navbarList' >
                                        <li>
                                            <a className="dropdown-item" href="#">
                                                Patient and Seeker
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#">
                                                Testimonial
                                            </a>
                                        </li>
                                    </div>
                                </div>
                            </li>


                            <li className="nav-item px-1 text-center py-2  navbarManue">
                                <div
                                    className='border-end px-2'
                                    style={{ color: "white", fontSize: "15px", fontWeight: 500 }}>
                                    Contact

                                    <i className="fas fa-angle-down ps-2"></i>


                                    <div className=' navbarList' >
                                        <li>
                                            <a className="dropdown-item" href="#">
                                                Our Offices
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#">
                                                Contact Us
                                            </a>
                                        </li>

                                    </div>
                                </div>
                            </li>


                            <li className="nav-item text-center ">
                                <a className="nav-link active px-3 py-0  " aria-current="page" href="#home"
                                    style={{ color: "white", fontSize: "15px", fontWeight: 500 }}
                                >
                                    <button className='btn btn-success  text-uppercase btn-sm '
                                        style={{ fontWeight: 500, fontSize: '15px', borderRadius: "20px" }} >donate</button>

                                </a>
                            </li>
                            <li className="nav-item text-center ">
                                <a className="nav-link active px-3 py-0  " aria-current="page" href="#home"
                                    style={{ color: "white", fontSize: "15px", fontWeight: 500, fontSize: "20px" }}
                                >
                                    <i class="fas fa-search"></i>

                                </a>
                            </li>
                            <li className="nav-item text-center ">
                                <a className="nav-link active px-3 py-0  " aria-current="page" href="#home"
                                    style={{ color: "white", fontSize: "15px", fontWeight: 500, fontSize: "20px" }}
                                >
                                    <i class="fas fa-user"></i>

                                </a>
                            </li>
                            <li className="nav-item text-center ">
                                <a className="nav-link active px-3 py-0  " aria-current="page" href="#home"
                                    style={{ color: "white", fontSize: "15px", fontWeight: 500, fontSize: "20px" }}
                                >
                                    <i class="fas fa-shopping-bag"></i>

                                </a>
                            </li>

                        </ul>
                    </div>
                </div >
            </nav >


        </div >
    )
}

export default Navbar
