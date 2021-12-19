import React from 'react';
import './location.css'

function Locations() {
    return (
        <div id='ourOffices' style={{backgroundColor:"#00a7e1"}} className='py-1'>
            <div className="container-fluid d-flex " >
                <div className="container m-auto">
                    <div className="row align-items-center" > 
                        <div className="col-lg-4 col-sm-12" style={{color:"white"}}>
                            <div className="wpb_wrapper">
                                <h2 style={{textDecoration:"underline"}}>8 LOCATIONS</h2>
                                <h5>Serving you better</h5>
                                <h5>Stay connected with us</h5>
                            </div>
                        </div>
                        <div className="col-lg-8 col-sm-12 text-center py-3" style={{color:"0895a4"}}>
                            <div className="row "  >
                                <div className="col-lg-3 col-sm-6 p-2">
                                    <div className="py-3 rounded locationCity" >Karachi HQ </div>
                                </div>
                                <div className="col-lg-3 col-sm-6 p-2">
                                    <div className="py-3 rounded locationCity" >Multen </div>
                                </div>
                                <div className="col-lg-3 col-sm-6 p-2">
                                    <div className="py-3 rounded locationCity" >Quetta </div>
                                </div>
                                <div className="col-lg-3 col-sm-6 p-2">
                                    <div className="py-3 rounded locationCity" >Faisalabad </div>
                                </div>
                            </div>
                            <div className="row ">
                                <div className="col-lg-3 col-sm-6 p-2">
                                    <div className="py-3 rounded locationCity" >Hala  </div>
                                </div>
                                <div className="col-lg-3 col-sm-6 p-2">
                                    <div className="py-3 rounded locationCity" >Lahore </div>
                                </div>
                                <div className="col-lg-3 col-sm-6 p-2">
                                    <div className="py-3 rounded locationCity" >Peshawer </div>
                                </div>
                                <div className="col-lg-3 col-sm-6 p-2">
                                    <div className="py-3 rounded locationCity" >Hyderabad </div>
                                </div>
                            </div>
                            {/* <div className="row justify-content-center">
                                <div className="col-lg-3 col-sm-6 p-2">
                                    <div className="py-3 rounded locationCity" >Faisalabad Center</div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Locations
