import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// ReactDOM.render(
//  React.createElement("h1",{style:{color:"blue"}},"Hello!"),
//   document.getElementById('root')
// );

// ReactDOM.render(
// <ul>
//   <li>Green Tea</li>
//   <li>Black Tea</li>
//   <li>Milk Tea</li>
//   <li>Lomon Tea</li>
// </ul>
//  );

// JSX
//  let city={
//    name:"Kathmandu",
//    country:"Nepal"
//  };

//  ReactDOM.render(
//    <h1 id="heading" className="cool-text">
//      {city.name} is in {city.country}
//    </h1>,
//    document.getElementById("root")

//  );


// Componets 

function Hello(){ //Should be always capital
  return(
    <div>
      <h1>Welcome to React !</h1>
      <p>Let's build something cool.</p>
    </div>
  );

}

ReactDOM.render(
  <Hello/>,
  document.getElementById("root")
);
 
//  Use babaljs to see the componets