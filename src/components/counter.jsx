import React, { Component } from "react";

class Counter extends Component {
  // removed to make the component controlled by main/parent component
  //   state = {
  //     value: this.props.counter.value, // setting value from the parent component using props passed as Component element attribute
  //   };

  //   constructor() {
  //     super();
  //     // bind any method using bind function to use this.state inside it
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //   }

  getSpanClasses() {
    let spanClasses = "badge m-2 badge-";
    spanClasses += this.props.counter.value === 0 ? "warning" : "primary";

    return spanClasses;
  }

  getFormattedCount() {
    return this.props.counter.value === 0 ? "Zero" : this.props.counter.value;
  }

  //   handleIncrement() {
  //     // this will not bind here
  //     // bind with constructor
  //     console.log("Increment Clicked", this);
  //   }

  // handling the below function using the event trigger as prop events
  //   // using arrow function to avoid constructor method binding
  //   // arrow function will automatically bind the values
  //   handleIncrement = () => {
  //     // this.state.count++ / this.state.count = 5 will not update the count
  //     // setState method will update the DOM Element and the state data
  //     this.setState({ value: this.state.value + 1 });
  //   };

  renderSpanAndButton() {
    return (
      <div>
        <span className={this.getSpanClasses()}>
          {this.getFormattedCount()}
        </span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-sm btn-secondary m-2"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  render() {
    return (
      <>
        {/* {this.props.children} ---> Method to display Dynamic HTML Elements via props*/}
        {this.renderSpanAndButton()}
      </>
    );
  }
}

export default Counter;
