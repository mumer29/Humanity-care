import React from 'react'
import './mainCarasoul.css'
import { Carousel } from "react-bootstrap"
function MainCarousels() {
    return (

        <div id="home"  >

            <Carousel  >
                <Carousel.Item interval={3000}
                >
                    <img
                        style={{ height: "500px" }}
                        className=" mainCarouselsImg d-block w-100 "
                        // src="https://mocomi.com/wp-content/uploads/2011/12/STOP_FOOD_WASTAGE_Featured.jpg"
                        src="https://cdn.pixabay.com/photo/2021/09/23/17/53/crow-6650506_960_720.jpg"

                        alt="First slide"
                    />
                    <Carousel.Caption >
                        <h3 >First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img
                        style={{ height: "500px" }}
                        className="d mainCarouselsImg -block w-100"
                        src="https://cdn.pixabay.com/photo/2017/12/26/10/17/apple-3040132_960_720.jpg"
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
                        src="https://lh3.googleusercontent.com/proxy/3BkZmy-66BS4q7Rmvy1vDTsc8s9B4Zn_JC-Ef4y97lNo9C7LT8gVcS2MGpcy1wjlmxByMcpfZs0o88Q-LpmSEqI60TxGMLbaVpl7FvA1MoEMxPK96QJm2NogKIlkmaCtqKuULsX9o4ShtZltUYyExc1ddePsFzaG5RTH5H8KM5ANbes"
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
