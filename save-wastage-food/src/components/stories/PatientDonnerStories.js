import React from 'react'

function PatientDonnerStories() {
    return (
        <div>
            <div className='py-5' style={{ backgroundColor: "#0895a4" }}>
                <div className="container"  >
                    <div className="row " style={{ color: "white" }} >
                        <u className="text-center py-3"><h2>SEEKER AND DONOR STORIES</h2></u>
                    </div>
                </div>

                <div className="container py-5">
                    <div className="row gx-3">
                        <div className="col">
                            <div className="border bg-light text-center " style={{ height: '450px' }}>
                                <img style={{ width: "100%", height: "100%" }} src=
                                "./founder/kashif.png"
                                // "https://pbs.twimg.com/media/EdWyErVUcAAX1Nx.jpg"
                                 alt="" />
                            </div>

                        </div>
                        <div className="col">
                            <div className=" border bg-light text-center" style={{ height: '450px' }}>
                                <img style={{ width: "100%", height: "100%" }} src=
                                 "./founder/ahsan.png"
                                // "https://i.pinimg.com/736x/25/b5/87/25b587544f892dba4b2b22ad1ece2446.jpg" 
                                alt="" />

                            </div>

                        </div>
                        <div className="col">
                            <div className=" border bg-light text-center " style={{ height: '450px' }}>
                                <img style={{ width: "100%", height: "100%" }} src=
                                 "./founder/abdulRehman.png"

                                // "https://www.universiteitleiden.nl/binaries/content/gallery/ul2/portraits/social-and-behavioural-sciences/pedagogische-wetenschappen/algemene-en-gezinspedagogiek/sanne-devet.jpg"
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
