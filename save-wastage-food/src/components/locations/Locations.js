import React from 'react';
import './location.css'

function Locations() {
    return (
        <div style={{backgroundColor:"#0895a4"}} className='py-5'>
            <div className="container-fluid d-flex" style={{height:"270px"}}>
                <div className="container m-auto">
                    <div className="row" > 
                        <div className="col-4" style={{color:"white"}}>
                            <div className="wpb_wrapper">
                                <h2>9 LOCATIONS</h2>
                                <h3>Serving you better</h3>
                                <h4>Stay connected with us</h4>
                            </div>
                        </div>
                        <div className="col-8 text-center" style={{color:"0895a4"}}>
                            <div className="row "  >
                                <div className="col-3 p-2">
                                    <div className="py-3 rounded locationCity" style={{border:'2px solid white'}}>Karachi Office</div>
                                </div>
                                <div className="col-3 p-2">
                                    <div className="py-3 rounded locationCity" style={{border:'2px solid white'}}>Multen Center</div>
                                </div>
                                <div className="col-3 p-2">
                                    <div className="py-3 rounded locationCity" style={{border:'2px solid white'}}>Quetta Center</div>
                                </div>
                                <div className="col-3 p-2">
                                    <div className="py-3 rounded locationCity" style={{border:'2px solid white'}}>Rashidabad Center</div>
                                </div>
                            </div>
                            <div className="row ">
                                <div className="col-3 p-2">
                                    <div className="py-3 rounded locationCity" style={{border:'2px solid white'}}>Larkana Center</div>
                                </div>
                                <div className="col-3 p-2">
                                    <div className="py-3 rounded locationCity" style={{border:'2px solid white'}}>Lahore Center</div>
                                </div>
                                <div className="col-3 p-2">
                                    <div className="py-3 rounded locationCity" style={{border:'2px solid white'}}>Peshawer Center</div>
                                </div>
                                <div className="col-3 p-2">
                                    <div className="py-3 rounded locationCity" style={{border:'2px solid white'}}>Hyderabad Center</div>
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-3 p-2">
                                    <div className="py-3 rounded locationCity" style={{border:'2px solid white'}}>Faisalabad Center</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Locations
