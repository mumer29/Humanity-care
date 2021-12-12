import React from 'react'

function QuickDonate() {
    return (
        <div >
            <div className="container " style={{ height: "60px" }} >
                <div className="row  justify-content-center align-items-center pt-3 ">
                    <div className="col-2 text-center  " style={{ height: "40px" }}>
                        <h5 style={{ height: "100%", width: "100%", lineHeight: "40px" }}>QUICK DONATE</h5>
                    </div>
                    <div className="col-3 text-center " style={{ height: "40px" }}>
                        <select className="form-select border-success border-2 " aria-label="Default select example"
                            style={{ height: "100%", width: "100%" }}>
                            <option selected>Single Payment</option>
                            <option value={1}>Regular Payment</option>
                        </select>
                    </div>
                    <div className="col-2 text-center " style={{ height: "40px" }}>
                        <div 
                          style={{ height: "100%", width: "100%" }}>
                            <input  type="number" name="" id="" placeholder="Amount"
                                style={{ height: "100%", width: "100%" }} />
                        </div>
                    </div>
                    <div className="col-2 text-center " style={{ height: "40px" }}>
                        <select className="form-select border-success border-2 " aria-label="Default select example"
                            style={{ height: "100%", width: "100%" }}>
                            <option selected>General Donation</option>
                            <option value={1}>Regular Payment</option>
                            <option value={2}>Sadka</option>
                            <option value={3}>Zakat</option>
                        </select>
                    </div>
                    <div className="col-2 text-center  " style={{ height: "40px" }}>
                        <button className="btn btn-success border-2  border-success"
                            style={{ height: "100%", width: "100%" }}> Donate Now</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default QuickDonate
