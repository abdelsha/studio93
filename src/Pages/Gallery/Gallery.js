import React, { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";

import "./Gallery.css";


function Gallery() {
  const ref = useRef(null);
  const [imagedata, setImageData] = useState([]);
  const [imagearray, setImageArray] = useState([]);

  const images = () => {
    let size = 19;
    for (let i = 0; i < size; i += 5) {
      let temp = [];
      for (let j = i; j < i + 5; j++) {
        if (j < size) temp.push("/images/" + `Richmond${j}` + ".jpg");
      }
      setImageData((prev) => [...prev, temp]);
      console.log(imagedata);
    }
  };
  // get the window size and check the width, if its smaller than 768 then
  //know its mobile and you do not want to change the scrolling direction

  const onWheel = (e) => {
    e.preventDefault();

    
    try{
      const container = scrollRef.current;
      const containerScrollPosition = scrollRef.current.scrollLeft;
      container.scrollTo({
        top: 0,
        left: containerScrollPosition + e.deltaY + e.deltaX,
        
      });
    }catch(err){
      //console.log(err)
    }
    
  };
  const onWheel2 = (e,val) => {
    //console.log("clicked")
    e.preventDefault();
    const container = scrollRef.current;
    const containerScrollPosition = scrollRef.current.scrollLeft;
    val==="Right"?
    container.scrollTo({
      top: 0,
      left: containerScrollPosition + 1000,
      behavior:'smooth',
    }):container.scrollTo({
      top: 0,
      left: containerScrollPosition - 1000,
      behavior:'smooth',
    });
  };

  const scrollRef = useRef(null);

  useEffect(() => {
    images();
    console.log(imagedata);
    var element = document.scrollingElement || document.documentElement;
    element.addEventListener("wheel", onWheel, { passive: false });
  }, []);

  return (
    <div className="Gallary_main container" ref={scrollRef}  id="container">
      {/* {console.log(imagedata)} */}
      {console.log(window.pageXOffset)}
      <div className="Gallery_ArrowLeft" onClick={(e)=>{onWheel2(e,null)}}>
        <img src="/images/Left-Button.png" alt=""></img>
      </div>
      <div className="Gallery_ArrowRight" onClick={(e)=>{onWheel2(e,"Right")}}>
        <img src="/images/Right-Button.png" alt="" ></img>
      </div>
      {imagedata.map((imagegroup, index) => {
        let key = index;
        return (
          <>
            <div className="Gallery_Container">
              <div className="Gallery_Grid">
                {imagegroup[0] ? (
                  <div className="Gallery_images1">
                    <img src={imagegroup[0]} alt=""></img>
                  </div>
                ) : null}

                {imagegroup[1] ? (
                  <div className="Gallery_images2">
                    <img src={imagegroup[1]} alt=""></img>
                  </div>
                ) : null}

                {imagegroup[2] ? (
                  <div className="Gallery_images3">
                    <img src={imagegroup[2]} alt=""></img>
                  </div>
                ) : null}

                {imagegroup[3] ? (
                  <div className="Gallery_images4">
                    <img src={imagegroup[3]} alt=""></img>
                  </div>
                ) : null}
              </div>
            </div>
            <div></div>
            {imagegroup[4] ? (
              <div className="Gallery_Containers">
                <div className="Gallery_image5">
                  <img src={imagegroup[4]} alt=""></img>
                </div>
              </div>
            ) : null}
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
