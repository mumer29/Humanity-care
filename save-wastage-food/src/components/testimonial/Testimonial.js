import React from 'react'
import { Carousel } from "react-bootstrap"
function Testimonial() {
    return (

        <div style={{ backgroundColor: "#0895a4", color:"white"}}>
            <u className="text-center "><h2>TESTIMONIALS</h2></u>
            <Carousel>
                <Carousel.Item interval={3000} >
                    <div className="container pt-5">
                        <h4 style={{ height: "400px" }}>I congratulate all involved in the noble work at the Fatimid Foundation. The dedication and sheer hard work is very ardent.
                            I am delighted to have the opportunity of seeing the facilities for myself and I will do my best endeavor to find more support
                            and financial resources.
                            Such program needs to be encouraged and maintained Warmest wishes!</h4>
                    </div>
                </Carousel.Item>
                <Carousel.Item interval={3000} >
                    <div className="container pt-5">
                        <h4 style={{ height: "400px" }}>I congratulate all involved in the noble work at the Fatimid Foundation. The dedication and sheer hard work is very ardent.
                            I am delighted to have the opportunity of seeing the facilities for myself and I will do my best endeavor to find more support
                            and financial resources.
                            Such program needs to be encouraged and maintained Warmest wishes!</h4>
                    </div>
                </Carousel.Item>
                <Carousel.Item interval={3000} >
                    <div className="container pt-5">
                        <h4 style={{ height: "400px" }}>I congratulate all involved in the noble work at the Fatimid Foundation. The dedication and sheer hard work is very ardent.
                            I am delighted to have the opportunity of seeing the facilities for myself and I will do my best endeavor to find more support
                            and financial resources.
                            Such program needs to be encouraged and maintained Warmest wishes!</h4>
                    </div>
                </Carousel.Item>

            </Carousel>

        </div>
    )
}

export default Testimonial
