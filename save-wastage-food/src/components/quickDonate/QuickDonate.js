import React, { useState } from 'react'

function QuickDonate() {

    const [payment, setPayment] = useState("")
    const [amount, setAmount] = useState("")
    const [donationType, setdonationType] = useState("")

    const [PHolder, setPHolder] = useState(true)
    const donatePayment = (e) => {
        let data = e.target.value
        if (data === "single-payment" || data === "regular-payment") {
            setPHolder(true)
        } else {
            setPHolder(false)
        }

    }
    const quickDonate = ()=>{
        console.log(payment,amount,donationType);
    }

    return (
        <div className="container-fluid " style={{ backgroundColor: "#0195d3" }} >
            <div className="container "  >
                <div className="row  justify-content-center align-items-center py-3">
                    <div className="col-lg-2 col-sm-12 col-md-12 text-center my-2  " style={{ height: "45px" }}>
                        <h5 style={{ height: "100%", width: "100%", lineHeight: "40px", color: "white" }}>QUICK DONATE</h5>
                    </div>
                    <div className="col-lg-3 col-md-4 text-center my-2 " style={{ height: "45px" }}>
                        <select
                            onClick={e => { donatePayment(e) }}
                            onChange={e => setPayment(e.target.value)}
                            className="form-select border-success border-2 "
                            aria-label="Default select example"


                            style={{ height: "100%", width: "100%" }}>
                            <option value="single-payment">Single Payment</option>
                            <option value="regular-payment">Regular Payment</option>
                            <option value="cook-food"> Cook Food</option>
                            <option value="uncook-food">Uncook Food</option>
                        </select>
                    </div>
                    <div className="col-lg-2 col-md-4 text-center my-2  " style={{ height: "45px" }}>
                        <div
                            style={{ height: "100%", width: "100%", borderRadius: "3px" }}>
                            <input
                                className="border border-success border-2 px-2 rounded"
                                type="number"
                                name=""
                                id="amount"
                                placeholder={PHolder ? "Amount" : "QTY"}
                                onChange={e => setAmount(e.target.value)}
                                style={{ height: "100%", width: "100%", border: "none" }} />
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 text-center my-2 " style={{ height: "45px" }}>
                        <select
                            className="form-select border-success border-2 "
                            aria-label="Default select example"
                            onChange={e => setdonationType(e.target.value)}

                            style={{ height: "100%", width: "100%" }}>
                            <option value="general-donation">General Donation</option>
                            <option value="regular-payment">Regular Payment</option>
                            <option value="sadka">Sadka</option>
                            <option value="zakat">Zakat</option>
                        </select>
                    </div>
                    <div className="col-lg-2 text-center my-2 col-sm-12 col-md-6  " style={{ height: "45px" }}>
                        <button className="btn "
                            onClick={quickDonate}

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
