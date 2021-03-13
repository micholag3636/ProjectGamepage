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
                <img className="logoimg" src="https://i.postimg.cc/B6xtGBSs/logo-color-padding-removebg-preview.png"/>
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
                <button className="navbutabout" ><h3 className="droph3">About Us</h3></button>
                <div className="dropdown-about" id="topdrop">
                    <Link to="/company" ><button className="dropdownb">Company</button></Link>
                  <Link to="/team"><button className="dropdownb">Team</button></Link>  
                   <Link to="/founders"> <button className="dropdownb">Founders</button></Link>
                </div>
                </div>
                </div>
                </div>




                <div  id="aboutus">
                    <div className="dropdowns_wrapper" >
<div className="nav_link">
  <button className="navbutabout"><h3 className="droph3">Contact Us</h3></button>
  <div className="dropdown-about" id="topdrop">
     <Link to="/offices"> <button className="dropdownb">Offices</button></Link>
      <Link to="/warehouses"><button className="dropdownb">Warehouses</button></Link>
    <Link to="/support">  <button className="dropdownb">Support</button></Link>
  </div>
  </div>
  </div>
  </div>

  <div className="loc">
                <div className="nav_link">
                <Link to="/services">
           

            <button id="special-donate" className="navbut">   <h3 id="specialh3" className="droph3" id="addressh3">Services</h3>    </button>
            </Link>
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