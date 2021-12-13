import React from 'react'
import './mainCarasoul.css'
import { Carousel } from "react-bootstrap"
function MainCarousels() {
    return (
           
            <div 
            // style={{height:"60vh" }}
            >

            <Carousel  >
                <Carousel.Item interval={3000}
                >
                    <img 
                    style={{height:"400px"}}
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
                     style={{height:"400px"}}
                         className= "d mainCarouselsImg -block w-100"
                        src="https://ychef.files.bbci.co.uk/976x549/p04tx3m6.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img
                    style={{height:"400px"}}
                        className="  d mainCarouselsImg -block w-100"
                        src="https://www.nea.gov.sg/images/default-source/our-serivces/love-your-food---waste-less-save-more.png"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>





            {/* <Carousel interval={2000} style={{ height: "60vh", backgroundColor: "#0895a4" }} >
                <Carousel.Item interval={1500}>
                    <button style={{ marginTop: "250px", marginLeft: "180px", width: "280px", height: "50px", backgroundColor: "#1f8691",borderRadius:"5px" ,border: "2px solid #fff", color: "#fff", marginBottom: "5px" }}>DONATE NOW</button>
                </Carousel.Item>
                <Carousel.Item>
                    <div style={{ marginLeft: "180px", marginTop: "80px" }}><h2><strong style={{ color: "white" }}>ORPHAN CARE</strong></h2>
                        <br /> <h5 style={{ color: "#fff" }}>Orphans and widows are left to fend for themselves, <br />needing your support to survive.</h5>
                    </div>
                    <button style={{ marginTop: "18px", marginLeft: "180px", width: "280px", height: "50px", backgroundColor: "#1f8691",borderRadius:"5px" ,border: "2px solid #fff", color: "#fff", marginBottom: "5px" }}>DONATE NOW</button>
                </Carousel.Item>
                <Carousel.Item>
                    <div style={{ marginLeft: "180px", marginTop: "80px" }}><h2><strong style={{ color: "white" }}>WATER FOR ALL</strong></h2>
                        <br /> <h5 style={{ color: "#fff" }}>Water is one of the basic<br />necessities of human life.</h5>
                    </div>
                    <button style={{ marginTop: "18px", marginLeft: "180px", width: "280px", height: "50px", backgroundColor: "#1f8691", border: "1px solid #fff", color: "#fff", marginBottom: "5px" }}>DONATE NOW</button>
                </Carousel.Item>
                <Carousel.Item>
                    <div style={{ marginLeft: "575px" }}> <div style={{ marginLeft: "180px", marginTop: "80px" }}><h2><strong style={{ color: "white" }}>EDUCARE</strong></h2>
                        <br /> <h5 style={{ color: "#fff" }}>Education is the most powerful <br />weapon which you can use to change<br />the world</h5>
                    </div>
                        <button style={{ marginTop: "18px", marginLeft: "180px", width: "280px", height: "50px", backgroundColor: "#1f8691", border: "1px solid #fff", color: "#fff", marginBottom: "5px" }}>DONATE NOW</button>
                    </div>
                </Carousel.Item>
                <Carousel.Item interval={1500}>
                    <button style={{ marginTop: "120px", marginLeft: "530px", width: "280px", height: "50px", backgroundColor: "#1f8691", border: "1px solid #fff", color: "#fff", marginBottom: "5px" }}>DONATE NOW</button>
                </Carousel.Item>
            </Carousel> */}
        </div>
    )
}

export default MainCarousels
