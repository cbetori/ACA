import React from "react";
import {Link} from "react-router-dom";

function SideNav() {
  return (
    <div className="collapse navbar-collapse navbar-ex1-collapse">
      <ul className="nav navbar-nav side-nav">
        <li className="active">
          <Link to="/"> <i className="fa fa-fw fa-dashboard" />
            Dashboard 
          </Link>
        </li>
        <li>
          <Link to="/charts/">
            <i className="fa fa-fw fa-bar-chart-o" /> Charts
          </Link>
        </li>
        <li>
          <Link to="/tables/">
            <i className="fa fa-fw fa-table" /> Tables
          </Link>
          <Link to="/profiles/">
            <i /> Profiles
          </Link>
          <Link to="/marquee/iloveroutes">
            <i /> Marquee
          </Link>
          <Link to="/wall/">
            <i /> Wall
          </Link>
          <Link to="/settings/">
            <i /> Settings
          </Link>
        </li>
      </ul>
    </div>);  
}

export default SideNav;
