import React from "react";
import Slider from "react-slick";
import './ourServices.css'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function OurServices() {

    var settings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
    };
    return (
        <div id="ourServices" className="container-fluid py-3" style={{ backgroundColor: "#0195d3" }}>


            <div className="container"  >
                <div className="row pb-5" style={{color:"white"}}>
                    <u className="text-center py-3">
                        <h2>Our Services</h2>
                    </u>
                    <p className="text-center" style={{ margin: "auto"}}>We have grown to be a leading grassroot humanitarian aid organisation.
                        Every year we are helping more and more people struck with hardship, all with your help.
                        We are developing this project to help poor and needy peoples in the Pakistan, and reduce the food wastage,
                        according to a report, 40 percent of food in Pakistan is wasted. </p>
                </div>
                <Slider {...settings}>
                    <div className="col-sm-12">
                        <div className="card  px-3 " style={{ width: "100%", height: "100%", backgroundColor: "unset", border: "unset" }}>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoXEHnYK6kgmmu7xRqROjmYmW9PVt0jeW8U2E2MUZW2GSo8i55DEyeoXz-4dQeLvUkuXY&usqp=CAU"
                                className="card-img-top" alt="..." />
                        </div>

                    </div>
                    <div className="col-sm-12">
                        <div className="card px-3 " style={{ width: "100%", height: "100%", backgroundColor: "unset", border: "unset" }}>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHMNcsWWJBL2zTjpW3QuLVQTimXPYPISc-ekIjw4O75Qba7d6Cmc-XFVtI-0LQlAP4K30&usqp=CAU"
                                className="card-img-top" alt="..." />
                        </div>
                    </div>
                    <div className="col-sm-12">
                        <div className="card px-3 " style={{ width: "100%", height: "100%", backgroundColor: "unset", border: "unset" }}>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv3Ja_mqKfO3mdEo6rYasPBYtzzn2By-1o3DMVjjNx1RFEelX15w4Z1--fC6RXB-lFNAM&usqp=CAU"
                                className="card-img-top" alt="..." />
                        </div>
                    </div>
                    <div className="col-sm-12">
                        <div className="card px-3 " style={{ width: "100%", height: "100%", backgroundColor: "unset", border: "unset" }}>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMdVCa37t3XQw7GIPyIh56Si-pYYWuzzpjZqSgyYupC6w2nt8cF4Roy0HrQtPMxqR16Tg&usqp=CAU"
                                className="card-img-top" alt="..." />
                        </div>
                    </div>
                    <div className="col-sm-12">
                        <div className="card px-3 " style={{ width: "100%", height: "100%", backgroundColor: "unset", border: "unset" }}>
                            <img src="https://previews.123rf.com/images/belchonock/belchonock1904/belchonock190406962/121285549-volunteers-giving-food-to-poor-people-indoors.jpg"
                                className="card-img-top" alt="..." />
                        </div>
                    </div>
                    <div className="col-sm-12">
                        <div className="card px-3 " style={{ width: "100%", height: "100%", backgroundColor: "unset", border: "unset" }}>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS3tl-EpISdJbDVg8n4hMyMHAihrzN4m-p7hQX2FonBpUq1ndEfh1A8REIMteEVSwP0Mc&usqp=CAU"
                                className="card-img-top" alt="..." />
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    );

}
export default OurServices