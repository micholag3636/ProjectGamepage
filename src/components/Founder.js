import React from 'react'
import "./Founder.css"

function Founder(props) {
    return (
        <div className="Founder-box">
            <img  className="person-pic" src={props.img}></img>



            <p className="person-info">
                {props.info}
              
            </p>


            <h3 className="name-ofperson">{props.name}</h3>










            
        </div>
    )
}

export default Founder
