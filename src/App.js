import React, { useState } from "react"
import "./App.css"
// Importing react router dom, switch and route
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
//----------------- Importing My Components ----------------------
import Header from "./components/Header/index"
import Main from "./components/Main/index"
import Footer from "./components/Footer/index"
import Coffees from "./components/Coffees"
import CoffeeDetails from "./components/Coffees/CoffeeDetails"
//----------------------------------------------------------------

function App() {
  // const isLoggedIn = false
  // Using State (Replaces line above)
  const [isLoggedIn, setIsLoggedIn] = useState(false) // how to create a state variable
  return (
    // added the ability to use the react router throughout the app
    <Router>
      <div className="App">
        <header className="App-header">
          {/* Passing isLoggedIn into Header (issa Props) */}
          <Header setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} />
        </header>
        <section className="main-section main-style">
          <Switch>

            {/* Short and efficient way to write routes */}
            <Route path="/coffee/:type/:id" component={CoffeeDetails}/>
            <Route path="/coffee" component ={Coffees}/>
            <Route path="/" component ={Main}/>
            {/* ----------------------------------------------------- */}
            {/* More Vurbose way of writing routes */}
            {/* <Route path="/coffee" component>
              <Coffees />
            </Route> */}
            {/* ----------------------------------------------------- */}
            {/* More Vurbose way of writing routes */}
            {/* <Route path="/" component>
              <Main />
            </Route> */}
            {/* ----------------------------------------------------- */}
          </Switch>
        </section>
        <Footer />
      </div>
    </Router>
  )
}

export default App
