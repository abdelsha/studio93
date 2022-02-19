import React from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";
function Navigation(props) {
  return (
    <div className="Navigation_Main">
      <div className="Navigation_NavigationBar">
        <div className="Navigation_logo">
          <Link to="/">
          <img className="ImgLeft" src="/images/LogoLeft.png" alt="" />
          </Link>
          
        </div>
        <div className="Navigation_Routing">
          <div className="Navigation_Routing_block">
            <Link className="Navigation_links" to="/">
              HOME
            </Link>
            <Link className="Navigation_links" to="/richmond-road">
              GALLERY
            </Link>
            <Link className="Navigation_links" to="/press">
              PRESS
            </Link>
            <Link className="Navigation_links" to="/about">
              ABOUT US
            </Link>
            <Link className="Navigation_links" to="/contact-us">
              CONNECT
            </Link>
          </div>
        </div>
        <div className="Navigation_Social">
          <div className="Navigation_Social_block">
            <a href="https://www.w3schools.com">
            <img className="Logos" src="/images/Linkedin.png" alt="" />
            </a>  
            <a href="https://www.facebook.com/Studio-93-Inc-105771274927377">
            <img className="Logos" src="/images/Facebook.png" alt="" />
            </a> 
            <a href="https://www.pinterest.ca/Studio93inc/_created/">
            <img className="Logos" src="/images/Pintrest.png" alt="" />
            </a> 
            <a href="https://www.instagram.com/studio93inc/">
            <img className="Logos" src="/images/Instagram.png" alt="" />
            </a> 
          
          
          
          
          </div>
          
        </div>
        <div className="Navigation_logo_right">
          <Link to="/">
            <img className="ImgRight" src="/images/LogoRight.png" alt="" />
          </Link>
          
        </div>
      </div>
      <div className="Navigation_body">{props.children}</div>
    </div>
  );
}

export default Navigation;
/*       <Route path="/" exact={true} element={<Home/>}/>
        <Route path="/richmond-road" element = {<Gallery/>}/>
        <Route path="" element={<Press/>}/>
        <Route path="/about" element={<Aboutus/>}/>
        <Route path="/contact-us" element={<Connect/>}/>
 */
