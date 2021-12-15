import React from 'react'

function Footer() {
    return (
        <div style={{ display: "flex", height: "80vh", backgroundColor: "aqua" }}>
            <div class="container m-auto">
                <div class="row align-items-start">
                    <div class="col-4">
                        <div className="d-flex flex-column bd-highlight mb-3">
                            <div className="p-2 bd-highlight">
                                <img src="./logo/blueLogo.png" alt="logo" style={{ width: "100px" }} />
                                <h3 style={{ display: "contents" }}>Humanity care</h3>
                            </div>
                            <div className="p-2 bd-highlight">
                                <span>
                                <i class="fas fa-map-marker-alt px-1"></i>
                                    <span>Head Office: </span>
                                    Sarafa Bazar, Boulton Market, Mithadar, Karachi.0092 (21) 32413232</span>
                            </div>
                            <div className="p-2 bd-highlight">
                            <i class="fas fa-phone-alt px-1"></i>
                                <span>+92-345-1234667</span>
                            </div>
                            <div className="p-2 bd-highlight">
                            <i class="fas fa-phone-alt px-1"></i>
                                <span>+92-345-1234667</span>
                            </div>
                            <div className="p-2 bd-highlight">
                            <i class="fas fa-phone-alt px-1"></i>
                                <span>+92-345-1234667</span>
                            </div>
                            <div className="p-2 bd-highlight">
                            <i class="fas fa-phone-alt px-1"></i>
                                <span>+92-345-1234667</span>
                            </div>

                            <div className="p-2 bd-highlight">
                                <i class="fas fa-envelope"></i>
                                <span> www.careHumanity.com</span>
                            </div>
                            <div className="p-2 bd-highlight">
                                <i class="fas fa-envelope"></i>
                                <span> www.humanityCare.com</span>
                            </div>
                        </div>
                    </div>



                    <div class="col-6">
                        <h1>Google map</h1>
                    </div>
                    <div class="col-2">
                        <div className="d-flex flex-column bd-highlight mb-3">
                            <div className="p-2 bd-highlight">
                                <h4 style={{ display: "contents" }}>SITE LINKS</h4>
                            </div>

                            <div className="p-2 bd-highlight">
                                <i class="fas fa-greater-than"></i>
                                <span> Home</span>
                            </div>
                            <div className="p-2 bd-highlight">
                                <i class="fas fa-greater-than"></i>
                                <span> About US</span>
                            </div>
                            <div className="p-2 bd-highlight">
                                <i class="fas fa-greater-than"></i>
                                <span> Contact Us</span>
                            </div>
                            <div className="p-2 bd-highlight">
                                <i class="fas fa-greater-than"></i>
                                <span> Donate Now</span>
                            </div>
                            <div className="p-2 bd-highlight">
                                <i class="fas fa-greater-than"></i>
                                <span> Our Resourcess  </span>
                            </div>
                            <div className="p-2 bd-highlight">
                                <i class="fas fa-greater-than"></i>
                                <span> Our Services</span>
                            </div>
                            <div className="p-2 bd-highlight">
                                <i class="fas fa-greater-than"></i>
                                <span> Aims & Objectives </span>
                            </div>
                            <div className="p-2 bd-highlight">
                            <i class="fas fa-greater-than"></i>
                                <span> Our History</span>
                            </div>



                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
