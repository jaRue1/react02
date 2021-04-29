import React from 'react'
import Navbar from './Navbar' // importing component
//passing in props isLoggedIn from App.js 
function Header({ isLoggedIn, setIsLoggedIn }){
  return(
  <>
  <Navbar 
  isLoggedIn={ isLoggedIn }
  setIsLoggedIn={ setIsLoggedIn }
  />
   <h1>Welcome{isLoggedIn ? ' Back' : ' Guest' }</h1>
  </>
   )
}
export default Header