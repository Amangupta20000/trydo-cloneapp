import React from 'react'
// import { FaReact} from 'react-icons/fa';


function Card(props) {
    
    return (
        
        <div className="card col-lg-3 col-10 mx-auto" data-aos="fade-right" data-aos-duration="1500" >
           <h1 className="pt-3"> {props.imgscr}</h1>
        
            <div className="card-body">
                <h5 className="card-title pb-3">{props.title}</h5>
                <p className="card-text">{props.data}</p>
            </div> 
      
        </div> 
        
    )
}

export default Card
