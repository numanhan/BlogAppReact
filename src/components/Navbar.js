import React  from 'react';
import {NavLink, Link, withRouter} from 'react-router-dom';


const  Navbar = (props) => {
    // setTimeout(()=>
        
    // {
    //         props.history.push("/about")
    // }, 5000)

        return (

  <nav>
    <div className="nav-wrapper">
      <a href="#" className="brand-logo">Logo</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><Link to="/" >Home</Link></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
      </ul>
    </div>
  </nav>
           
        )
    
}


export default withRouter(Navbar);