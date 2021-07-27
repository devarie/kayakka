import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
// import Button from "@material-ui/core/Button";
// import useMediaQuery from "@material-ui/core/useMediaQuery";
import { withRouter } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    textcolor:"textPrimary",
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    
    [theme.breakpoints.down("xs")]: {
      flexGrow: 1
    }
  },
  headerOptions: {
    display: "flex",
    flex: 1,
    justifyContent: "space-evenly"
  },
  Appbar:{
    background: '#2E3B55',
  },
}));

const Header = props => {
  const { history } = props;
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  // const theme = useTheme();
  // const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClick = pageURL => {
    history.push(pageURL);
    setAnchorEl(null);
  };

  // const handleButtonClick = pageURL => {
  //   history.push(pageURL);
  // };

  const menuItems = [
    {
      menuTitle: "Home",
      pageURL: "/"
    },
    {
      menuTitle: "Pricing",
      pageURL: "/Pricing"
    },
    {
    menuTitle: "SignIn",
      pageURL: "/SignIn"
  }
  ];

  return (
    <div className={classes.root}>
      <AppBar maxwidth="lg" position="sticky" style={{ background: 'linear-gradient(45deg, rgba(245, 229, 27, 1) 30%,rgba(255, 255, 126, 1)  90%)' }} >
        <Toolbar>
          <Typography color="textPrimary" variant="h5" className={classes.title}>
            Kayak Expeditions
          </Typography>
          {/* {isMobile ? ( */}
            <>
              <IconButton
              
                edge="end"
                className={classes.menuButton}
                color="primary"
                aria-label="menu"
                onClick={handleMenu}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                open={open}
                onClose={() => setAnchorEl(null)}
              >
                {menuItems.map(menuItem => {
                  const { menuTitle, pageURL } = menuItem;
                  return (
                    <MenuItem onClick={() => handleMenuClick(pageURL)}>
                      {menuTitle}
                    </MenuItem>
                  );
                })}
              </Menu>
            </>
          {/* ) : (
            <div className={classes.headerOptions}>
              <Button
                variant="contained"
                onClick={() => handleButtonClick("/")}
              >
                HOME
              </Button>
              <Button
                variant="contained"
                onClick={() => handleButtonClick("/contact")}
              >
                CONTACT
              </Button>
              <Button
                variant="contained"
                onClick={() => handleButtonClick("/about")}
              >
                ABOUT
              </Button>
            </div>
          ) */}
        </Toolbar>
      </AppBar>
    </div>
  )};


export default withRouter(Header);
