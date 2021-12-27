import React from 'react';
import "./ourHistory.css"

function OurHistory() {
    return (
        <div id='founder' style={{ backgroundColor: "#0195d3" }}>
            <div className="container-fluid " >
                <div className='container'>
                    <div className="row py-2" style={{ color: "white" }}>
                        <h2 className="text-center py-3">Our History as a  Care Humanity Organisation</h2>
                        <p className="text-center">We have grown to be a leading grassroot humanitarian aid organisation.
                            Every year we are helping more and more people struck with hardship, all with your help.
                            We are developing this project to help poor and needy peoples in the Pakistan, and reduce the food wastage,
                            according to a report, 40 percent of food in Pakistan is wasted. </p>
                    </div>
                </div>
            </div>
            <div style={{ backgroundColor: "#0195d3" }}>
                <div className="container "
                    style={{ paddingTop: "115px" }}
                >
                    <div className="row gx-3">
                        <div className="col-lg-4 col-sm-12 col-md-12 " style={{ padding: "70px 10px" }}>
                            <div className="p-3 border bg-light text-center "
                                style={{ borderRadius: "25px" }}>
                                <div className='text-center' style={{ marginTop: '-115px' }}>
                                    <img className="founder" src="./founder/ahsan.png" alt="ahan (founder)" />
                                    <h5 className='founderName pt-3'>Ahsan Ali</h5>
                                    <p style={{ fontSize: "13px" }}>Founder of care humanity</p>
                                </div>
                                <p className="da" style={{ textAlign: "justify" }}>We are developing this project to help poor and needy peoples in the Pakistan,
                                    and reduce the food wastage, according to a report, 40 percent of food in Pakistan is wasted.
                                    Food wastage is common in wedding ceremonies (Banquets),
                                    and hotels. The main goal of this project is to reduce hunger of poor people by supplying that food being wasted
                                    or food in excess in banquets and hotels or in events,</p>
                            </div>

                        </div>
                        <div className="col-lg-4 col-sm-12 col-md-12 " style={{ padding: "70px 10px" }}>
                            <div className="p-3  border bg-light text-center "
                                style={{ borderRadius: "25px" }}>
                                <div className='text-center' style={{ marginTop: '-115px' }} >
                                    <img className="founder" src="./founder/abdulRehman.png" alt=" abdul rehman (chair person)" />
                                    <h5 className='founderName pt-3'>Abdul Rehman </h5>
                                    <p style={{ fontSize: "13px" }}>Chair Person of care humanity</p>
                                </div>
                                <p style={{ textAlign: "justify" }}>We are developing this project to help poor and needy peoples in the Pakistan,
                                    and reduce the food wastage, according to a report, 40 percent of food in Pakistan is wasted.
                                    Food wastage is common in wedding ceremonies (Banquets),
                                    and hotels. The main goal of this project is to reduce hunger of poor people by supplying that food being wasted
                                    or food in excess in banquets and hotels or in events,</p>
                            </div>

                        </div>
                        <div className="col-lg-4 col-sm-12 col-md-12 " style={{ padding: "70px 10px" }}>
                            <div className="p-3 border bg-light text-center "
                                style={{ borderRadius: "25px" }}>
                                <div className='text-center' style={{ marginTop: '-115px' }} >
                                    <img className="founder" src="./founder/kashif.png" alt="kashif(...)" />
                                    <h5 className='founderName pt-3'>Kashif Ali </h5>
                                    <p style={{ fontSize: "13px" }}>peroson of care humanity</p>
                                </div>
                                <p style={{ textAlign: "justify" }}>We are developing this project to help poor and needy peoples in the Pakistan,
                                    and reduce the food wastage, according to a report, 40 percent of food in Pakistan is wasted.
                                    Food wastage is common in wedding ceremonies (Banquets),
                                    and hotels. The main goal of this project is to reduce hunger of poor people by supplying that food being wasted
                                    or food in excess in banquets and hotels or in events,</p>
                            </div>

                        </div>

                    </div>
                </div>


            </div>
            {/* <div className="container-fluid d-flex" >
                <div className="container m-auto">
                    <div className="row gx-5">
                        <div className="col-lg-4 col-sm-12 py-3" style={{ color: "white" }}>
                            <div className='text-center' >
                                <img className="founder" src="./founder/ahsan.png" alt="ahan (founder)" />
                                <h5 className='founderName pt-3'>Ahsan Ali</h5>
                                <p style={{ fontSize: "13px" }}>Founder of care humanity</p>
                            </div>
                            <p style={{ textAlign: "justify" }}>We are developing this project to help poor and needy peoples in the Pakistan,
                                and reduce the food wastage, according to a report, 40 percent of food in Pakistan is wasted.
                                Food wastage is common in wedding ceremonies (Banquets),
                                and hotels. The main goal of this project is to reduce hunger of poor people by supplying that food being wasted
                                or food in excess in banquets and hotels or in events,</p>
                        </div>
                        <div className="col-lg-4 col-sm-12 py-3" style={{ color: "white" }}>
                            <div className='text-center' >
                                <img className="founder" src="./founder/abdulRehman.png" alt=" abdul rehman (chair person)" />
                                <h5 className='founderName pt-3'>Abdul Rehman </h5>
                                <p style={{ fontSize: "13px" }}>Chair Person of care humanity</p>
                            </div>
                            <p style={{ textAlign: "justify" }}>We are developing this project to help poor and needy peoples in the Pakistan,
                                and reduce the food wastage, according to a report, 40 percent of food in Pakistan is wasted.
                                Food wastage is common in wedding ceremonies (Banquets),
                                and hotels. The main goal of this project is to reduce hunger of poor people by supplying that food being wasted
                                or food in excess in banquets and hotels or in events,</p>
                        </div>
                        <div className="col-lg-4 col-sm-12 py-3" style={{ color: "white" }}>
                            <div className='text-center' >
                                <img className="founder" src="./founder/kashif.png" alt="kashif(...)" />
                                <h5 className='founderName pt-3'>Kashif Ali </h5>
                                <p style={{ fontSize: "13px" }}>peroson of care humanity</p>
                            </div>
                            <p style={{ textAlign: "justify" }}>We are developing this project to help poor and needy peoples in the Pakistan,
                                and reduce the food wastage, according to a report, 40 percent of food in Pakistan is wasted.
                                Food wastage is common in wedding ceremonies (Banquets),
                                and hotels. The main goal of this project is to reduce hunger of poor people by supplying that food being wasted
                                or food in excess in banquets and hotels or in events,</p>
                        </div>
                    </div>
                </div>
            </div> */}


            <div className="container-fluid " >
                <div className='container'>
                    <div className="row " style={{ color: "white" }}>
                        <h2 className="text-center ">Aims & Objectives Of Our Care Humanity Organisation</h2>
                        <p className="text-center">We have grown to be a leading grassroot humanitarian aid organisation.
                            Every year we are helping more and more people struck with hardship, all with your help.
                            We are developing this project to help poor and needy peoples in the Pakistan, and reduce the food wastage,
                            according to a report, 40 percent of food in Pakistan is wasted. </p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default OurHistory
