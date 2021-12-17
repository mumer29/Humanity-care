import React from 'react'

function PatientDonnerStories() {
    return (
        <div>
            <div  style={{ backgroundColor: "#0195d3" }}>
                <div className="container"  >
                    <div className="row " style={{ color: "white" }} >
                        <u className="text-center py-3"><h2>SEEKER AND DONOR STORIES</h2></u>
                    </div>
                </div>

                <div className="container py-3">
                    <div className="row gx-3">
                        <div className="col-lg-4 col-sm-12 py-3">
                            <div className="border bg-light text-center " style={{ height: '350px' }}>
                                <img style={{ width: "100%", height: "100%" }} src=
                                "./founder/kashif.png"
                                 alt="" />
                            </div>

                        </div>
                        <div className="col-lg-4 col-sm-12 py-3">
                            <div className=" border bg-light text-center" style={{ height: '350px' }}>
                                <img style={{ width: "100%", height: "100%" }} src=
                                 "./founder/ahsan.png"
                                alt="" />

                            </div>

                        </div>
                        <div className="col-lg-4 col-sm-12 py-3">
                            <div className=" border bg-light text-center " style={{ height: '350px' }}>
                                <img style={{ width: "100%", height: "100%" }} src=
                                 "./founder/abdulRehman.png"
                                
                                 alt="" />

                            </div>

                        </div>

                    </div>
                </div>


            </div>

        </div>
    )
}

export default PatientDonnerStories
