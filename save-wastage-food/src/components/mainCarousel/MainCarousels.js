import React from 'react'
import { Carousel } from "react-bootstrap"
function MainCarousels() {
    return (
        <div>
            <Carousel interval={2000} style={{ height: "60vh", backgroundColor: "#0895a4" }} >
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
            </Carousel>
        </div>
    )
}

export default MainCarousels
