import React from 'react';
import './whoWeAre.css'

function WhoWeAre() {
    return (
        <div>
            <div className="container-fluid  d-flex  justify-content-center  align-items-center w-100 "
                style={{ height: "350px", backgroundColor: "#0895a4", textAlign: "justify" }}>
                <div className="container "  >
                    <h1 style={{ color: "white", fontWeight: "bold" , }}>WHO WE ARE</h1>
                    <h4 style={{color:"white"}}>The Journey that began in a small room on the pavement of Britto Road, Karachi,
                        has gradually blossomed into the largest voluntary health service, non profit
                        organization in Pakistan and has been providing thalassaemia treatment and haematological
                        services along with  blood transfusion services in the Sector, Donating thousands
                        of safe and healthy blood bags to thousands of patients for hemophilia prevention,
                        and saving hundreds of lives through  blood donation in Pakistan.</h4>

                </div>
            </div>
            <div className="container-fluid  bg-primary" className="backgroundImg" >
                <div className=" container d-flex  justify-content-around  w-100 " >

                    <div className="col-3 text-center" style={{ marginTop: "80px" }} >
                        <div>
                            <div >
                                <img src="https://fatimid.org/wp-content/uploads/2019/08/vision.png" alt="not found"
                                />
                            </div>
                            <div style={{ paddingTop: "30px", color: "white" }}>
                                <h1>Our Vision</h1>
                                <p className="fs-5">To maintain and project Fatimid Foundation on the world map.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-3 text-center" style={{ marginTop: "80px" }}>
                        <div>
                            <div >
                                <img src="https://fatimid.org/wp-content/uploads/2019/08/mission.png" alt="not found"
                                />
                            </div>
                            <div className="pt-5" style={{ color: "white" }}>
                                <h1>Our Mission</h1>
                                <p className="fs-5">To achieve managerial & technical excellence in the field of blood banking & haematological services.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-3 text-center" style={{ marginTop: "80px" }}>
                        <div>
                            <div >
                                <img src="https://fatimid.org/wp-content/uploads/2018/09/core-values.png" alt="not found"
                                />
                            </div>
                            <div className="pt-5" style={{ color: "white" }}>
                                <h1>Core Values</h1>
                                <p className="fs-5">Bring communities together to promote blood donation and transfusion which is at the heart of what we do</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container-fluid  d-flex align-items-center " style={{ height: "200px",backgroundColor: "#0895a4",  color:"white"}}>
                <div className="container">
                    <div className="row justify-content-center ">
                        <div className="col-12 text-center pb-4 ">
                            <h2 className="text-uppercase" style={{color:"white"}}>Change the Life of Those Who Have No Hope.</h2>
                        </div>

                        <div className="col-4 text-center ">
                             <button  className="button1"  
                            >Donate Food</button>
                        </div>
                        <div className="col-4 text-center">
                             <button  className="button2" 
                            >Donate Money</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default WhoWeAre
