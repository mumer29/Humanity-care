import React from 'react';
import './header.css'

function Header() {
    return (
        <header>
            <div className="container-fluid header text-capitalize " >
                <div className="container" >
                    <div className="d-flex justify-content-between ">
                        <div >
                            <span><strong>Head Office: </strong>
                                <i className="fas fa-map-marker-alt px-1"></i>
                                Sarafa Bazar, Boulton Market, Mithadar, Karachi.
                                <i className="fas fa-phone-alt px-1"></i>
                                0092 (21) 32413232</span>
                        </div>
                        <div className='d-flex header-right'  >
                            <span className='me-3'> Exemption Certificate</span>
                            <span>Reports</span>
                        </div>
                    </div>
                </div>
            </div>

        </header>
    )
}

export default Header
