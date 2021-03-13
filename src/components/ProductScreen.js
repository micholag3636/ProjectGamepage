import React from 'react'
import "./Productscreen.css"

function Productscreen(props) {
    return (
        <div   className="Service">
            <div>


               

           
            <img   className="img-service" src={props.img}/>
            
          
         
                 <div className="overlay">
        
              <p className="text">{props.text}</p>

            </div>

            <div className="overlayh">
        
              <p className="text"> <h3>{props.title}</h3></p>

            </div>

            </div>
            

            
        </div>
    )
}

export default Productscreen
