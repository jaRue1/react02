import React from "react"
import { Link } from "react-router-dom"
// passing props isLoggedIn from Header index.js
function NavBar({ isLoggedIn, setIsLoggedIn }) {
  return(
  <nav>
    <Link to='/'>Home</Link>
    <Link to='/coffee'>Coffee</Link>
    <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
      {isLoggedIn ? 'Login' : 'Logout'}
    </button>
  </nav>
  )
}

export default NavBar
