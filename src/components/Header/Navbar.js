import React from 'react'
// passing props isLoggedIn from Header index.js 
function NavBar({ isLoggedIn, setIsLoggedIn }){
  if (!isLoggedIn) {
    return <button onClick ={() => setIsLoggedIn(true)}>Login</button>
  }
  return <button onClick ={() => setIsLoggedIn(false)}>Logout</button>
}

export default NavBar