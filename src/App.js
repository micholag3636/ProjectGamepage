
import './App.css';
import Nav from "./components/Nav.js"
import Main from "./components/Main.js"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import React from "react"



import Offices from "./components/Offices.js"
import Warehouses from "./components/Warehouses.js"
import Support from "./components/Support.js"
import Team from "./components/Team.js"
import Founders from "./components/Founders.js"
import Company from "./components/Company.js"
import Backdrop from "./components/Backdrop.js"
import SideDrawer from "./components/SideDrawer.js"
import Services from "./components/Services.js"
import {useState} from "react"
import contactForm from "./components/contactForm.js"
import roverwatch from "./components/roverwatch.js"
import rapex from "./components/rapex.js"


function App() {

  const [sideToggle, setSideToggle] = useState(false)

  return (
    <Router>
   
   

<Switch>

      <main>


      <Nav click={() => setSideToggle(true)}/>
      
      <SideDrawer show={sideToggle} click={() => setSideToggle(false)}  />
      <Backdrop show={sideToggle} click={() => setSideToggle(false)} />


    

          <Route  exact path="/">
         
      <Main />
      </Route>


      

      <Route exact path="/overwatch" component={Offices} />
      
      <Route exact path="/apex" component={Warehouses} />


      <Route exact path="/overwatchleague" component={Support} />

      <Route exact path="/fortnite" component={Team} />
      <Route exact path="/founders" component={Founders} />
      <Route exact path="/company" component={Company} />
      <Route exact path="/services" component={Services} />
      <Route exact path="/contactform" component={contactForm} />
      <Route exact path="/roverwatch" component={roverwatch} />
      <Route exact path="/rapex" component={rapex} />


      </main>



   
      
          



      
      
      </Switch>

    
   
      
    </Router>
  );
}

export default App;
