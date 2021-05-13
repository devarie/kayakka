import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Home'; 
import Details from './Details';
import Contact from './Contact';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
    <Router>
      <AppBar position="static">
        <Toolbar>
        




          <IconButton  edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={handleClick}>
            
            
            
            
            <MenuIcon/>
            <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}><Link to="/Home">Home</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to="/Details">Details</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to="/Contact">Contact</Link></MenuItem>
      </Menu>
       
       <Route exact path="/Home"><Home/></Route>
       <Route exact path="/Details"><Details/></Route>
       <Route exact path="/Contact"><Contact/></Route>
          </IconButton>








          
          <Typography variant="h6" className={classes.title}>
            Kayaknews
          </Typography>
          <Button onclick="./detail.js" color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      </Router>
      </div>
    
  );
}

 
  
