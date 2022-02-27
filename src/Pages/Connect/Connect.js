import React, { useEffect, useState } from "react";
import emailjs from "emailjs-com";
import "./Connect.css"
function Connect() {


  function sendEmail(e) {
    e.preventDefault();

emailjs.sendForm('service_hu17s3v', 'template_j2mogic', e.target, 'user_J4xOcHm5zUBPpUwaHtH9V')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    e.target.reset()
}

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
    {screenWidth>1200?(
      <div className="Connect_main">
      <div className="Connect_info">
        <div className="Connect_header">
          <h2>CONNECT</h2>
        </div>
        <div className="Connect_body1">
          <text>We would love to discuss your project.</text>
        </div>
        <div className="Connect_body2">
          <text>Please direct business enquiries to our studio</text>
        </div>
        <div className="Connect_body3">
          <text>+1 416 558 3989</text>
        </div>
        <div className="Connect_body4">
          <tex>Please direct press enquiries to:</tex>
        </div>
        <div className="Connect_body5">
          <text>info@studio93inc.com</text>
        </div>
        <div className="Connect_body6">
          <text>
            155 Hoey Crescent
            <br />
            Oakville, ontario, L6M 0X1, <br />
            Canada
          </text>
        </div>
        <div className="Connect_body7">
          <div className="Connect_body7_message">
            <form onSubmit={sendEmail}>
              <div className="Connect_body7_message_row1">
                <div className="Connect_body7_message_row1_name">
                  <text>Name</text>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                  />
                </div>
                <div className="Connect_body7_message_row1_email">
                <text>Email</text>
                  <input
                    type="email"
                    className="form-control"

                    name="email"
                  />
                </div>
              </div>

              <div className="Connect_body7_message_row2_subject">
              <text>Subject</text>
                <input
                  type="text"
                  className="form-control"
                  
                  name="subject"
                />
              </div>

              <div className="Connect_body7_message_row3_message">
              <text>Message</text>
                <textarea
                  className="form-control"
                  id=""
                  cols="30"
                  rows="8"
                  
                  name="message"
                ></textarea>
              </div>
              <div className="Connect_body7_message_row4_send">
                <input
                  type="submit"
                  className="btn btn-info"
                  value="Send Message"
                ></input>
              </div>
            </form>
          </div>
        </div>
        
      </div>
      <div className="Connect_image2" onContextMenu={(e)=> e.preventDefault()}>
        <img src="/images/Richmond10.jpg" alt="" />
      </div>
    </div>
    ):(
      <div className="Connect_main">
      <div className="Connect_info">
        <div className="Connect_header">
          <h2>CONNECT</h2>
        </div>
        <div className="Connect_body1">
          <text>We would love to discuss your project.</text>
        </div>
        <div className="Connect_body2">
          <text>Please direct business enquiries to our studio</text>
        </div>
        <div className="Connect_body3">
          <text>+1 416 558 3989</text>
        </div>
        <div className="Connect_body4">
          <tex>Please direct press enquiries to:</tex>
        </div>
        <div className="Connect_body5">
          <text>info@studio93inc.com</text>
        </div>
        <div className="Connect_body6">
        <text>
            155 Hoey Crescent
            <br />
            Oakville, ontario, L6M 0X1, <br />
            Canada
          </text>
        </div>
        <div className="Connect_body7">
          <div className="Connect_body7_message">
            <form onSubmit={sendEmail}>
              <div className="Connect_body7_message_row1">
                <div className="Connect_body7_message_row1_name">
                  <text>Name</text>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                  />
                </div>
                <div className="Connect_body7_message_row1_email">
                <text>Email</text>
                  <input
                    type="email"
                    className="form-control"

                    name="email"
                  />
                </div>
              </div>

              <div className="Connect_body7_message_row2_subject">
              <text>Subject</text>
                <input
                  type="text"
                  className="form-control"
                  
                  name="subject"
                />
              </div>

              <div className="Connect_body7_message_row3_message">
              <text>Message</text>
                <textarea
                  className="form-control"
                  id=""
                  cols="30"
                  rows="8"
                  
                  name="message"
                ></textarea>
              </div>
              <div className="Connect_body7_message_row4_send">
                <input
                  type="submit"
                  className="btn btn-info"
                  value="Send Message"
                ></input>
              </div>
            </form>
          </div>
        </div>
        
      </div>
      
    </div>
    )}
    
    </>
  );
}

export default Connect;
