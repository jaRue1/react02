import React from "react"
function SingleCoffee({ passedItem }) {
  if(!passedItem.title){
    return null;
  }
  return (
    <li>
      <div>
      <h3>{passedItem.title}</h3>
      <p>{passedItem.description}</p>
      </div>
      <img src={`https://loremflickr.com/200/200/coffee?lock=${passedItem.id}`} alt=""/>

    </li>
  )
}

export default SingleCoffee
