import React from 'react';
import './whoWeAre.css'

function WhoWeAre() {
    return (
        <div id='introduction'  style={{ backgroundColor: "#0195d3", wordSpacing:"-2px"}}>
            <div className="container-fluid  d-flex  justify-content-center align-items-center w-100 py-5  "
                style={{textAlign: "justify" }}
                >
                <div className="container "  >
                    <u style={{
                        color: "white", fontWeight: "bold", textAlign: "center",
                        borderBottom: "5px solid", textAlign: "center", margin: "auto",
                    }}>
                        <h1
                        >WHO WE ARE</h1>
                    </u>
                    <p style={{ color: "white", paddingTop: "25px", fontSize:' 20px' }}>
                        We are developing this project to help poor and needy peoples in the Pakistan,
                        and reduce the food wastage,
                        according to a report, 40 percent of food in Pakistan is wasted.
                        Food wastage is common in wedding ceremonies (Banquets), and hotels.
                        The main goal of this project is to reduce hunger of poor people by
                        supplying that food being wasted or food in excess in banquets and hotels or in events,
                        with the help of Non-Profit Organizations or some other organizations
                        (Receive donations and distribute food).

                    </p>

                </div>
            </div>


            <div className='container-fluid  d-flex backgroundImg py-5' style={{ color: "white" }}>
                <div className='container m-auto' >
                    <div className="row">
                        <div className=" col-lg-4 col-sm-12 col-md-4 py-3 d-flex " style={{ border: "none", flexDirection: 'column' }}>
                            <img style={{ height: "100px", width: "100px", margin: "auto" }} src="https://fatimid.org/wp-content/uploads/2019/08/vision.png" className="card-img-top" alt="..." />
                            <div className="card-body py-2" style={{ textAlign: "justify", textAlign: "center" }}>
                                <h2 className="card-title">Our Vision</h2>
                                <p className="card-text">
                                    To maintain and project Humanity <br />Care Foundation on the world map.
                                </p>
                            </div>
                        </div>
                        <div className=" col-lg-4 col-sm-12 col-md-4 py-3 d-flex" style={{ border: "none", flexDirection: 'column' }}>
                            <img style={{ height: "100px", width: "100px", margin: "auto" }} src="https://fatimid.org/wp-content/uploads/2019/08/mission.png" className="card-img-top" alt="..." />
                            <div className="card-body py-2" style={{ textAlign: "justify", textAlign: "center" }}>
                                <h2 className="card-title">Our Mission</h2>
                                <p className="card-text">
                                    To achieve managerial & technical<br />excellence in the field of Humanity <br />Care banking & haematological services.
                                </p>
                            </div>
                        </div>
                        <div className=" col-lg-4 col-sm-12 col-md-4 py-3 d-flex" style={{ border: "none", flexDirection: 'column' }}>
                            <img style={{ width: "170px", margin: "auto", marginTop: "20px" }} src="https://fatimid.org/wp-content/uploads/2018/09/core-values.png" className="card-img-top" alt="..." />
                            <div className="card-body py-2" style={{ textAlign: "justify", textAlign: "center" }}>
                                <h2 className="card-title">Core Values</h2>
                                <p className="card-text">
                                    Bring communities together to<br />promote needy people
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className='container-fluid d-flex py-4' style={{ color: "#fff", border:"1 solid black", backgroundColor:"#555de5" }}>
                <div className='container m-auto'  >
                    <div className='text-center pb-2'   >
                        <h2>  CHANGE THE LIFE OF THOSE WHO HAVE NO HOPE.</h2>
                    </div>
                    <div className="row mt-2 justify-content-center ">
                        <div className="col-lg-4 col-md-6 text-center py-3 ">
                            <button style={{borderRadius:"10px"}} className='donateFoodButton1' 
                            >DONATE FOOD</button>
                        </div>
                        <div className="col-lg-4 col-md-6 text-center py-3  ">
                            <button style={{borderRadius:"10px"}} className='donateFoodButton2' 
                            >SPONSOR A FAMILY</button>

                        </div>
                    </div>

                </div>

            </div>

            {/* <div className="container-fluid  d-flex align-items-center py-5  " style={{ color: "white" }}>
                <div className="container">
                    <div className="row justify-content-center  m-auto">
                        <div className="col-lg-12 col-sm-12 text-center pb-4 ">
                            <h2 className="text-uppercase" style={{ color: "white" }}>Change the Life of Those Who Have No Hope.</h2>
                        </div>

                        <div className="col-lg-4  col-sm-12 text-center ">
                            <button className="button1"
                            >DONATE FOOD</button>
                        </div>
                        <div className="col-lg-4  col-sm-12 text-center">
                            <button className="button2"
                            >SPONSOR A FAMILY</button>
                        </div>
                    </div>
                </div>
            </div> */}

        </div>
    )
}

export default WhoWeAre
