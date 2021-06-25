import React, { useState } from "react";
import "./Header.css";
import { Close, Menu } from "@material-ui/icons";
import useWindowWidth from "../../utils/windowWidth";
function CollapsedHeader() {
  return (
    <ul className="collapsed-header-items">
      <li>Home</li>
      <li>About</li>
      <li>Projects</li>
      <li>Resume</li>
    </ul>
  );
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
            {navOpen ? <Close fontSize="large" /> : <Menu fontSize="large" />}
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
            <CollapsedHeader />
          </div>
        </>
      ) : (
        <ul className="header-items">
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Resume</li>
        </ul>
      )}
    </div>
  );
}

export default Header;
