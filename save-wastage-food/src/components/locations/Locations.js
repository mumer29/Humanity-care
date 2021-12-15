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
                                    <div className="py-3 rounded locationCity" >Karachi Office</div>
                                </div>
                                <div className="col-3 p-2">
                                    <div className="py-3 rounded locationCity" >Multen Center</div>
                                </div>
                                <div className="col-3 p-2">
                                    <div className="py-3 rounded locationCity" >Quetta Center</div>
                                </div>
                                <div className="col-3 p-2">
                                    <div className="py-3 rounded locationCity" >Rashidabad Center</div>
                                </div>
                            </div>
                            <div className="row ">
                                <div className="col-3 p-2">
                                    <div className="py-3 rounded locationCity" >Larkana Center</div>
                                </div>
                                <div className="col-3 p-2">
                                    <div className="py-3 rounded locationCity" >Lahore Center</div>
                                </div>
                                <div className="col-3 p-2">
                                    <div className="py-3 rounded locationCity" >Peshawer Center</div>
                                </div>
                                <div className="col-3 p-2">
                                    <div className="py-3 rounded locationCity" >Hyderabad Center</div>
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-3 p-2">
                                    <div className="py-3 rounded locationCity" >Faisalabad Center</div>
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
