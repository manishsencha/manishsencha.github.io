import React, { useState } from "react";
import "./Header.css";
import useWindowWidth from "../../utils/windowWidth";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { AccountBox, Book, ChromeReaderMode, DeveloperMode, Home, Menu } from "@material-ui/icons";

function scrollToElement(elementId) {
  const elem = document.getElementById(elementId);
  if (!elem) return window.scrollTo({ top: 0 });
  return elem.scrollIntoView();
}

function Header() {
  const width = useWindowWidth();
  const [open, setOpen] = useState(false);
  const toggleDrawer = () => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpen(!open);
  };
  return (
    <div id="header">
      <div className="header-logo">Manish Sencha</div>
      {width < 800 ? (
        <React.Fragment key={"left"}>
          <Button onClick={toggleDrawer()}><Menu fontSize="large" /></Button>
          <Drawer anchor="left" open={open} onClose={toggleDrawer()} >
            <div
              style={{ width: "250px" }}
              role="presentation"
              onClick={toggleDrawer()}
              onKeyDown={toggleDrawer()}
            >
              <List>
                <ListItem className="sidebar-link " button component="a" href="#home" key={"Home"}>
                  <ListItemIcon>
                    <Home />
                  </ListItemIcon>
                  <ListItemText primary={"Home"} />
                </ListItem>
                <ListItem className="sidebar-link" button component="a" href="#about" key={"About"}>
                  <ListItemIcon>
                    <AccountBox />
                  </ListItemIcon>
                  <ListItemText primary={"About"} />
                </ListItem>
                <ListItem className="sidebar-link" button component="a" href="#skills" key={"Skills"}>
                  <ListItemIcon>
                    <DeveloperMode />
                  </ListItemIcon>
                  <ListItemText primary={"Skills"} />
                </ListItem>
                <ListItem className="sidebar-link" button component="a" href="#projects" key={"Projects"}>
                  <ListItemIcon>
                    <ChromeReaderMode />
                  </ListItemIcon>
                  <ListItemText primary={"Projects"} />
                </ListItem>
                <ListItem className="sidebar-link" button component="a" href="#resume" key={"Resume"}>
                  <ListItemIcon>
                    <Book />
                  </ListItemIcon>
                  <ListItemText primary={"Resume"} />
                </ListItem>
              </List>
            </div>
          </Drawer>
        </React.Fragment>
      ) : (
        <ul className="header-items">
          <li onClick={() => scrollToElement("home")}>Home </li>
          <li onClick={() => scrollToElement("about")}>About</li>
          <li onClick={() => scrollToElement("projects")}>Projects</li>
          <li onClick={() => scrollToElement("resume")}>Resume</li>
        </ul>
      )
      }
    </div >
  );
}

export default Header;
