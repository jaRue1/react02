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
      coffees: [],
    }
  }
  componentDidMount() {
    console.log("This loaded painfully")
    fetch("https://api.sampleapis.com/coffee/hot") // get the data
      .then((response) => response.json()) // pulls the json out of the response
      .then((dataReceived) => this.setState({ data: dataReceived })) // then set the json data to state
      .catch()
  }
  render() {
    console.log("this is the data ", this.state.coffees)// logs all the json data into the console
    // destructing coffees from state
    const {coffees} = this.state
    return (
      <>
        <ul className="allCoffees">
          {/* logs an individual coffee */}
          {/* {this.state.data.map(item => console.log(item))} */}
          {coffees.map(item => {
            return <SingleCoffee key={item.id} passedItem={item}/>
          })}
        </ul>
      </>
    )
  }
}

export default Coffees
