import React from 'react'

function QuickDonate() {
    return (
        <div className="container-fluid " style={{backgroundColor:"#0895a4"}} >
            <div className="container " style={{ height: "70px"}} >
                <div className="row  justify-content-center align-items-center pt-3 ">
                    <div className="col-2 text-center  " style={{ height: "40px" }}>
                        <h5 style={{ height: "100%", width: "100%", lineHeight: "40px", color:"white" }}>QUICK DONATE</h5>
                    </div>
                    <div className="col-3 text-center " style={{ height: "40px" }}>
                        <select className="form-select border-success border-2 " aria-label="Default select example"
                            style={{ height: "100%", width: "100%" }}>
                            <option selected>Single Payment</option>
                            <option value={1}>Regular Payment</option>
                        </select>
                    </div>
                    <div className="col-2 text-center  " style={{ height: "40px" }}>
                        <div  
                          style={{ height: "100%", width: "100%", borderRadius:"3px"}}>
                            <input  className="border border-success border-2 px-2 rounded" type="number" name="" id="" placeholder="Amount"
                                style={{ height: "100%", width: "100%" ,border:"none" }} />
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
