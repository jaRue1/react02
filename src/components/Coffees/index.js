import React from "react"
import SingleCoffee from './SingleCoffee'
//Functional Component
// function Coffees(){
//   return (
//   <section>
//     Functional Component Coffees
//   </section>
//   )
// }

// Path of execution
// 1: Runs Constructor data : []
// 2: Runs render() logs an empty array
// 3: Runs ComponentDidMount() and gets data
// 4: Runs render() with updated data

// Class Component
class Coffees extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      coffees: null,
    }
  }
  componentDidMount() {
    console.log("This loaded painfully")
    fetch("https://api.sampleapis.com/coffee/hot") // get the data
      .then((response) => response.json()) // pulls the json out of the response
      .then((dataReceived) => this.setState({ coffees: dataReceived })) // then set the json data to state
      .catch()
  }
  // passing in the parameter type
  handleSubmitClick(type){
    this.setState({coffees : null})
    fetch(`https://api.sampleapis.com/coffee/${type}`) 
      .then((response) => response.json()) 
      .then((dataReceived) => this.setState({ coffees: dataReceived }))
      .catch()
  }
  render() {
    // destructing coffees from state
    const {coffees} = this.state
    console.log("this is the data ", coffees)// logs all the json data into the console
    return (
      <>
        <ul className="allCoffees">
          {/* logs an individual coffee */}
          {/* {this.state.data.map(item => console.log(item))} */}
          {/* Conditional Rendering */}
          <h2>Coffees : </h2>
          {/* ------------------------------------------------------------------------- */}
          <button onClick ={() => this.handleSubmitClick('hot')}>HOT</button>
          <button onClick ={() => this.handleSubmitClick('iced')}>ICED</button>
          { !coffees ? <p>Loading......</p> : coffees.map(coffee => {
            return <SingleCoffee key={coffee.id} passedCoffee={coffee}/>
          })}
        </ul>
      </>
    )
  }
}

export default Coffees
