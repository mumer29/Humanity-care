import React from 'react';
import './header.css'

function Header() {
    return (
        <header>
            {/* <div className="container-fluid header text-capitalize " >
                <div className="container" >
                    <div className="row ">
                        <div className='' >
                            <span>
                                <strong>Head Office: </strong>
                                <i className="fas fa-map-marker-alt px-1"></i>
                                Sarafa Bazar, Boulton Market, Mithadar, Karachi.
                                <i className="fas fa-phone-alt px-1"></i>
                                0092 (21) 32413232</span>
                        </div>
                        <div className=' header-right '  >
                            <span className='me-3'> Exemption Certificate</span>
                            <span>Reports</span>
                        </div>
                    </div>
                </div>
            </div> */}
            <div className="container-fluid header">
                <nav className=" container navbar" style={{padding: '2px'}}>

                        <span >
                            <strong>Head Office: </strong>
                            <i className="fas fa-map-marker-alt "></i>
                            Sarafa Bazar, Boulton Market, Mithadar, Karachi.
                            <i className="fas fa-phone-alt "></i>
                            0092 (21) 32413232</span>

                        <div className="d-flex  ">

                            <div className=' header-right '  >
                                <span > Exemption Certificate</span>
                                <span>Reports</span>
                            </div>
                        </div>
                </nav>
            </div>

        </header>
    )
}

export default Header
