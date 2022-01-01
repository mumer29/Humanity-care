import React from "react";
import Slider from "react-slick";
import './ourServices.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Modal1 from "./Modal1";
import Modal2 from "./Modal2";
import Modal3 from "./Modal3";
import Modal4 from "./Modal4";
import Modal5 from "./Modal5";
import Modal6 from "./Modal6";


function OurServices() {

    var settings = {
        dots: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        infinite: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]

    };
    return (
        <div id="ourServices" className="container-fluid pt-3 pb-5" style={{ backgroundColor: "#0195d3" }}>


            <div className="container"  >
                <div className="row pb-5" style={{ color: "white" }}>
                    <u className="text-center py-3">
                        <h2>Our Services</h2>
                    </u>
                    <p className="text-center" style={{ margin: "auto" }}>We have grown to be a leading grassroot humanitarian aid organisation.
                        Every year we are helping more and more people struck with hardship, all with your help.
                        We are developing this project to help poor and needy peoples in the Pakistan, and reduce the food wastage,
                        according to a report, 40 percent of food in Pakistan is wasted. </p>
                </div>
                <Slider {...settings}>
                    <div className="col-sm-12">
                        <div className="card  px-3 " style={{ width: "100%", height: "100%", backgroundColor: "unset", border: "unset" }}>

                            <div className="product">
                                <div className="imgbox d-flex justify-content-center align-items-end">
                                    <Modal1 />
                                    <img src="./services/dastarkhan.jpg" alt="dastarkahn"/>

                            </div>
                        </div>

                    </div>
                    <div className="col-sm-12">
                        <div className="card px-3 " style={{ width: "100%", height: "100%", backgroundColor: "unset", border: "unset" }}>
                            <div className="product">
                                <div className="imgbox d-flex justify-content-center align-items-end ">

                                    <Modal2 />
                                    <img src=" ./founder/ahsan.png" alt="Not found" />
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12">
                        <div className="card px-3 " style={{ width: "100%", height: "100%", backgroundColor: "unset", border: "unset" }}>
                            <div className="product">
                                <div className="imgbox d-flex justify-content-center align-items-end">
                                   < Modal3/>
                                    <img src=" ./founder/abdulRehman.png" alt="Not found" />
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12">
                        <div className="card  px-3 " style={{ width: "100%", height: "100%", backgroundColor: "unset", border: "unset" }}>

                            <div className="product">
                                <div className="imgbox d-flex justify-content-center align-items-end">
                                    < Modal4/>

                                    <img src=" ./founder/kashif.png" alt="Not found" />
                                </div>

                            </div>
                        </div>

                    </div>
                    <div className="col-sm-12">
                        <div className="card px-3 " style={{ width: "100%", height: "100%", backgroundColor: "unset", border: "unset" }}>
                            <div className="product">
                                <div className="imgbox d-flex justify-content-center align-items-end">
                                    < Modal5/>

                                    <img src=" ./founder/ahsan.png" alt="Not found" />
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-sm-12">
                        <div className="card px-3 " style={{ width: "100%", height: "100%", backgroundColor: "unset", border: "unset" }}>
                            <div className="product">
                                <div className="imgbox d-flex justify-content-center align-items-end">
                                   < Modal6/>

                                    <img src=" ./founder/abdulRehman.png" alt="Not found" />
                                </div>

                            </div>
                        </div>
                    </div>

                </Slider>
            </div>
        </div>
    );

}
export default OurServices