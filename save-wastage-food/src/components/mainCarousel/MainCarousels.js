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
                        style={{ height: "600px" }}
                        className=" mainCarouselsImg d-block w-100 "
                        // src="https://mocomi.com/wp-content/uploads/2011/12/STOP_FOOD_WASTAGE_Featured.jpg"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmFfV_p_8RMzlzHkx0VIOVXK5bEaOYONcKgw&usqp=CAU"

                        alt="First slide"
                    />
                    {/*<Carousel.Caption >
                        <h3 >First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>*/}
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img
                        style={{ height: "600px" }}
                        className="d mainCarouselsImg -block w-100"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq1jyiAnoDt5o3vjeFPN4ZwEyFcn3LvVg_8Q&usqp=CAU"
                        alt="Second slide"
                    />

                    {/*<Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>*/}
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img
                        style={{ height: "600px" }}
                        className="  d mainCarouselsImg -block w-100"
                        src="https://i0.wp.com/www.wedamor.com/wp-content/uploads/samarpan.jpg?w=740&ssl=1"
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img
                        style={{ height: "600px" }}
                        className="  d mainCarouselsImg -block w-100"
                        src="https://412foodrescue.org/wp-content/uploads/2016/12/1200x600-cart.jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img
                        style={{ height: "600px" }}
                        className="  d mainCarouselsImg -block w-100"
                        src="https://images.livemint.com/img/2020/03/31/600x338/2020-03-27T101400Z_211242614_RC2ASF9TIMPG_RTRMADP_3_HEALTH-CORONAVIRUS-SOUTHASIA_1585631419369_1585631421077.JPG"
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img
                        style={{ height: "600px" }}
                        className="  d mainCarouselsImg -block w-100"
                        src="https://i1.wp.com/www.wedamor.com/wp-content/uploads/feeding.jpg?w=768&ssl=1" alt="fifth slide" />
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img
                        style={{ height: "600px" }}
                        className="  d mainCarouselsImg -block w-100"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKnuJUzhUJAGhipQWEIQxZGLhw7IHNpPqUmg&usqp=CAU"
                        alt="fouth slide"
                    />
                </Carousel.Item>
            </Carousel>

        </div>
    )
}

export default MainCarousels
