import './carousel.css'

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Carousel() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 6000,

    };

    return (

        // <div className="container-fluid" style={{  }}>

            <div className="container-fluid" style={{ width: "100%", height: "45vh" ,backgroundColor: "#0895a4", padding:"0 40px"}} >

                <Slider {...settings}>
                    <div>
                        <div className='mt-5 ms-5' style={{ color: "white", width: "35vw" }}>
                            <h3>ORPHAN CARE</h3>
                            <h5 className='py-3'>Orphans and widows are left to fend for themselves, needing your support to survive.</h5>
                            <button className='btn text-uppercase' style={{ backgroundColor: "#04b3c5", color: "white", padding: "10px 50px", border: "1px solid white" }}>donate now</button>
                        </div>
                    </div>
                    <div>
                        <div className='mt-5 ms-5' style={{ color: "white", width: "35vw" }}>
                            <h3>FOOD FOR ALL</h3>
                            <h5 className='py-3'>Water is one of the basic<br />necessities of human life.</h5>
                            <button className='btn text-uppercase' style={{ backgroundColor: "#04b3c5", color: "white", padding: "10px 50px", border: "1px solid white" }}>donate now</button>
                        </div>
                    </div>
                    <div>
                        <div className='mt-5 ms-5' style={{ color: "white", width: "35vw" }}>
                            <h3>Educare</h3>
                            <h5 className='py-3' class="thin-font">Education is the most powerful weapon which you can use to change the world</h5>
                            <button className='btn text-uppercase' style={{ backgroundColor: "#04b3c5", color: "white", padding: "10px 50px", border: "1px solid white" }}>donate now</button>
                        </div>
                    </div>
                </Slider>
            {/* </div> */}
        </div>


    );
}

export default Carousel





