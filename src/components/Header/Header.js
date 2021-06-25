import React, { useState } from "react";
import "./Header.css";
import { Close, Menu } from "@material-ui/icons";
import useWindowWidth from "../../utils/windowWidth";

function scrollToElement(elementId) {
  const elem = document.getElementById(elementId);
  if (!elem) return window.scrollTo({ top: 0 });
  return elem.scrollIntoView();
}

function Header() {
  const width = useWindowWidth();
  const [navOpen, setNavOpen] = useState(false);
  return (
    <div id="header">
      <div className="header-logo">Manish Sencha</div>
      {width < 800 ? (
        <>
          <div onClick={() => setNavOpen(!navOpen)}>
            {navOpen ? (
              <Close fontSize="large" style={{ cursor: "pointer" }} />
            ) : (
              <Menu fontSize="large" style={{ cursor: "pointer" }} />
            )}
          </div>
          <div
            style={{
              position: "absolute",
              width: "100%",
              top: "53px",
              backgroundColor: "rgb(255, 255, 255, 1)",
              display: navOpen ? "block" : "none",
            }}
          >
            {/* <CollapsedHeader setNavOpen={setNavOpen} />
             */}
            <ul className="collapsed-header-items">
              <li
                onClick={() => {
                  setNavOpen(false);
                  scrollToElement("home");
                }}
              >
                Home
              </li>
              <li
                onClick={() => {
                  setNavOpen(false);
                  scrollToElement("about");
                }}
              >
                About
              </li>
              <li
                onClick={() => {
                  setNavOpen(false);
                  scrollToElement("projects");
                }}
              >
                Projects
              </li>
              <li
                onClick={() => {
                  setNavOpen(false);
                  scrollToElement("resume");
                }}
              >
                Resume
              </li>
            </ul>
          </div>
        </>
      ) : (
        <ul className="header-items">
          <li
            onClick={() => {
              scrollToElement("home");
            }}
          >
            Home
          </li>
          <li onClick={() => scrollToElement("about")}>About</li>
          <li onClick={() => scrollToElement("projects")}>Projects</li>
          <li onClick={() => scrollToElement("resume")}>Resume</li>
        </ul>
      )}
    </div>
  );
}

export default Header;
