import React from 'react';
import './header.css'

function Header() {
    return (
        <header >

            <div className="container-fluid header" >
                <nav className=" container navbar"
                    style={{ padding: '2px' }}  >

                    <span>
                        <h5>< strong > Head Office: </strong>
                            < i className="fas fa-map-marker-alt " > </i>
                            Allama I.I. Kazi Campus،، Jamshoro, 76080 ,Pakistan
                            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                            < i className="fas fa-phone-alt " > </i>
                            0092(21) 29213181 </h5>
                    </span>


                </nav>
            </div>
        </header >
    )
}

export default Header