import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import "./App.css";

class App extends Component {
  state = {
    counters: [
      {
        id: 1,
        value: 1,
      },
      {
        id: 2,
        value: 0,
      },
      {
        id: 3,
        value: 0,
      },
      {
        id: 4,
        value: 0,
      },
    ],
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters]; // cloning the local state counters
    const index = counters.indexOf(counter); // getting the index of modified counter from the cloned counters
    counters[index] = { ...counter }; // assign the modified/passed counter to indexed in cloned counters
    counters[index].value++; // increment the value
    this.setState({ counters }); // set the state to cloned counters with modified value
  };

  handleDelete = (counterId) => {
    // this function will be triggered from the onDelete trigger props
    // filtering the non deleted counters
    const filteredCounters = this.state.counters.filter(
      (c) => c.id !== counterId
    );
    // replace with the filtered one
    this.setState({ counters: filteredCounters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters }); // no need to redeclare the object key as key and value variable are same
  };

  render() {
    return (
      <>
        <NavBar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        />
        <main className="fluid-container">
          {/** Now Counters will be a controlled component by App Component */}
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
          />
        </main>
      </>
    );
  }
}

export default App;
