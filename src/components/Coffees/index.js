import React from "react"
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
      data: [],
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
    console.log("this is the data ", this.state.data)
    return (
      <>
        <ul className="allCoffees">
          {/* logs an individual coffee */}
          {/* {this.state.data.map(item => console.log(item))} */}
          {this.state.data.map((item) => {
            return(
            <li key={item.id}> 
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </li>
            )
          })}
        </ul>
      </>
    )
  }
}

export default Coffees
