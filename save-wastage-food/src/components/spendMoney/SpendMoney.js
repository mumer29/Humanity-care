import React from 'react'

function SpendMoney() {
    return (
       
        <div style={{ backgroundColor: " #0195d3"}}>
            <div className="container-fluid d-flex " >
                <div className="container m-auto" >
                    <div className="row justify-content-between py-5">
                        <div className="col-lg-2 " style={{ textAlign: "center",  color:"white" }}>
                            <div>
                                <i className="fas fa-hospital-user" style={{ fontSize: "50px", padding: "20px 0", color: "#c93939" }}></i>
                            </div>
                            <h3>1,882</h3>
                            <p>Surgeries & Medical
                                Procedures Performed </p>
                        </div>
                        <div className="col-lg-2 " style={{ textAlign: "center",  color:"white" }}>
                            <div>
                                <i className="fas fa-clinic-medical" style={{ fontSize: "50px", padding: "20px 0", color: "#190bf5" }}></i>
                            </div>
                            <h3>105</h3>
                            <p>Medical Camps Organized </p>
                        </div>
                        <div className="col-lg-2 " style={{ textAlign: "center",  color:"white" }}>
                            <div>

                                <i className="fas fa-user-injured" style={{ fontSize: "50px", padding: "20px 0", color: "#64ff15" }}></i>
                            </div>
                            <h3>38,899</h3>
                            <p>Medical Camps Patients Treated  </p>
                        </div>
                        <div className="col-lg-2 " style={{ textAlign: "center",  color:"white" }}>
                            <div>

                                <i className="fas fa-hand-holding-usd" style={{ fontSize: "50px", padding: "20px 0", color: "#71058d" }}></i>
                            </div>
                            <h3>Rs.343.12 M</h3>
                            <p>Funds Spent </p>
                        </div>
                        <div className="col-lg-2 " style={{ textAlign: "center",  color:"white" }}>
                            <div>
                                <i className="fas fa-hand-holding-heart" style={{ fontSize: "50px", padding: "20px 0", color: "#f1cc3c" }}></i>
                            </div>
                            <h3>3,037</h3>
                            <p>Supporting Donors </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default SpendMoney
