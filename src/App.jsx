import './App.css'
import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Details from './Details'
import Home from './Home'
import Header from './Header'
import Signin from './components/Signin'
import SignUp from './components/SignUp'
import StickyFooter from './StickeyFooter'
import Pricing from './Pricing'

export default function App() {

  return (
    <div>
      <Header />
      <Switch>
        <Route exact from="/" render={props => <Home {...props} />} />
        <Route exact path="/Pricing" render={props => <Pricing {...props} />} />
        <Route exact path="/details" render={props => <Details {...props} />} />
        <Route exact path="/SignIn" render={props => <Signin {...props} />} />
        <Route exact path="/Signup" render={props => <SignUp {...props} />} />
        <Route exact path="/StickyFooter" render={props => <SignUp {...props} />} />
      </Switch>
      <StickyFooter />
    </div>
  )
}
