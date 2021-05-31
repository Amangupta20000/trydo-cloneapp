import React from 'react'
import {NavLink} from 'react-router-dom'

function NavBar() {
    return (
        <div className="container-fluid  nav_bg " data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1500" >
            <div className="row row1">
             <div className=" mx-auto col-sm-12 col-xs-12 col-lg-12">
            
                


        <nav className="navbar navbar-expand-lg   navbar-expand-sm navbar-expand-md navbar-light  ">
        <div className="container-fluid ">
          
      
            <ul className="navbar-nav ">
              <li className="nav-item">
                <NavLink activeClassName="menu_active" exact className="nav-link active" aria-current="page" to='/' >ALL DEMO</NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeClassName="menu_active" exact className="nav-link" to='/agency'>AGENCY</NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeClassName="menu_active" exact className="nav-link" to='/corporate'>CORPORATE</NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeClassName="menu_active" exact className="nav-link" to='/portfolio'>PORTFOLIO</NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeClassName="menu_active" exact className="nav-link" to='/gallery'>GALLERY</NavLink>
              </li>
              <div className="vl"><h1> </h1></div>
              <li className="nav-item">
                <NavLink activeClassName="menu_active" exact className="nav-link" to='/new'>NEW</NavLink>
              </li>
              
              
            
            </ul>
          </div>
        
      </nav>
      </div>
      </div>
  </div>
    )
}

export default NavBar
