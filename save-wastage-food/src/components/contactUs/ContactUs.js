import React from 'react'

function ContactUs() {
    return (
        <div style={{display:"flex" ,height:"1000px", backgroundColor:'#0895a4', color: 'white'}} >
            <div className="container m-auto " >
                <div className="row align-items-start">
                    <h1 className="blue">Contact Us</h1>
                    <div className="col-4">
                        <div className="d-flex flex-column bd-highlight mb-3">
                            <div className="p-2 bd-highlight">
                                <span>
                                    <i className="fas fa-map-marker-alt px-1"></i>
                                    <span>Head Office: </span>
                                    Sarafa Bazar, Boulton Market, Mithadar, Karachi.0092 (21) 32413232</span>
                            </div>
                            <div className="p-2 bd-highlight">
                                <i className="fas fa-phone-alt px-1"></i>
                                <span>+92-345-1234667</span>
                            </div>
                            <div className="p-2 bd-highlight">
                                <i className="fas fa-phone-alt px-1"></i>
                                <span>+92-345-1234667</span>
                            </div>
                            <div className="p-2 bd-highlight">
                                <i className="fas fa-phone-alt px-1"></i>
                                <span>+92-345-1234667</span>
                            </div>
                            <div className="p-2 bd-highlight">
                                <i className="fas fa-phone-alt px-1"></i>
                                <span>+92-345-1234667</span>
                            </div>

                            <div className="p-2 bd-highlight">
                                <i className="fas fa-envelope"></i>
                                <span> www.careHumanity.com</span>
                            </div>
                            <div className="p-2 bd-highlight">
                                <i className="fas fa-envelope"></i>
                                <span> www.humanityCare.com</span>
                            </div>
                            <div className="p-2 bd-highlight">
                                <span style={{ fontSize: "30px" }}>
                                    <i className="pe-1  fab fa-facebook-square"></i>
                                    <i className="px-1  fab fa-whatsapp-square"></i>
                                    <i className="px-1  fab fa-twitter-square"></i>
                                    <i className="px-1  fab fa-instagram"></i>
                                    <i className="px-1  fab fa-youtube-square"></i>
                                    <i className="px-1  fab fa-linkedin"></i>
                                    <i className="px-1  fab fa-pinterest-square"></i>

                                </span>
                            </div>
                        </div>
                    </div>








                    <div className="col-8">
                        <h3 >Send Us an Online Message</h3>

                        <form className="row g-4">
                            <div className="col-md-6">
                                <label htmlFor="inputEmail4" className="form-label">
                                    FULL NAME *
                                </label>
                                <input type="text" className="form-control" id="inputEmail4" />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="inputPassword4" className="form-label">

                                    EMAIL ADDRESS *
                                </label>
                                <input type="email" className="form-control" id="inputPassword4" />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="inputEmail4" className="form-label">
                                    MOBILE NUMBER *

                                </label>
                                <input type="number" className="form-control" id="inputEmail4" />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="inputPassword4" className="form-label">

                                    WHATSAPP NUMBER *
                                </label>
                                <input type="number" className="form-control" id="inputPassword4" />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="inputEmail4" className="form-label">
                                    CITY *
                                </label>
                                <input type="text" className="form-control" id="inputEmail4" />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="inputPassword4" className="form-label">

                                    COUNTRY *
                                </label>
                                <input type="text" className="form-control" id="inputPassword4" />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="inputPassword4" className="form-label">

                                    SUBJECT *
                                </label>
                                <input type="text" className="form-control" id="inputPassword4" />
                            </div>
                            <div className="col-12">
                                <label htmlFor="inputAddress" className="form-label">
                                MESSAGE *
                                </label>
                                <textarea 
                                style={{height:'200px'}}
                                
                                    type="text"
                                    className="form-control"
                                    id="inputAddress"
                                />
                            </div>



                            <div className="col-12">
                                <button type="submit" className="btn btn-primary">
                                  SEND <i class="far fa-paper-plane"></i>
                                </button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs
