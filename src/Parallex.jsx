import React from 'react'
import logo from './image/logo.png'

function Parallex() {
    return (
        <div className="parallex">
        
            <div className="col-lg-5 col-md-6 col-sm-7 position-fixed ">
                  <img src={logo} data-aos="fade-left"
                  data-aos-anchor="#example-anchor"
                  data-aos-offset="500" 
                  data-aos-duration="2000" className="logo pb-5" alt="" />
                <h4 className="pb-4"data-aos="fade-up"
                data-aos-duration="2000">Welcome to TryDO React Creative Agency, React Portfolio and Corporate Multi Purpose Template Built With React JS. NO jQuery!</h4>
                
                <button data-aos="fade-up"
                data-aos-duration="2000" type="button" className="firstbtn">Buy Now</button>
                <button data-aos="fade-up"
                data-aos-duration="2000" type="button" className="secondbtn">View Demos</button>
            </div>
        </div>
    )
}

export default Parallex
