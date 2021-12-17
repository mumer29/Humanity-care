import React from 'react';
import "./mainNavbar.css"

function nav() {

    
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light fixed-top onScrollBgColorChange ">
                <div className="container ">
                    <a className="navbar-brand" href="#">
                        <img src='/logo/whiteLogo.png' alt="not found" style={{ width: "100px" }} />
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
                            <li className="nav-item px-2 text-center border-end">
                                <a className="nav-link active px-3 py-0  " aria-current="page" href="#home"
                                    style={{ color: "white", fontSize: "15px", fontWeight: 500 }}
                                >
                                    Home
                                </a>
                            </li>
                            <li className="nav-item px-2 text-center border-end">
                                <a className="nav-link active px-3 py-0  " aria-current="page" href="#home"
                                    style={{ color: "white", fontSize: "15px", fontWeight: 500 }}
                                >
                                    About Us
                                    <i className="fas fa-angle-down ps-2"></i>
                                </a>
                            </li>
                            <li className="nav-item px-2 text-center border-end">
                                <a className="nav-link active px-3 py-0  " aria-current="page" href="#home"
                                    style={{ color: "white", fontSize: "15px", fontWeight: 500 }}
                                >
                                    Donate
                                </a>
                            </li>
                            <li className="nav-item px-2 text-center ">
                                <a className="nav-link active px-3 py-0  " aria-current="page" href="#home"
                                    style={{ color: "white", fontSize: "15px", fontWeight: 500 }}
                                >
                                    Get Involved
                                </a>
                            </li>
                            <li className="nav-item px-2 text-center ">
                                <a className="nav-link active px-3 py-0  " aria-current="page" href="#home"
                                    style={{ color: "white", fontSize: "15px", fontWeight: 500 }}
                                >
                                    <button className='btn btn-danger  text-uppercase btn-sm '
                                        style={{ fontWeight: 500, fontSize: '15px' }} >donate</button>

                                </a>
                            </li>
                            <li className="nav-item px-2 text-center ">
                                <a className="nav-link active px-3 py-0  " aria-current="page" href="#home"
                                    style={{ color: "white", fontSize: "15px", fontWeight: 500 }}
                                >
                                    <i class="fas fa-search"></i>

                                </a>
                            </li>
                            <li className="nav-item px-2 text-center ">
                                <a className="nav-link active px-3 py-0  " aria-current="page" href="#home"
                                    style={{ color: "white", fontSize: "15px", fontWeight: 500 }}
                                >
                                    <i class="fas fa-user"></i>

                                </a>
                            </li>
                            <li className="nav-item px-2 text-center ">
                                <a className="nav-link active px-3 py-0  " aria-current="page" href="#home"
                                    style={{ color: "white", fontSize: "15px", fontWeight: 500 }}
                                >
                                    <i class="fas fa-shopping-bag"></i>

                                </a>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>


        </div>
    )
}

export default nav
