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
  
         
                    


 
  
    <button className="navbutabout"><h3 className="droph3">Popular Games</h3></button>
    <div class="dropdown-about">
       <Link to="/overwatch"> <button className="dropdownb">Overwatch</button></Link>
        <Link to="/apex"><button className="dropdownb">Apex</button></Link>
    </div>
    </div>

                


    </span>





    <span>
    <div  id="aboutus">







<button className="navbutabout"><h3 className="droph3">E-SPORTS</h3></button>
<div class="dropdown-about">
   <Link to="/overwatchleague" ><button className="dropdownb">Overwatch League</button></Link>
 <Link to="/fortnite"><button className="dropdownb">Fortnite</button></Link>  

</div>

</div>




    </span>

    
    <span>
    <div  id="aboutus">







<button className="navbutabout"><h3 className="droph3">Reviews</h3></button>
<div class="dropdown-about">
   <Link to="/roverwatch" ><button className="dropdownb">Overwatch</button></Link>
 <Link to="/rapex"><button className="dropdownb">Apex Legends</button></Link>  

</div>

</div>




    </span>







                  


             
               </div>
            </div>
     
    )
}

export default SideDrawer

