import React, { useEffect, useState } from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Stack from "@mui/material/Stack";
function Navigation(props) {
  let [screenWidth, setScreenWidth] = useState(1024);
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleResize = () => {
    const { innerWidth: width, innerHeight: height } = window;
    setScreenWidth(() => width);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };
  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }
  const prevOpen = React.useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  useEffect(() => {
    let intViewportWidth = window.innerWidth;
    setScreenWidth(() => intViewportWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="Navigation_Main">
      {screenWidth > 1200 ? (
        <>
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
        </>
      ) : (
        <>
          <div className="Navigation_NavigationBar">
            <Stack direction="row" spacing={2}>
              <div>
                <Button
                  ref={anchorRef}
                  id="composition-button"
                  aria-controls={open ? "composition-menu" : undefined}
                  aria-expanded={open ? "true" : undefined}
                  aria-haspopup="true"
                  onClick={handleToggle}
                >
                  <img
                    id="Navigation_menudrop"
                    src="/images/menudrop.png"
                    alt=""
                  />
                </Button>
                <Popper
                  open={open}
                  anchorEl={anchorRef.current}
                  role={undefined}
                  placement="bottom-start"
                  transition
                  disablePortal
                  id="Navigation_dropdown"
                  
                >
                  {({ TransitionProps, placement }) => (
                    <Grow
                      id="Navigation_dropdown"
                      {...TransitionProps}
                      style={{
                        transformOrigin:
                          placement === "bottom-start"
                            ? "left top"
                            : "left bottom",
                            
                      }}
                    >
                      <Paper>
                        <ClickAwayListener onClickAway={handleClose}>
                          <MenuList
                            autoFocusItem={open}
                            id="composition-menu"
                            aria-labelledby="composition-button"
                            onKeyDown={handleListKeyDown}
                          >
                            <Link className="Navigation_links" to="/">
                              <MenuItem
                                id="Navigation_dropdown_links"
                                onClick={handleClose}
                              >
                                HOMEPAGE
                              </MenuItem>
                            </Link>
                            <Link
                              className="Navigation_links"
                              to="/richmond-road"
                            >
                              <MenuItem
                                id="Navigation_dropdown_links"
                                onClick={handleClose}
                              >
                                GALLERY
                              </MenuItem>
                            </Link>
                            <Link className="Navigation_links" to="/press">
                              <MenuItem
                                id="Navigation_dropdown_links"
                                onClick={handleClose}
                              >
                                PRESS
                              </MenuItem>
                            </Link>
                            <Link className="Navigation_links" to="/about">
                              <MenuItem
                                id="Navigation_dropdown_links"
                                onClick={handleClose}
                              >
                                ABOUT US
                              </MenuItem>
                            </Link>
                            <Link className="Navigation_links" to="/contact-us">
                              <MenuItem
                                id="Navigation_dropdown_links"
                                onClick={handleClose}
                              >
                                CONTACT
                              </MenuItem>
                            </Link>
                          </MenuList>
                        </ClickAwayListener>
                      </Paper>
                    </Grow>
                  )}
                </Popper>
              </div>
            </Stack>
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
        </>
      )}
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
