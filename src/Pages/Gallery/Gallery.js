import React, { useState } from 'react';
import { useEffect } from "react";
import { useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "./Gallery.css"
function Gallery() {

  const ref = useRef(null);
const[imagedata,setImageData]=useState([])
const[imagearray,setImageArray]=useState([])

const images =()=>{
   for(let i=0; i<19;i+=4){
    let temp=[];
    for(let j=i;j<i+4;j++){
      temp.push("/images/"+`Richmond${j}`+".jpg")
    }
      setImageData((prev)=>[...prev,temp])
      //console.log(imagedata)
   }
  
 }

 useEffect(()=>{
   images();
   console.log(imagedata);
 },[])

 
  
  return (
    <div className='Gallary_main'>
      
      
      
      
      {/* {console.log(imagedata)} */}
      {imagedata.map((imagegroup,index)=>{
        let key=index
        return (
          <>
          <img className='Gallery_images' src={imagegroup[0]} alt=""></img>
          <img className='Gallery_images' src={imagegroup[1]} alt=""></img>
          <img className='Gallery_images' src={imagegroup[2]} alt=""></img>
          <img className='Gallery_images' src={imagegroup[3]} alt=""></img>
          </>
        )
      })}
      {/* {imagedata.map((image,index)=>(
        
        <> 
        
          <div className='Gallary_images_left'>
            <img className='Gallery_images' src={image} alt=""></img>
          </div>
          <div className='Gallary_images_right'>
            <div className='Gallary_images_righttop'>
              <img className='Gallery_images' src={image} alt=""></img>
            </div>
            <div className='Gallary_images_rightbottom'>
              <img className='Gallery_images' src={image} alt=""></img>
            </div>
          </div>
          
        
        
        <div className='Gallary_images'>
          <img className='Gallery_images' src={image} alt=""></img>
        </div>
        
        </>
        
        
      ))} */}
      
      
    </div>
  );
}

export default Gallery;
