import React from 'react';
import './header.css'

function Header() {
    return (
        <header >

            <div className="container-fluid header" >
                <nav className=" container navbar"
                    style={{padding: '2px' }}  >

                <span>
                    < strong > Head Office: </strong>
                    < i className="fas fa-map-marker-alt " > </i>
                    Allama I.I. Kazi Campus،، Jamshoro, 76080 ,Pakistan                  < i className="fas fa-phone-alt " > </i>
                    0092(21) 32413232 </span>

                <div className="d-flex  " >

                    <div className=' header-right ' >
                        < span > Exemption Certificate </span>
                        < span > Reports </span>
                    </div>
                </div>
            </nav>
        </div>
       </header >
         )
}

export default Header