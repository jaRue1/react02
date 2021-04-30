import React from "react"
function SingleCoffee({  passedCoffee }) {
  if(!passedCoffee.title){
    return null;
  }
  return (
    <li>
      <div>
      <h3>{passedCoffee.title}</h3>
      <p>{passedCoffee.description}</p>
      </div>
      <img src={`https://loremflickr.com/300/300/coffee?lock=${passedCoffee.id}`} alt=""/>

    </li>
  )
}

export default SingleCoffee
