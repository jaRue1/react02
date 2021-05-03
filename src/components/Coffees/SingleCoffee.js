import React from "react"
import { Link } from "react-router-dom"
function SingleCoffee({  passedCoffee , type }) {
  if(!passedCoffee.title){
    return null;
  }

  const slug = passedCoffee.title.toLowerCase().replace(' ', "-")
  return (
    <>
    <p>
    <Link to= {`/coffee/${type}/${passedCoffee.id}`}>{passedCoffee.title}</Link>
    </p>
    </>
  )
}

export default SingleCoffee
