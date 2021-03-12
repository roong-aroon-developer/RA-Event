import React from "react";
import { Link } from "react-router-dom";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import AccountCircleRoundedIcon from "@material-ui/icons/AccountCircleRounded";
import MailOutlineRoundedIcon from "@material-ui/icons/MailOutlineRounded";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";

import "./Navbar.css";

const useStyles = makeStyles({
  root: {
    width: "95%",
    height: 60,
    position: "fixed",
    bottom: 16,
    left: "2.5%",
    backgroundColor: "#ffffff",
    borderRadius: 30,
    zIndex: 1,
    boxShadow: "1px 3px 7px #00000024",
    margin: "auto",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

const Navbar = () => {
  const classes = useStyles();
  const [show, setShow] = React.useState(true);
  const [scrollPos, setScrollPos] = React.useState(true);
  
  React.useEffect(() => {
    const handleScroll = () => {
      setScrollPos(document.body.getBoundingClientRect().top);
      setShow(document.body.getBoundingClientRect().top > scrollPos);
    };
    window.addEventListener("scroll", handleScroll);
  }, [scrollPos]);
  return (
    <BottomNavigation className={classes.root} id={show ? "active" : "hidden"}>
      <BottomNavigationAction
        showLabel={true}
        label="Home"
        icon={<HomeRoundedIcon />}
        component={Link}
        to="/"
      />

      <BottomNavigationAction
        showLabel={true}
        label="Mail"
        icon={<MailOutlineRoundedIcon />}
        component={Link}
        to="/mail"
      />

      <BottomNavigationAction
        showLabel={true}
        label="Profile"
        icon={<AccountCircleRoundedIcon />}
        component={Link}
        to="/profile"
      />
    </BottomNavigation>
  );
};

export default Navbar;
