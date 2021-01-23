import React from 'react';
import { Link} from "react-scroll";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import AppBar from "@material-ui/core/AppBar";
import HomeRoundedIcon from "@material-ui/icons/Home";
import Book from "@material-ui/icons/Book";
import LaptopChromebookRoundedIcon from "@material-ui/icons/LaptopChromebookRounded";
import PersonRoundedIcon from "@material-ui/icons/PersonRounded";
 import '../CSS/Navbarr.css';
const useStyles = makeStyles({
    root: {
      width: "auto",
    },
    appBar: {
      top: "auto",
      bottom: 10,
    },

  });
  
export default function Navbarr() {
    const classes = useStyles();

    return (
        <>
           
        <AppBar color="default" position="fixed" className={classes.appBar}>
          <BottomNavigation showLabels className={classes.root}>
            <BottomNavigationAction
              component={Link}
              activeClass="Mui-selected"
              to="home"
              spy={true}
              smooth={true}
              offset={0}
              duration={200}
              label="Home"
              icon={<HomeRoundedIcon />}
            />
            <BottomNavigationAction
              component={Link}
              activeClass="Mui-selected"
              to="about"
              spy={true}
              smooth={true}
              offset={0}
              duration={200}
              underline="none"
              label="About"
              icon={<PersonRoundedIcon />}
            />
            <BottomNavigationAction
              component={Link}
              activeClass="Mui-selected"
              to="projects"
              spy={true}
              smooth={true}
              offset={0}
              duration={200}
              underline="none"
              label="Projects"
              icon={<LaptopChromebookRoundedIcon />}
            />
            <BottomNavigationAction
              component={Link}
              activeClass="Mui-selected"
              to="resume"
              spy={true}
              smooth={true}
              offset={0}
              duration={200}
              underline="none"
              label="Resume"
              icon={<Book />}
            />
          </BottomNavigation>
        </AppBar>
      
        </>
    )
}
