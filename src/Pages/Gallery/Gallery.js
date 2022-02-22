import React, { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import lozad from "lozad";

import "./Gallery.css";

function Gallery() {
  const ref = useRef(null);
  const [imagedata, setImageData] = useState([]);
  const [imagearray, setImageArray] = useState([]);

  let [screenWidth, setScreenWidth] = useState(1024);
  
  
  const handleResize = () => {
    const { innerWidth: width, innerHeight: height } = window;
    console.log(width,height)
    setScreenWidth(() => width);
    
    
  };
  
  
  const images = () => {
    let size = 32;
    for (let i = 0; i < size; i += 4) {
      let temp = [];
      for (let j = i; j < i + 4; j++) {
        if (j < size) temp.push("/images/" + `Richmond${j}` + ".jpg");
      }
      setImageData((prev) => [...prev, temp]);
      // console.log(imagedata);
    }
  };
  // get the window size and check the width, if its smaller than 768 then
  //know its mobile and you do not want to change the scrolling direction

  const onWheel = (e) => {
    e.preventDefault();

    try {
      const container = scrollRef.current;
      const containerScrollPosition = scrollRef.current.scrollLeft;
      container.scrollTo({
        top: 0,
        left: containerScrollPosition + e.deltaY + e.deltaX,
      });
    } catch (err) {
      //console.log(err)
    }
  };
  const onWheel2 = (e, val) => {
    console.log("clicked")
    e.preventDefault();
    const container = scrollRef.current;
    const containerScrollPosition = scrollRef.current.scrollLeft;
    val === "Right"
      ? container.scrollTo({
          top: 0,
          left: containerScrollPosition + 1000,
          behavior: "smooth",
        })
      : container.scrollTo({
          top: 0,
          left: containerScrollPosition - 1000,
          behavior: "smooth",
        });
  };

  const scrollRef = useRef(null);
  useEffect(() => {
    images();
    const observer = lozad(); // lazy loads elements with default selector as '.lozad'
    observer.observe();
    let intViewportWidth = window.innerWidth;
    setScreenWidth(() => intViewportWidth);
    window.addEventListener("resize", handleResize);
    
    return () => window.removeEventListener("resize", handleResize);
    
  }, []);

  useEffect(() => {
    //console.log(imagedata);
    console.log(screenWidth)
    var element = document.scrollingElement || document.documentElement;
    element.addEventListener("wheel", onWheel, { passive: false });
    
    return () => {
      element.removeEventListener("wheel", onWheel, { passive: false });
      
    };
  }, [screenWidth]);

 

  return (
    <>
    {/* {console.log(screenWidth)} */}
    {screenWidth>1200?(
      <div className="Gallary_main container" ref={scrollRef} id="container">
      {/* {console.log(imagedata)} */}
      {/* {console.log(window.pageXOffset)} */}
      <div
        className="Gallery_ArrowLeft"
        onClick={(e) => {
          onWheel2(e, "left");
        }}
      >
        <img src="/images/Left-Button.png" alt=""></img>
      </div>
      <div
        className="Gallery_ArrowRight"
        onClick={(e) => {
          onWheel2(e, "Right");
        }}
      >
        <img src="/images/Right-Button.png" alt=""></img>
      </div>
      {imagedata.map((imagegroup, index) => {
        let key = index;
        {
          // console.log(imagegroup, index, index % 3);
        }
        return (
          <>
            <div className="Gallery_Container" key={`${index}${index % 3}`}>
              <div className="Gallery_Grid">
                {imagegroup[0] ? (
                  <div className={`Gallery_image${`${index}${0}`}`}>
                    <img src={imagegroup[0]} alt=""></img>
                  </div>
                ) : null}

                {imagegroup[1] ? (
                  <>
                    {index % 3 === 1 ? (
                      <div className={`Gallery_image${`${index}${1}`}_text`}>
                        {`${index}${1}` === "11" ? (
                          <h2 className={`Gallery_tile${`${index}${1}`}`}>
                            “The approach to scale and detail in the great room
                            expresses an almost stately elegance reminiscent of the
                            grand hotels.”
                          </h2>
                        ) : (
                          <h2 className={`Gallery_tile${`${index}${1}`}`}>
                            “The home <br />
                            exudes luxury at
                            <br />
                            every turn, <br />
                            enriching the
                            <br />
                            homeowners
                            <br />
                            lives beyond the <br />
                            confines of the <br />
                            space.”
                          </h2>
                        )}

                        {/* {11,71} */}
                      </div>
                    ) : (
                      <div className={`Gallery_image${`${index}${1}`}`}>
                        {`${index}${1}`==="31"? (
                          <img src="/images/Richmond15.jpg" alt=""></img>
                        ):(
                          <img src={imagegroup[1]} alt=""></img>
                        )}
                        
                      </div>
                    )}
                  </>
                ) : null}

                {imagegroup[2] ? (
                  <>
                    {index % 3 === 2 ? (
                      <div className={`Gallery_image${`${index}${2}`}_text`}>
                        {`${index}${2}` === "22" ? (
                          <h2 className={`Gallery_tile${`${index}${2}`}`}>
                            “The dining room <br />
                            makes a <br />
                            sophisticated and <br />
                            tailored statement <br />
                            informed by
                            <br />
                            echoes of Art
                            <br />
                            Deco.”
                          </h2>
                        ) : (
                          <h2 className={`Gallery_tile${`${index}${2}`}`}>
                            “The living room is anchored by the warmth of <br />
                            the matte black nero marquina fireplace <br />
                            with delicate bronze inlay.”
                          </h2>
                        )}

                        {/* {22,52} */}
                      </div>
                    ) : (
                      <div className={`Gallery_image${`${index}${2}`}`}>
                        {index % 3 === 1 ? (
                          <img src={imagegroup[1]} alt=""></img>
                        ) : (
                          <img src={imagegroup[2]} alt=""></img>
                        )}
                      </div>
                    )}
                  </>
                ) : null}

                {imagegroup[3] ? (
                  <>
                    {index % 3 === 0 ? (
                      <div className={`Gallery_image${`${index}${3}`}_text`}>
                        {`${index}${3}` === "03" ? (
                          <h2 className={`Gallery_tile${`${index}${3}`}`}>
                            "The great room is a story of <br />
                            sumptuous warmth within a <br />
                            soaring space dripping with <br />
                            glass chandeliers."
                          </h2>
                        ) : (
                          <>
                            {`${index}${3}` === "63" ? (
                              <img src={imagegroup[3]} alt=""></img>
                            ) : (
                              <h2 className={`Gallery_tile${`${index}${3}`}`}>
                                “The heart of the <br />
                                matter is a stunning <br />
                                kitching, in carrara,
                                <br />
                                massacar, and white <br />
                                lacquer.”
                              </h2>
                            )}
                          </>
                        )}

                        {/* {03,33} */}
                      </div>
                    ) : (
                      <div className={`Gallery_image${`${index}${3}`}`}>
                        <img src={imagegroup[2]} alt=""></img>
                      </div>
                    )}
                  </>
                ) : null}
                
                
                {imagegroup[3] ? (
              <>
                {`${index}${4}` === "14" ? (
                 <video 
                 className={`lozad Gallery_video${`${index}${4}`}`}
                 autoPlay
                 loop
                 muted
                 playsInline
                 >
                   <source src="/images/RichmondGreatSpace.mp4" type="video/mp4"></source>
                   
                 </video>
                 
                ) : (
                  <>
                    {`${index}${4}` === "44" ? (
                     <video 
                     className={`lozad Gallery_video${`${index}${4}`}`}
                     autoPlay
                     loop
                     muted
                     playsInline
                     >
                       <source src="/images/RichmondFamilyRoom.mp4" type="video/mp4"></source>
                       
                     </video>
                    ) : (
                      <>
                        {`${index}${4}` === "64" ? (
                          <video 
                          className={`lozad Gallery_video${`${index}${4}`}`}
                          autoPlay
                          loop
                          muted
                          playsInline
                          >
                            <source src="/images/RichmondMasterSuite.mp4" type="video/mp4"></source>
                            
                          </video>
                        ) : (
                          <>
                            { `${index}${4}` === "34" ? null : (
                              <div className={`Gallery_image${`${index}${4}`}`}>
                                <img src={imagegroup[3]} alt=""></img>
                                {/* {14,44,64}*/}
                              </div>
                            )}
                            {/**/}
                          </>
                        )}
                      </>
                    )}
                  </>
                )}
              </>
            ) : null}
              </div>
            </div>
            <div></div>
            
          </>
        );
      })}
    </div>
    ):(
      <div className="Gallary_main" >
      {/* {console.log(imagedata)} */}
      {/* {console.log(window.pageXOffset)} */}

      {imagedata.map((imagegroup, index) => {
        let key = index;
        {
          console.log(imagegroup, index, index % 3);
        }
        return (
          <>
            
            {imagegroup[0] ? (
                  <div className={`Gallery_image${`${index}${0}`}`}>
                    <img src={imagegroup[0]} alt=""></img>
                  </div>
                ) : null}

                {imagegroup[1] ? (
                  <>
                    {index % 3 === 1 ? (
                      <div className={`Gallery_image${`${index}${1}`}_text`}>
                        {`${index}${1}` === "11" ? (
                          <h2 className={`Gallery_tile${`${index}${1}`}`}>
                            “The approach to scale and detail in the great room
                            expresses
                             an almost stately elegance reminiscent of the
                            grand hotels.”
                          </h2>
                        ) : (
                          <h2 className={`Gallery_tile${`${index}${1}`}`}>
                            “The home 
                            exudes luxury at
                            
                            every turn,
                            enriching the
                            
                            homeowners
                            
                            lives beyond the 
                            confines of the 
                            space.”
                          </h2>
                        )}

                        {/* {11,71} */}
                      </div>
                    ) : (
                      <div className={`Gallery_image${`${index}${1}`}`}>
                        {`${index}${1}`==="31"? (
                          <img src="/images/Richmond15.jpg" alt=""></img>
                        ):(
                          <img src={imagegroup[1]} alt=""></img>
                        )}
                        
                      </div>
                    )}
                  </>
                ) : null}

                {imagegroup[2] ? (
                  <>
                    {index % 3 === 2 ? (
                      <div className={`Gallery_image${`${index}${2}`}_text`}>
                        {`${index}${2}` === "22" ? (
                          <h2 className={`Gallery_tile${`${index}${2}`}`}>
                            “The dining room 
                            makes a 
                            sophisticated and 
                            tailored statement 
                            informed by
                           
                            echoes of Art
                            
                            Deco.”
                          </h2>
                        ) : (
                          <h2 className={`Gallery_tile${`${index}${2}`}`}>
                            “The living room is anchored by the warmth of
                            the matte black nero marquina fireplace 
                            with delicate bronze inlay.”
                          </h2>
                        )}

                        {/* {22,52} */}
                      </div>
                    ) : (
                      <div className={`Gallery_image${`${index}${2}`}`}>
                        {index % 3 === 1 ? (
                          <img src={imagegroup[1]} alt=""></img>
                        ) : (
                          <img src={imagegroup[2]} alt=""></img>
                        )}
                      </div>
                    )}
                  </>
                ) : null}

                {imagegroup[3] ? (
                  <>
                    {index % 3 === 0 ? (
                      <div className={`Gallery_image${`${index}${3}`}_text`}>
                        {`${index}${3}` === "03" ? (
                          <h2 className={`Gallery_tile${`${index}${3}`}`}>
                            "The great room is a story of 
                            sumptuous warmth within a 
                            soaring space dripping with 
                            glass chandeliers."
                          </h2>
                        ) : (
                          <>
                            {`${index}${3}` === "63" ? (
                              <img src={imagegroup[3]} alt=""></img>
                            ) : (
                              <h2 className={`Gallery_tile${`${index}${3}`}`}>
                                “The heart of the 
                                matter is a stunning
                                kitching, in carrara,
                                
                                massacar, and white 
                                lacquer.”
                              </h2>
                            )}
                          </>
                        )}

                        {/* {03,33} */}
                      </div>
                    ) : (
                      <div className={`Gallery_image${`${index}${3}`}`}>
                        <img src={imagegroup[2]} alt=""></img>
                      </div>
                    )}
                  </>
                ) : null}
            {imagegroup[3] ? (
              <>
              {`${index}${4}` === "14" ? (
                 <video 
                 className={`lozad Gallery_video${`${index}${4}`}`}
                 autoPlay
                 loop
                 muted
                 playsInline
                 >
                   <source src="/images/RichmondGreatSpace.mp4" type="video/mp4"></source>
                   
                 </video>
                 
                ) : (
                  <>
                    {`${index}${4}` === "44" ? (
                     <video 
                     className={`lozad Gallery_video${`${index}${4}`}`}
                     autoPlay
                     loop
                     muted
                     playsInline
                     >
                       <source src="/images/RichmondFamilyRoom.mp4" type="video/mp4"></source>
                       
                     </video>
                    ) : (
                      <>
                        {`${index}${4}` === "64" ? (
                          <video 
                          className={`lozad Gallery_video${`${index}${4}`}`}
                          autoPlay
                          loop
                          muted
                          playsInline
                          >
                            <source src="/images/RichmondMasterSuite.mp4" type="video/mp4"></source>
                            
                          </video>
                        ) : (
                          <>
                            {`${index}${4}` === "24" || `${index}${4}` === "34" ? null : (
                              <div className={`Gallery_image${`${index}${4}`}`}>
                                <img src={imagegroup[3]} alt=""></img>
                                {/* {14,44,64}*/}
                              </div>
                            )}
                            {/**/}
                          </>
                        )}
                      </>
                    )}
                  </>
                )}
                </>
            ) : null}
          </>
        );
      })}
    </div>
    )}
    
    </>
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
