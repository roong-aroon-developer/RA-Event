import React from 'react'
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import MailOutlineRoundedIcon from '@material-ui/icons/MailOutlineRounded';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

const useStyles = makeStyles({
  root: {
    width: "100%",
    height: 60,
    position: "fixed",
    bottom: 10,
    backgroundColor: "#ffffff",
    borderRadius: 30,
    zIndex: 1
  },
});

const Navbar = () => {
    const classes = useStyles();
    return(
        <BottomNavigation
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction label="Home" icon={<HomeRoundedIcon/>} />
        <BottomNavigationAction label="Mail" icon={<MailOutlineRoundedIcon/>} />
        <BottomNavigationAction label="Profile" icon={<AccountCircleRoundedIcon/>} />
      </BottomNavigation>
    )
}

export default Navbar