import React , { useState } from 'react'
import "./App.css"
//----------------- Importing My Components ----------------------
import Header from "./components/Header/index" 
import Main from "./components/Main/index"
import Footer from "./components/Footer/index"
import Coffees from "./components/Coffees"
//----------------------------------------------------------------

function App() {
  // const isLoggedIn = false 
  // Using State (Replaces line above)
  const [isLoggedIn, setIsLoggedIn] = useState(false) // how to create a state variable
  return (
    <div className="App">
      <header className="App-header">
        {/* Passing isLoggedIn into Header (issa Props) */}
        <Header 
        setIsLoggedIn= { setIsLoggedIn }
        isLoggedIn={ isLoggedIn } 
        />
      </header>
      <section className="main-section main-style">
      <Main/>
      </section>
      <Coffees />
      <Footer />
    </div>
  )
}

export default App
