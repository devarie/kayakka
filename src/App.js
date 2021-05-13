import "./App.css";
import Contact from './Contact';
import ButtonAppBar from './ButtonAppBar';
import Details from "./Details";
import React from "react";
import Home from './Home';
import ImageGridList from "./image-flex";



export default function App() {
  return (
    
      <div>
        
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}

       
           
            <ButtonAppBar/>
           <ImageGridList/>
          

         

        


          
          
          
      </div>
   
  );
}