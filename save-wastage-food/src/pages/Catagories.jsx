import React from 'react';
// import food  from './services/food.jpg'
import child1 from './services/child1.jpg'
import dastarkhan from './services/dastarkhan.jpg'
import education from './services/education.jpg'
import images from './services/images.jpg'
import medical from './services/medical.jpg'
import water from './services/water.jpg'
import ration from './services/ration.jpg'


function Catagories() {
    return (
        <div>
            <div className="card-group">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    
                    <div className="col">
                        <div className="card">
                            <img src={dastarkhan} className="card-img-top"
                            style={{height: '250px'}}
                            alt="not found" />
                            <div className="card-body">
                                <h5 className="card-title text-center">Dastarkhan</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src={education} className="card-img-top"
                            style={{height: '250px'}}
                            alt="not found" />
                            <div className="card-body">
                                <h5 className="card-title text-center">Education</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src={images}  className="card-img-top"
                            style={{height: '250px'}}
                            alt="noo found" />
                            <div className="card-body">
                                <h5 className="card-title text-center">Food</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src={medical} className="card-img-top"
                            style={{height: '250px'}}
                            alt="not found" />
                            <div className="card-body">
                                <h5 className="card-title text-center">Medical</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src={water} className="card-img-top"
                            style={{height: '250px'}}
                            alt="not found" />
                            <div className="card-body">
                                <h5 className="card-title text-center">water</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src={ration} className="card-img-top"
                            style={{height: '250px'}}
                            alt="not found" />
                            <div className="card-body">
                                <h5 className="card-title text-center">Ration</h5>
                            </div>
                        </div>
                    </div>


                </div>


                {/* <div className="card">
                    <img src={child1} className="card-img-top"
                    style={{height: '250px'}}
                    alt="not found" 
                    style={{height:'260px'}}/>
                    <div className="card-body">
                        <h5 className="card-title text-center">Card title</h5>
                    </div>
                </div>

                <div className="card">
                    <img src={dastarkhan} className="card-img-top"
                    style={{height: '250px'}}
                    alt="not found" />
                    <div className="card-body">
                        <h5 className="card-title text-center">Card title</h5>
                    </div>
                </div>

                <div className="card">
                    <img src={education} className="card-img-top"
                    style={{height: '250px'}}
                    alt="not found" />
                    <div className="card-body">
                        <h5 className="card-title text-center">Card title</h5>
                    </div>
                </div> */}



            </div>

        </div>
    )
}

export default Catagories
