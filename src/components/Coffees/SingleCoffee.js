import React from "react"
import { Link } from "react-router-dom"
function SingleCoffee({  passedCoffee }) {
  if(!passedCoffee.title){
    return null;
  }
  const slug = passedCoffee.title.toLowerCase().replace(' ', "-")
  return (
    <>
    <p>
    <Link to= {`/coffees/${slug}`}>{passedCoffee.title}</Link>
    </p>
    </>
  )
}

export default SingleCoffee
