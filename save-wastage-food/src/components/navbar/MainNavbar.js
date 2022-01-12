import React, { useEffect, useState } from 'react';
import { useNavigate, useHistory } from "react-router-dom";
import { Link } from 'react-scroll';
import "./mainNavbar.css";


function Navbar() {
    const history = useHistory();

    const [state, setstate] = useState(false)
    const [image, setImage] = useState(false)
    const [navTop, setnavTop] = useState(false)
    // const [imageColor, setImageColor] = useState("/logo/whiteLogo.png")


    function ScrollFun() {
        if (window.scrollY > 50) {
            setstate(true)
            setImage(true)
            // setImageColor("/logo/blueLogo.png")
            setnavTop(true)
        } else {
            setstate(false)
            setImage(false)
            // setImageColor("/logo/whiteLogo.png")
            setnavTop(false)


        }
    }

    function registration() {
        history.push("/sign-in")
    }


    useEffect(() => {
        window.addEventListener("scroll", ScrollFun)

    }, []);
    return (
        <div
            className={navTop ? "fixed-top " : "fixed-scroll-top bgColor"}>
            <nav className={state ? "navbar navbar-expand-lg navbar-light onScrollBgColorChange  "
                : "navbar navbar-expand-lg navbar-light onHoverBgColorChange  "}
            >
                <div className="container-fluid px-4 ">

                    <img src="/logo/whiteLogo.png" alt="not found"
                        className={image ? "smallLogo" : " largeLogo"} />


                    <h4 className="fw-bolder "
                        style={{
                            color: ' white',
                            display: 'flex',
                            flexDirection: 'column'
                        }
                        }> <u>Care Humanity</u>
                        <span 
                        style={{
                            fontSize: '15px',
                            marginLeft: "18px"
                        }}
                        >we care we share</span>

                    </h4>

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
                        <ul className="navbar-nav ms-auto NavUlAlignment">
                            <li className="nav-item px-1  py-2  navbarManue" >
                                <div className=' px-2' >
                                    <Link style={{ color: "white", fontWeight: 500, textDecoration: 'none' }}
                                        activeClass="active"
                                        offset={-70}
                                        duration={500}
                                        to='home'
                                        spy={true}
                                        className=" subManue homeMamue" >
                                        Home

                                    </Link>
                                </div>
                            </li>
                            <li className="nav-item px-1  py-2  navbarManue"  >
                                <div
                                    className=' px-2'
                                    style={{ color: "white", fontWeight: 500 }}>
                                    About Us
                                    <i className="fas fa-angle-down ps-2"></i>
                                    <div className=' navbarList' >
                                        <li className='listSubManue'>
                                            <Link
                                                activeClass="active"
                                                offset={-70}
                                                duration={500}
                                                to='introduction' spy={true}
                                                className="dropdown-item subManue" >
                                                Introduction
                                            </Link>
                                        </li>
                                        <li className='listSubManue'>
                                            <Link
                                                to='founder'
                                                activeClass="active"
                                                offset={-70}
                                                duration={500}
                                                spy={true}
                                                className="dropdown-item subManue" >
                                                Founder
                                            </Link>
                                        </li>

                                    </div>
                                </div>

                            </li>
                            <li className="nav-item px-1  py-2  navbarManue"  >

                                <div
                                    className=' px-2'
                                    style={{ color: "white", fontWeight: 500 }} >
                                    Services
                                    <i className="fas fa-angle-down ps-2"></i>


                                    <div className=' navbarList' >
                                        <li className='listSubManue'>
                                            <Link
                                                to='ourServices'
                                                activeClass="active"
                                                offset={-70}
                                                duration={500}
                                                spy={true}
                                                className="dropdown-item subManue" >
                                                Our Sevices
                                            </Link>
                                        </li>
                                        <li className='listSubManue'>
                                            <Link
                                                to='ourResources'
                                                spy={true}
                                                activeClass="active"
                                                offset={-70}
                                                duration={500}
                                                className="dropdown-item subManue" >
                                                Our Resources
                                            </Link>
                                        </li>

                                    </div>

                                </div>

                            </li>
                            <li className="nav-item px-1  py-2  navbarManue" >
                                <div
                                    className=' px-2'
                                    style={{ color: "white", fontWeight: 500 }}>
                                    Success Stories

                                    <i className="fas fa-angle-down ps-2"></i>


                                    <div className=' navbarList' >
                                        <li className='listSubManue'>
                                            <Link
                                                to='seekerAndDonors'
                                                spy={true}
                                                activeClass="active"
                                                offset={-70}
                                                duration={500}
                                                className="dropdown-item subManue" >
                                                Seeker and Donors
                                            </Link>
                                        </li>
                                        <li className='listSubManue'>
                                            <Link
                                                to='testimonial'
                                                spy={true}
                                                activeClass="active"
                                                offset={-70}
                                                duration={500}
                                                className="dropdown-item subManue" >
                                                Testimonial
                                            </Link>
                                        </li>
                                    </div>
                                </div>
                            </li>


                            <li className="nav-item px-1  py-2  navbarManue">
                                <div
                                    className=' px-2'
                                    style={{ color: "white", fontWeight: 500 }}>
                                    Contact

                                    <i className="fas fa-angle-down ps-2"></i>


                                    <div className=' navbarList' >
                                        <li className='listSubManue'>
                                            <Link
                                                to='ourOffices'
                                                spy={true}
                                                activeClass="active"
                                                offset={-70}
                                                duration={500}
                                                className="dropdown-item subManue" >
                                                Our Offices
                                            </Link>
                                        </li>
                                        <li className='listSubManue'>
                                            <Link
                                                to='contactUs'
                                                spy={true}
                                                activeClass="active"
                                                offset={-70}
                                                duration={500}
                                                className="dropdown-item subManue" >
                                                Contact Us
                                            </Link>
                                        </li>

                                    </div>
                                </div>
                            </li>


                            {/* <li className="nav-item  ">
                                <a className="nav-link active px-3 py-0  " aria-current="page"
                                    style={{ color: "white", fontWeight: 500 }}
                                >
                                    <button className='btn btn-success  text-uppercase btn-sm '
                                        style={{ fontWeight: 500, fontSize: '15px', borderRadius: "20px", width: "110px" }} 
                                        >donate</button>
                                </a>
                            </li> */}
                            {/* <li className="nav-item  ">
                                <a className="nav-link active py-0  " aria-current="page"
                                    style={{ color: "white", fontWeight: 500, fontSize: "20px" }}
                                >

                                    <div className="search-box">
                                        <button className="btn-search">
                                            <i className="fas fa-search" />
                                        </button>
                                        <input
                                            type="text"
                                            className="input-search"
                                            placeholder="Type to Search..."
                                        />
                                    </div>


                                </a>
                            </li> */}
                            <li className="nav-item  ">
                                {/* <a className="nav-link active px-3 py-0  " aria-current="page"
                                    style={{ color: "white", fontWeight: 500, fontSize: "20px" }} > */}
                                {/* <i className="fas fa-user"
                                        onClick={registration}
                                    ></i> */}
                                <li className="nav-item px-1  py-2  navbarManue" >
                                    <div className=' px-2' >
                                        <a style={{ color: "white", fontWeight: 500, textDecoration: 'none' }}
                                            activeClass="active"
                                            duration={500}
                                            spy={true}
                                            className=" subManue homeMamue"
                                            onClick={registration} >
                                            Sign in
                                        </a>
                                    </div>
                                </li>


                                {/* </a> */}
                            </li>
                            {/* <li className="nav-item  ">
                                <a className="nav-link active px-3 py-0  " aria-current="page"
                                    style={{ color: "white", fontWeight: 500, fontSize: "20px" }}
                                >
                                    <i class="fas fa-shopping-bag"></i>

                                </a>
                            </li> */}

                        </ul>
                    </div>
                </div >
            </nav >


        </div >
    )
}

export default Navbar
