import React, { useEffect, useState } from "react";
import "./Aboutus.css"
function Aboutus() {
  
  let [screenWidth, setScreenWidth] = useState(1024);
  const handleResize = () => {
    const { innerWidth: width, innerHeight: height } = window;
    setScreenWidth(() => width);
  };
  useEffect(() => {
    let intViewportWidth = window.innerWidth;
    setScreenWidth(() => intViewportWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
    {screenWidth>1200?(<div className='About_main'>
    <div className='About_info'>
      <div className='About_header'>
        <h2>About Studio 93</h2>
      </div>
      <div className='About_body'>
      <text>For over 30 years the Studio 93 team has been designing 
        and creating luxurious bespoke homes.
          <br/>
          <br/>
          We believe it starts with honest acknowledgement that all 
          great homes are built from a successful collaboration between 
          client, designer and builder. Carefully balancing the
          needs, means and desires of our client partners is the 
          hallmark of our success.
          <br/>
          <br/>
          We craft spaces that create emotional experiences 
          sympathetic to the lifestyle of our clients. Every detail 
          considered, all finishes selected to enhance the sense of 
          luxury, and powerful permanence. Our architectural and design 
          understanding comes from years of experience on grand 
          residential and hospitality spaces throughout the globe,
          and ensures that aesthetic of the home extends from the 
          drive throughout the interior. Whether your interaction 
          is over a lifetime or a fleeting moment, your home will 
          inspire and exhilarate.
          <br/>
          <br/>
          We provide an outstanding level of service throughout 
          the project that effortlessly
          brings together a team consisting of 
          the best craftsmen for every aspect of the build, 
          be that architectural, millwork, furniture or finishes. 
          Uncompromising control throughout project management 
          ensures absolute precision and quality, and a home that 
          will endure for many generations.
        </text>
      </div>
    </div>
    <div className='About_image2' onContextMenu={(e)=> e.preventDefault()}>

    <img src='/images/Richmond4.jpg' alt=''/>
    </div>
  </div>
  ):(
    <div className='About_main'>
    <div className='About_info'>
      <div className='About_header'>
        <h2>About Studio 93</h2>
      </div>
      <div className='About_body'>
      <text>For over 30 years the Studio 93 team has been designing 
        and creating luxurious bespoke homes.
          <br/>
          <br/>
          We believe it starts with honest acknowledgement that all 
          great homes are built from a successful collaboration between 
          client, designer and builder. Carefully balancing the
          needs, means and desires of our client partners is the 
          hallmark of our success.
          <br/>
          <br/>
          We craft spaces that create emotional experiences 
          sympathetic to the lifestyle of our clients. Every detail 
          considered, all finishes selected to enhance the sense of 
          luxury, and powerful permanence. Our architectural and design 
          understanding comes from years of experience on grand 
          residential and hospitality spaces throughout the globe,
          and ensures that aesthetic of the home extends from the 
          drive throughout the interior. Whether your interaction 
          is over a lifetime or a fleeting moment, your home will 
          inspire and exhilarate.
          <br/>
          <br/>
          We provide an outstanding level of service throughout 
          the project that effortlessly
          brings together a team consisting of 
          the best craftsmen for every aspect of the build, 
          be that architectural, millwork, furniture or finishes. 
          Uncompromising control throughout project management 
          ensures absolute precision and quality, and a home that 
          will endure for many generations.
        </text>
      </div>
    </div>
   
  </div>
  )}
  
  </>
  );
}

export default Aboutus;
