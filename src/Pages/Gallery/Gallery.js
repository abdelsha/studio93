import React, { useState } from 'react';
import { useEffect } from "react";
import { useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "./Gallery.css";
import HorizontalScroll from 'react-scroll-horizontal';



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
// get the window size and check the width, if its smaller than 768 then 
//know its mobile and you do not want to change the scrolling direction

const onWheel = e => {
  e.preventDefault();
  const container = scrollRef.current;
  const containerScrollPosition = scrollRef.current.scrollLeft;

  container.scrollTo({
    top: 0,
    left: containerScrollPosition + e.deltaY + e.deltaX,
  });
};

const scrollRef = useRef(null);

 useEffect(()=>{
   images();
   console.log(imagedata);
  var element = document.scrollingElement || document.documentElement;
  element.addEventListener('wheel', onWheel, { passive: false });
 },[])

 
  
  return (
    
      <div className="Gallary_main container" ref={scrollRef}  id="container">
        {/* {console.log(imagedata)} */}
        {console.log(window.pageXOffset)}
        {imagedata.map((imagegroup, index) => {
          let key = index;
          return (
            <>
              <div className="Gallery_images1">
                <img src={imagegroup[0]} alt=""></img>
              </div>
              <div className="Gallery_right">
                <img
                  className="Gallery_images2"
                  src={imagegroup[1]}
                  alt=""
                ></img>
                <img
                  className="Gallery_images3"
                  src={imagegroup[2]}
                  alt=""
                ></img>
              </div>
              <div className="Gallery_images4">
                <img src={imagegroup[3]} alt=""></img>
              </div>
            </>
          );
        })}
      </div>
    
  );
}

export default Gallery;


/*<HorizontalScroll>
      <div className="Gallary_main ">
        
        {console.log(window.pageYOffset)}
        {imagedata.map((imagegroup, index) => {
          let key = index;
          return (
            <>
              <div className="Gallery_images1">
                <img src={imagegroup[0]} alt=""></img>
              </div>
              <div className="Gallery_right">
                <img
                  className="Gallery_images2"
                  src={imagegroup[1]}
                  alt=""
                ></img>
                <img
                  className="Gallery_images3"
                  src={imagegroup[2]}
                  alt=""
                ></img>
              </div>
              <div className="Gallery_images4">
                <img src={imagegroup[3]} alt=""></img>
              </div>
            </>
          );
        })}
      </div>
    </HorizontalScroll> 
    */