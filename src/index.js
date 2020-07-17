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

//  Use babaljs to see the componets

// Componets 

// function Hello(){ //Should be always capital
//   return(
//     <div>
//       <h1>Welcome to React !</h1>
//       <p>Let's build something cool.</p>
//     </div>
//   );

// }

// ReactDOM.render(
//   <Hello/>,
//   document.getElementById("root")
// );
 

// Properties

// function Hello(props)
// {
//   console.log(props)
//   return(
//     <div>
//       <h1>Welcome to {props.library} !</h1>
//       <p>{props.message}</p>
//       <p>{Object.keys(props).length}  Props Total</p>
//     </div>
//   );
// }

//   ReactDOM.render(
//     <Hello library="React.js" 
//     message="Have fun !"
//     number={3}
//     />,
//     document.getElementById("root")
//   );


// Properties in more cleaner way

function Hello({library,message,number})
{
  
  return(
    <div>
      <h1>Welcome to {library} World !</h1>
      <p>{message}</p>
      <p>{number} Total props</p>
    </div>
  );
}

ReactDOM.render(
  <Hello
  library="React"
  message="Have Fun !"
  number={3}
  />,
  document.getElementById("root")
);