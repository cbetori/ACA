import React from "react";
import TopNav from "./components/TopNav";
import SideNav from "./components/SideNav";
import Dashboard from "./components/Dashboard"
import Profiles from "./components/Profiles"
import Charts from "./components/Charts"
import Tables from "./components/Tables"
import Settings from "./components/Settings"
import Marquee from "./components/Marquee"
import Profile from "./components/Profile"
import Wall from "./components/Wall"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
    <div> 
      <div id="wrapper">
        <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
          <TopNav />
          <SideNav />
        </nav>
        <div style={{backgroundColor: "white"}}>
          <Route path='/' exact component={Dashboard}/>
          <Route path='/profiles' exact component={Profiles}/>
          <Route path='/profile/:id' exact component={Profile}/>
          <Route path='/charts' exact component={Charts}/>
          <Route path='/tables' exact component={Tables}/>
          <Route path='/settings' exact component={Settings}/>
          <Route path='/wall' exact component={Wall}/>
          <Route path='/marquee/:text' exact component={Marquee}/>
        </div>
      </div>
    </div>
    </Router>
  );
}


export default App;
