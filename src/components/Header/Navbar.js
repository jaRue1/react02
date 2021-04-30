import React from "react"
import { NavLink } from "react-router-dom"

// passing props isLoggedIn from Header index.js
function NavBar({ isLoggedIn, setIsLoggedIn }) {
  return(
  <nav>
    <NavLink exact to='/'>Home</NavLink>
    <NavLink exact to='/coffee'>Coffee</NavLink>
    <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
      {isLoggedIn ? 'Login' : 'Logout'}
    </button>
  </nav>
  )
}

export default NavBar
