import React, { useState } from 'react';
import { useEffect } from "react";
import { useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "./Gallery.css"
function Gallery() {

  const ref = useRef(null);
const[imagedata,setImageData]=useState([])


const images =()=>{
   for(let i=0; i<19;i++){
      setImageData((prev)=>[...prev,"/images/"+`Richmond${i}`+".jpg"])
      //console.log(imagedata)
   }
 }

 useEffect(()=>{
   images();
   //console.log(imagedata)
 },[])
  
  return (
    <div className='Gallary_main'>
      {/* {console.log(imagedata)} */}
      {imagedata.map((image,index)=>(
        <> 
        <div className='Gallary_images'>
          <div className='Gallary_images_left'>
            {/* <img src={image} alt=""></img> */}
          </div>
          <div className='Gallary_images_right'>
            <div className='Gallary_images_righttop'>
              {/* <img src={image} alt=""></img> */}
            </div>
            <div className='Gallary_images_rightbottom'>
              {/* <img src={image} alt=""></img> */}
            </div>
          </div>
          
        </div>
        
        <div className='Gallary_images'>
          {/* <img src={image} alt=""></img> */}
        </div>
        {/* <img src={image} alt=""></img> */}
        </>
        
        
      ))}
      
    </div>
  );
}

export default Gallery;
