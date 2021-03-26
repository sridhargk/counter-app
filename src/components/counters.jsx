import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  // moved all state and related properties to the parent which is App.js

  renderCounters() {
    // [Clean] instead of using this.props everywhere
    // get required properties in the object from this.props as below,
    const { counters, onReset, onDelete, onIncrement } = this.props;
    // [Clean] instead of this.props.counters, we can directly call it with its name
    if (counters.length === 0) return <p>There are no items!</p>;

    return (
      <>
        <button onClick={onReset} className="btn btn-sm btn-primary m-2">
          Reset
        </button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={onDelete}
            onIncrement={onIncrement}
          >
            {/* <h4>Counter #{counter.id}</h4> ---> Method of passing the dynamic HTML Elements via props*/}
          </Counter>
        ))}
      </>
    );
  }

  render() {
    // this function props can also be implemented with the clean code way
    // but here we have only one reference. so, don't need it
    return (
      <>
        {this.props.counters.length === 0 && <p>Please add an item!</p>}
        {this.renderCounters()}
      </>
    );
  }
}

export default Counters;
