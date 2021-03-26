// import React, { Component } from "react";

// class NavBar extends Component {
//   render() {
//     return (
//       <nav className="navbar navbar-light bg-light">
//         <a className="navbar-brand" href="/">
//           Counter
//           <span className="badge badge-pill badge-primary m-2">
//             {this.props.totalCounters}
//           </span>
//         </a>
//       </nav>
//     );
//   }
// }

// export default NavBar;

// Example for Stateless Functional Component
// here props will be passed as the functional parameter for runtime
// const NavBar = (props) => { // [CLEAN]destructing the props using required parameters in {propertyName} braces
const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="/">
        Counter
        <span className="badge badge-pill badge-primary m-2">
          {
            totalCounters // [CLEAN]instead of props.propertyName can be called with propertyName directly
          }
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
