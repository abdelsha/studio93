import React, { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";

import "./Gallery.css";

function Gallery() {
  const ref = useRef(null);
  const [imagedata, setImageData] = useState([]);
  const [imagearray, setImageArray] = useState([]);

  const images = () => {
    let size =32;
    for (let i = 0; i < size; i += 4) {
      let temp = [];
      for (let j = i; j < i + 4; j++) {
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
    //console.log("clicked")
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
    console.log(imagedata);
    var element = document.scrollingElement || document.documentElement;
    element.addEventListener("wheel", onWheel, { passive: false });
  }, []);

  return (
    <div className="Gallary_main container" ref={scrollRef} id="container">
      {/* {console.log(imagedata)} */}
      {/* {console.log(window.pageXOffset)} */}
      <div
        className="Gallery_ArrowLeft"
        onClick={(e) => {
          onWheel2(e, null);
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
          console.log(imagegroup, index, index % 3);
        }
        return (
          <>
            <div className="Gallery_Container" key={`${index}${index%3}`}>
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
                        <h2 className={`Gallery_tile${`${index}${1}`}`}>
                          "The great room is a story of <br />
                          sumptuous warmth within a <br />
                          hahdhhahdahdhahdahadhh with <br />
                          glass chandeliers."
                        </h2>
                      </div>
                    ) : (
                          <div className={`Gallery_image${`${index}${1}`}`}>
                            <img src={imagegroup[1]} alt=""></img>
                          </div>
                        )}
                  </>
                ) : null}

                {imagegroup[2] ? (
                  <>
                    {index % 3 === 2 && index === 2 ? (
                      <div className={`Gallery_image${`${index}${2}`}_text`}>
                      <h2 className={`Gallery_tile${`${index}${2}`}`}>
                          “The dining room <br />
                          makes a <br />
                          sophisticated and <br />
                          tailored statement <br />
                          informed by<br />
                          echoes of Art<br />
                          Deco.”
                        </h2>
                      </div>
                    ) :  (
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
                      <h2 className={`Gallery_tile${`${index}${3}`}`}>
                          "The great room is a story of <br />
                          sumptuous warmth within a <br />
                          soaring space dripping with <br />
                          glass chandeliers."
                        </h2>
                      </div>
                    ) : (
                          <div className={`Gallery_image${`${index}${3}`}`}>
                            <img src={imagegroup[2]} alt=""></img>
                          </div>
                        )}
                  </>
                ) : null}
              </div>
            </div>
            <div></div>
            {imagegroup[3] ? (
              <div className="Gallery_Containers">
                <div className={`Gallery_image${`${index}${4}`}`}>
                  <img src={imagegroup[3]} alt=""></img>
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
