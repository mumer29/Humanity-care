import React from 'react'
import { Carousel } from "react-bootstrap"
function Testimonial() {
    return (

        <div style={{ backgroundColor: "#0895a4", color: "white" }}>
            <u className="text-center "><h2>TESTIMONIALS</h2></u>
            <Carousel>
                <Carousel.Item interval={3000} >
                    <div className="container " style={{height: "200px"}}>
                        <div>
                            <h4 
                            style={{ margin: 'auto', width: '1000px', paddingTop:"40px"}}
                            >We have grown to be a leading grassroot humanitarian aid organisation.
                                Every year we are helping more and more people struck with hardship, all with your help.
                                We are developing this project to help poor and needy peoples in the Pakistan,
                                and reduce the food wastage, according to a report, 40 percent of food in Pakistan
                                is wasted.</h4>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item interval={3000} >
                    <div className="container " style={{height: "200px"}}>
                        <div>
                            <h4 
                            style={{ margin: 'auto', width: '1000px', paddingTop:"40px"}}
                            >We have grown to be a leading grassroot humanitarian aid organisation.
                                Every year we are helping more and more people struck with hardship, all with your help.
                                We are developing this project to help poor and needy peoples in the Pakistan,
                                and reduce the food wastage, according to a report, 40 percent of food in Pakistan
                                is wasted.</h4>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item interval={3000} >
                    <div className="container " style={{height: "200px"}}>
                        <div>
                            <h4 
                            style={{ margin: 'auto', width: '1000px', paddingTop:"40px"}}
                            >We have grown to be a leading grassroot humanitarian aid organisation.
                                Every year we are helping more and more people struck with hardship, all with your help.
                                We are developing this project to help poor and needy peoples in the Pakistan,
                                and reduce the food wastage, according to a report, 40 percent of food in Pakistan
                                is wasted.</h4>
                        </div>
                    </div>
                </Carousel.Item>
              

            </Carousel>

        </div>
    )
}

export default Testimonial
