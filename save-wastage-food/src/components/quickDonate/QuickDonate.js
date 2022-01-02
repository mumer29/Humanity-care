import React from 'react'

function QuickDonate() {
    return (
        <div className="container-fluid " style={{ backgroundColor: "#0195d3" }} >
            <div className="container "
            >
                <div className="row  justify-content-center align-items-center py-3">
                    <div className="col-lg-2 col-sm-12 col-md-12 text-center my-2  " style={{ height: "45px" }}>
                        <h5 style={{ height: "100%", width: "100%", lineHeight: "40px", color: "white" }}>QUICK DONATE</h5>
                    </div>
                    <div className="col-lg-3 col-md-4 text-center my-2 " style={{ height: "45px" }}>
                        <select className="form-select border-success border-2 " aria-label="Default select example"
                            style={{ height: "100%", width: "100%" }}>
                            <option selected>Single Payment</option>
                            <option value="1">Regular Payment</option>
                            <option value="2"> Cook Food</option>
                            <option value="3">Uncook Food</option>
                        </select>
                    </div>
                    <div className="col-lg-2 col-md-4 text-center my-2  " style={{ height: "45px" }}>
                        <div
                            style={{ height: "100%", width: "100%", borderRadius: "3px" }}>
                            <input className="border border-success border-2 px-2 rounded" type="number" name="" id="" placeholder="Amount"
                                style={{ height: "100%", width: "100%", border: "none" }} />
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 text-center my-2 " style={{ height: "45px" }}>
                        <select className="form-select border-success border-2 " aria-label="Default select example"
                            style={{ height: "100%", width: "100%" }}>
                            <option selected>General Donation</option>
                            <option value="1">Regular Payment</option>
                            <option value="2">Sadka</option>
                            <option value="3">Zakat</option>
                        </select>
                    </div>
                    <div className="col-lg-2 text-center my-2 col-sm-12 col-md-6  " style={{ height: "45px" }}>
                        <button className="btn   "
                            style={{
                                height: "100%", width: "100%", borderRadius: '15px', padding: '0 30px',
                                fontWight: ' bold', color: 'white', fontSize: '17px', backgroundColor: 'rgb(193, 35, 35)'
                            }}> Donate Now</button>
                    </div>
                </div>
            </div>
        </div >

    )
}

export default QuickDonate
