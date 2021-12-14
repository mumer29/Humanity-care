import React from 'react';
import './whoWeAre.css'

function WhoWeAre() {
    return (
        <div>
            <div className="container-fluid  d-flex  justify-content-center  align-items-center w-100  "
                style={{ height: "350px", backgroundColor: "#0895a4", textAlign: "justify" }}>
                <div className="container "  >
                    <h1 style={{
                        color: "white", fontWeight: "bold", textAlign: "center",
                        width: "262px", borderBottom: "5px solid", textAlign: "center", margin: "auto",

                    }}
                    >WHO WE ARE</h1>
                    <h4 style={{ color: "white", paddingTop: "25px" }}>
                        We are developing this project to help poor and needy peoples in the Pakistan,
                        and reduce the food wastage,
                        according to a report, 40 percent of food in Pakistan is wasted.
                         Food wastage is common in wedding ceremonies (Banquets), and hotels.
                         The main goal of this project is to reduce hunger of poor people by 
                         supplying that food being wasted or food in excess in banquets and hotels or in events,
                          with the help of Non-Profit Organizations or some other organizations
                           (Receive donations and distribute food).
                        
                        </h4>

                </div>
            </div>


            <div className='container-fluid  d-flex backgroundImg' style={{ height: "60vh", color: "white" }}>
                <div className='container m-auto' >
                    <div className="row">
                        <div className=" col py-3 d-flex " style={{ width: "18rem", border: "none", flexDirection: 'column' }}>
                            <img style={{ height: "100px", width: "100px", margin: "auto" }} src="https://fatimid.org/wp-content/uploads/2019/08/vision.png" className="card-img-top" alt="..." />
                            <div className="card-body py-2" style={{ textAlign: "justify", textAlign: "center" }}>
                                <h2 className="card-title">Our Vision</h2>
                                <p className="card-text">
                                    To maintain and project Humanity <br />Care Foundation on the world map.
                                </p>
                            </div>
                        </div>
                        <div className=" col py-3 d-flex" style={{ width: "18rem", border: "none", flexDirection: 'column' }}>
                            <img style={{ height: "100px", width: "100px", margin: "auto" }} src="https://fatimid.org/wp-content/uploads/2019/08/mission.png" className="card-img-top" alt="..." />
                            <div className="card-body py-2" style={{ textAlign: "justify", textAlign: "center" }}>
                                <h2 className="card-title">Our Mission</h2>
                                <p className="card-text">
                                    To achieve managerial & technical<br />excellence in the field of Humanity <br />Care banking & haematological services.
                                </p>
                            </div>
                        </div>
                        <div className=" col py-3 d-flex" style={{ width: "18rem", border: "none", flexDirection: 'column' }}>
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



            <div className="container-fluid  d-flex align-items-center  " style={{ height: "200px", backgroundColor: "#0895a4", color: "white" }}>
                <div className="container">
                    <div className="row justify-content-center ">
                        <div className="col-12 text-center pb-4 ">
                            <h2 className="text-uppercase" style={{ color: "white" }}>Change the Life of Those Who Have No Hope.</h2>
                        </div>

                        <div className="col-4 text-center ">
                            <button className="button1"
                            >DONATE FOOD</button>
                        </div>
                        <div className="col-4 text-center">
                            <button className="button2"
                            >SPONSOR A FAMILY</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default WhoWeAre
