import React from 'react'
import "./Nav.css"
import { Link } from "react-router-dom"
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import MenuIcon from '@material-ui/icons/Menu';




function Nav({click}) {

    
    return (
        <div >
        <div className="Nav">
            <div>
            <img className="logoimg" src="https://assets.v3.console-deals.com/storage/playstation-logo-transparent-white-1602107067UhCmk.png"/>
             
            </div>
           

   
            <div className="loc">
                <div className="nav_link">
                <Link to="/">
           

            <button className="navbut">   <h3 className="droph3" id="addressh3">Home</h3>    </button>
            </Link>
            </div>
              
            
           
       
      

                


             <div  id="aboutus">
                 <div className="dropdowns_wrapper">
                 <div className="nav_link">
                <button className="navbutabout" ><h3 className="droph3">Popular Games</h3></button>
                <div className="dropdown-about" id="topdrop">
                    <Link to="/overwatch" ><button className="dropdownb">Overwatch</button></Link>
                  <Link to="/apex"><button className="dropdownb">Apex Legends</button></Link>  
                </div>
                </div>
                </div>
                </div>




                <div  id="aboutus">
                    <div className="dropdowns_wrapper" >
<div className="nav_link">
  <button className="navbutabout"><h3 className="droph3">E-sports</h3></button>
  <div className="dropdown-about" id="topdrop">
     <Link to="/overwatchleauge"> <button className="dropdownb">Overwatch League</button></Link>
      <Link to="/fortnite"><button className="dropdownb">Fortnite</button></Link>
  </div>
  </div>
  </div>
  </div>

  <div  id="aboutus">
                    <div className="dropdowns_wrapper" >
<div className="nav_link">
  <button className="navbutabout"><h3 className="droph3">Reviews</h3></button>
  <div className="dropdown-about" id="topdrop">
     <Link to="/roverwatch"> <button className="dropdownb">Overwatch</button></Link>
      <Link to="/rapex"><button className="dropdownb">Apex Legends</button></Link>
  </div>
  </div>
  </div>
  </div>

               


           <div>
               
                </div>

                <div  className="hamburger_menu" onClick={click}>
                    <div>

                    </div>
                    <div>

                    </div>
                    <div>

                    </div>



                    
                    
                    </div>
              
               
                



            </div>


        </div>



       
       






    </div>
  

   
   


       
        
    )
}

export default Nav