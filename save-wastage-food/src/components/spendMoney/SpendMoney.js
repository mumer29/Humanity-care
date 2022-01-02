import React from 'react';
import CountUp from 'react-countup';

function SpendMoney() {
    return (

        <div style={{ backgroundColor: " black" }}>
            <div className="container-fluid d-flex " >
                <div className="container m-auto" >
                    <div className="row justify-content-between py-3">
                        <div className="col-lg-2 col-md-6 " style={{ textAlign: "center", color: "white" }}>
                            <div>
                                <i className="fas fa-hospital-user" style={{ fontSize: "50px", padding: "20px 0", color: "#c93939" }}></i>
                            </div>
                            <h3>
                                <CountUp
                                    start={0}
                                    end={1882}
                                    duration={2.75}

                                />
                            </h3>

                            
                            <p>EDUCATION (MONTHLY)
                            </p>
                        </div>
                        <div className="col-lg-2 col-md-6 " style={{ textAlign: "center", color: "white" }}>
                            <div>
                                <i className="fas fa-clinic-medical" style={{ fontSize: "50px", padding: "20px 0", color: "#190bf5" }}></i>
                            </div>
                            <h3>176</h3>
                            <p>DAILY DASTRAKHAN(MONTHLY)
                            </p>
                        </div>
                        <div className="col-lg-2 col-md-6 " style={{ textAlign: "center", color: "white" }}>
                            <div>

                                <i className="fas fa-user-injured" style={{ fontSize: "50px", padding: "20px 0", color: "#64ff15" }}></i>
                            </div>
                            <h3>38,899</h3>
                            <p>Medical Camps Patients Treated  </p>
                        </div>
                        <div className="col-lg-2 col-md-6 " style={{ textAlign: "center", color: "white" }}>
                            <div>

                                <i className="fas fa-hand-holding-usd" style={{ fontSize: "50px", padding: "20px 0", color: "#71058d" }}></i>
                            </div>
                            <h3>Rs.343.12 M</h3>
                            <p>Funds Spent </p>
                        </div>
                        <div className="col-lg-2 col-md-6 " style={{ textAlign: "center", color: "white" }}>
                            <div>
                                <i className="fas fa-hand-holding-heart" style={{ fontSize: "50px", padding: "20px 0", color: "#f1cc3c" }}></i>
                            </div>
                            <h3>4,037</h3>
                            <p>FAMILY ADOPTION(MONTHLY)
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default SpendMoney
