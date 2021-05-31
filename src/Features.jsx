import React from 'react'
import Card from './Card';
import Sdata from './Sdata'
function Features() {
    return (

        <div className="feature container-fluid pt-5 pb-5">
        <h1 className="heading pb-5 mt-5 fw-bolder" data-aos="flip-down"  data-aos-duration="2000">AWESOME FEATURES</h1>

         
       
        <div className="col-10 text-center mx-auto">
        <div className="row " >
        {

                Sdata.map((val,ind)=>{
                    
                   return( 
                       <Card 
                    key={ind}
                    imgscr={val.imagesrc}
                    data={val.description}
                    title={val.title} 
                  />
                  
                )})
         }
         
         
            </div>
           
           
            </div>
            </div>
        
        
        
        
    )
}

export default Features
