import React, { useState, useEffect } from "react"
import { useParams } from "react-router"
function CoffeeDetails() {
  const { type, id } = useParams()
  const [thisCoffee, setThisCoffee] = useState(null)

  useEffect(() => {
    fetch(`https://api.sampleapis.com/coffee/${type}`)
      .then((response) => response.json())
      .then((data) => {
        const oneCoffee = data.find((coffee) => coffee.id == id)
        setThisCoffee(oneCoffee)
      })
      .catch((err) => console.log(err))
  }, [type, id])
  return (
    <>
      {!thisCoffee ? (
        <h2>Loading...</h2>
      ) : (
        <>
          <h2>{thisCoffee.title}</h2>
          <p>{thisCoffee.description}</p>
          <ul>
            {thisCoffee.ingredients.map((ingred, index) => {
              return <li key={index}>{ingred}</li>
            })}
          </ul>
        </>
      )}
    </>
  )
}

export default CoffeeDetails
