import React from 'react'
//Functional Component
// function Coffees(){
//   return (
//   <section>
//     Functional Component Coffees
//   </section>
//   )
// }
// Class Component
class Coffees extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      data: [],
    }
  }
  componentDidMount(){
    console.log("This loaded painfully")
    fetch('https://api.sampleapis.com/coffee/hot')
    .then(response => console.log(response.json()))
    .catch()
  }
  render() {
    return (
    <> 
      <ul className="allCoffees">
        <li>
          <h3>Expresso</h3>
          <span>Description</span>
        </li>
        <li>
          <h3>Mocha</h3>
          <span>Description</span>
        </li>
        <li>
          <h3>Cafe</h3>
          <span>Description</span>
        </li>
      </ul>
    </>
    )
  }
}


export default Coffees