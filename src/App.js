import "./App.css";
import React from "react";

import Contact from './Contact';
import Details from "./Details";
import Home from './Home';
import Footer from './Footer'
import Header from "./Header";
import Signin from "./components/Signin"

import { Route, Switch } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import SignInSide from "./components/Signin";
import SignUp from "./components/SingUp";
import StickyFooter from "./StickeyFooter";
import Pricing from "./Pricing";
const useStyles = makeStyles({});

export default function App() {
  const classes = useStyles();
  return (
    
      <div>
        
     <Header/>
  
       <Switch>
        <Route exact from="/" render={props => <Home {...props} />} />
        <Route exact path="/Pricing" render={props => <Pricing {...props} />} />
        <Route exact path="/details" render={props => <Details {...props} />} />
        <Route exact path="/SignIn" render={props => <Signin {...props} />} />
        <Route exact path="/Signup" render={props => <SignUp {...props} />} />
        <Route exact path="/StickyFooter" render={props => <SignUp {...props} />} />
        
      </Switch>

          
           
          
<StickyFooter/>
         

        


          
          
          
      </div>
   
  );
}




