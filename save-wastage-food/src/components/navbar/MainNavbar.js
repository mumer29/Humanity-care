import React, { useEffect, useState } from 'react';
import {Link} from 'react-scroll';
import "./mainNavbar.css";
import Header from '../header/Header';


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
        <div className='fixed-top navbar-top'>
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
                                        <li className='listSubManue'>
                                            <Link to='introduction' spy={true}  className="dropdown-item subManue" >
                                                Introduction
                                            </Link>
                                        </li>
                                        <li className='listSubManue'>
                                            <Link to='founder'  spy={true} className="dropdown-item subManue" >
                                                Founder
                                            </Link>
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
                                        <li className='listSubManue'>
                                            <Link to='ourServices'  spy={true} className="dropdown-item subManue" >
                                                Our Sevices
                                            </Link>
                                        </li>
                                        <li className='listSubManue'>
                                            <Link to='ourResources'  spy={true} className="dropdown-item subManue" >
                                                Our Resources
                                            </Link>
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
                                        <li className='listSubManue'>
                                            <Link to='seekerAndDonors'  spy={true} className="dropdown-item subManue" >
                                                 Seeker and Donors
                                            </Link>
                                        </li>
                                        <li className='listSubManue'>
                                            <Link to='testimonial'  spy={true} className="dropdown-item subManue" >
                                                Testimonial
                                            </Link>
                                        </li>
                                    </div>
                                </div>
                            </li>


                            <li className="nav-item px-1 text-center py-2  navbarManue">
                                <div
                                    className=' px-2'
                                    style={{ color: "white", fontSize: "15px", fontWeight: 500 }}>
                                    Contact

                                    <i className="fas fa-angle-down ps-2"></i>


                                    <div className=' navbarList' >
                                        <li className='listSubManue'>
                                            <Link to='ourOffices'  spy={true} className="dropdown-item subManue" >
                                                Our Offices
                                            </Link>
                                        </li>
                                        <li className='listSubManue'>
                                            <Link to='contactUs'  spy={true} className="dropdown-item subManue" >
                                                Contact Us
                                            </Link>
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
