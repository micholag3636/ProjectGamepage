import React from 'react'
import "./SideDrawer.css"
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {Link} from "react-router-dom"
import {useSelector} from "react-redux"


function SideDrawer({show, click}) {

    const sideDrawerClass = ["sidedrawer"];
  







    if(show){
        sideDrawerClass.push("show")

    }






    return (
        <div className={sideDrawerClass.join(" ")}>
            <div className="sidedrawer_links" onClick={click}>




                

                
                  

<Link to="/">


<button id="homebut" className="navbut">   <h3 className="droph3" id="addressh3">Home</h3>    </button>
</Link>





                    
        

                    
                   










<span>

   
        
    <div  id="aboutus">
  
         
                    


 
  
    <button className="navbutabout"><h3 className="droph3">Contact Us</h3></button>
    <div class="dropdown-about">
       <Link to="/offices"> <button className="dropdownb">Offices</button></Link>
        <Link to="/warehouses"><button className="dropdownb">Warehouses</button></Link>
      <Link to="/support">  <button className="dropdownb">Support</button></Link>
    </div>
    </div>

                


    </span>





    <span>
    <div  id="aboutus">







<button className="navbutabout"><h3 className="droph3">About Us</h3></button>
<div class="dropdown-about">
   <Link to="/company" ><button className="dropdownb">Company</button></Link>
 <Link to="/team"><button className="dropdownb">Team</button></Link>  
  <Link to="/founders"> <button className="dropdownb">Founders</button></Link>
</div>

</div>




    </span>

    
<Link to="/services">


<button id="homebut" className="navbut">   <h3 className="droph3" id="addressh3">Services</h3>    </button>
</Link>







                  


             
               </div>
            </div>
     
    )
}

export default SideDrawer

