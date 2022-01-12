import React from 'react';
import './footer.css'

function Footer() {
    return (
        <footer className='mt-auto' style={{ backgroundColor: "black" }}>
            <div className="container m-auto">
                <div className="row align-items-start ">
                    <div className="col-lg-4 col-sm-12 col-md-12">
                        <div className="d-flex flex-column bd-highlight mb-3 " style={{ color: "white" }} >
                            <div className="p-1 bd-highlight">
                                <img src="./logo/whiteLogo.png" alt="logo" style={{ width: "50px" }} />
                                <h2 className='ps-2' style={{ display: "unset", textDecoration: "underline" }}>Care Humanity</h2>
                            </div>
                            <div className="p-1 bd-highlight">
                                <span>
                                    <i className="fas fa-map-marker-alt px-1"></i>
                                    <span>Head Office: </span>
                                    Sarafa Bazar, Boulton Market, Mithadar, Karachi.0092 (21) 32413232</span>
                            </div>
                            <div className="p-1 bd-highlight">
                                <i className="fas fa-phone-alt px-1"></i>
                                <span>+92-345-1234667</span>
                            </div>
                            <div className="p-1 bd-highlight">
                                <i className="fas fa-phone-alt px-1"></i>
                                <span>+92-345-1234667</span>
                            </div>
                            <div className="p-1 bd-highlight">
                                <i className="fas fa-phone-alt px-1"></i>
                                <span>+92-345-1234667</span>
                            </div>
                            <div className="p-1 bd-highlight">
                                <i className="fas fa-phone-alt px-1"></i>
                                <span>+92-345-1234667</span>
                            </div>

                            <div className="p-1 bd-highlight">
                                <i className="fas fa-envelope"></i>
                                <span> www.careHumanity.com</span>
                            </div>
                            <div className="p-1 bd-highlight">
                                <i className="fas fa-envelope"></i>
                                <span> www.humanityCare.com</span>
                            </div>
                        </div>
                    </div>



                    <div className="col-lg-6 col-sm-12 col-md-12  ">

                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d450.446057194353!2d68.2625117!3d25.419252!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x394c79699805370b%3A0x269a508c0bc6a24b!2sUniversity%20of%20Sindh!5e0!3m2!1sen!2s!4v1641081234641!5m2!1sen!2s" width="600" height="310" style={{ border: 0 }} allowfullscreen="" loading="lazy" ></iframe></div>
                    <div className="col-lg-2 col-sm-12 col-md-12" style={{ color: "white" }}>
                        <div className="d-flex flex-column bd-highlight mb-3">
                            <div className="p-1 bd-highlight">
                                <h4 style={{ display: "contents" }}>SITE LINKS</h4>
                            </div>

                            <div className="p-1 bd-highlight">
                                <i className="fas fa-greater-than"></i>
                                <span> Home</span>
                            </div>
                            <div className="p-1 bd-highlight">
                                <i className="fas fa-greater-than"></i>
                                <span> About US</span>
                            </div>
                            <div className="p-1 bd-highlight">
                                <i className="fas fa-greater-than"></i>
                                <span> Contact Us</span>
                            </div>
                            <div className="p-1 bd-highlight">
                                <i className="fas fa-greater-than"></i>
                                <span> Donate Now</span>
                            </div>
                            <div className="p-1 bd-highlight">
                                <i className="fas fa-greater-than"></i>
                                <span> Our Resourcess  </span>
                            </div>
                            <div className="p-1 bd-highlight">
                                <i className="fas fa-greater-than"></i>
                                <span> Our Services</span>
                            </div>
                            <div className="p-1 bd-highlight">
                                <i className="fas fa-greater-than"></i>
                                <span> Aims & Objectives </span>
                            </div>
                            <div className="p-1 bd-highlight">
                                <i className="fas fa-greater-than"></i>
                                <span> Our History</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div
                className="col-12 bg-success  "
                style={{
                    color:"white",
                    height: ' 40px',
                    display: ' flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <span>© Copyright 2022 All rights reserved, <b>Care Humanity</b> </span>
            </div>
        </footer>
    )
}

export default Footer
