import React from 'react'
import { Carousel } from "react-bootstrap";
import  './testimonial.css'
function Testimonial() {
    return (

        <div id='testimonial' style={{ backgroundColor: "#0195d3", color: "white" }}>
            <u className="text-center ">
                <h2 style={{    position: 'relative', top: '50px'}}>TESTIMONIALS</h2>
                </u>
            <Carousel>
                {/* <Carousel.Item interval={3000} >
                    <div className="container py-5" >
                        <div >
                            <h5 
                            style={{ margin: 'auto', width: '70vw', paddingTop:"40px" , textAlign:"justify"}}
                            >We have grown to be a leading grassroot humanitarian aid organisation.
                                Every year we are helping more and more people struck with hardship, all with your help.
                                We are developing this project to help poor and needy peoples in the Pakistan,
                                and reduce the food wastage, according to a report, 40 percent of food in Pakistan
                                is wasted.</h5>
                        </div>
                    </div>
                </Carousel.Item> */}
                {/* <Carousel.Item interval={3000} >
                    <div className="container py-5" >
                        <div >
                            <h5 
                            style={{ margin: 'auto', width: '70vw', paddingTop:"40px" , textAlign:"justify"}}
                            >We have grown to be a leading grassroot humanitarian aid organisation.
                                Every year we are helping more and more people struck with hardship, all with your help.
                                We are developing this project to help poor and needy peoples in the Pakistan,
                                and reduce the food wastage, according to a report, 40 percent of food in Pakistan
                                is wasted.</h5>
                        </div>
                    </div>
                </Carousel.Item> */}
                <Carousel.Item interval={3000} >
                    <div className="container py-5" >
                        <div >
                            <h5 
                            
                            style={{ margin: 'auto', width: '70vw', paddingTop:"40px" , textAlign:"justify"}}
                            > We have grown to be a leading grassroot humanitarian aid organisation.
                                Every year we are helping more and more people struck with hardship, all with your help.
                                We are developing this project to help poor and needy peoples in the Pakistan,
                                and reduce the food wastage, according to a report, 40 percent of food in Pakistan
                                is wasted.</h5>
                        </div>
                    </div>
                </Carousel.Item>
              

            </Carousel>

        </div>
    )
}

export default Testimonial
