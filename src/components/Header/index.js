import React from 'react'
import Navbar from './Navbar' // importing component
//passing in props isLoggedIn from App.js 
function Header({ isLoggedIn, setIsLoggedIn }){
  return(
  <>
  <Navbar 
  // passing in props to Navbar component
  isLoggedIn={ isLoggedIn }
  setIsLoggedIn={ setIsLoggedIn }
  />
  {/* This is an example of conditional rendering */}
   <h1>Welcome{isLoggedIn ? ' Back' : ' Guest' }</h1>
  </>
   )
}
export default Header