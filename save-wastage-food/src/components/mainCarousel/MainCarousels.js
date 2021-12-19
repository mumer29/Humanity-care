import React from 'react'
import './mainCarasoul.css'
import { Carousel } from "react-bootstrap"
function MainCarousels() {
    return (
           
            <div 
            //  style={{paddingTop:"33px"}} 
              >

            <Carousel  >
                <Carousel.Item interval={3000}
                >
                    <img 
                    style={{height:"500px"}}
                         className=  " mainCarouselsImg d-block w-100 "
                        src="https://mocomi.com/wp-content/uploads/2011/12/STOP_FOOD_WASTAGE_Featured.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption >
                        <h3 >First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img 
                     style={{height:"500px"}}
                         className= "d mainCarouselsImg -block w-100"
                        src="https://ychef.files.bbci.co.uk/976x549/p04tx3m6.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                {/* <Carousel.Item interval={3000}>
                    <img
                    style={{height:"500px"}}
                        className="  d mainCarouselsImg -block w-100"
                        src="https://www.nea.gov.sg/images/default-source/our-serivces/love-your-food---waste-less-save-more.png"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item> */}
            </Carousel>

        </div>
    )
}

export default MainCarousels
