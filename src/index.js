import React, { useState } from 'react';
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

// function Hello({library,message,number})
// {

//   return(
//     <div>
//       <h1>Welcome to {library} World !</h1>
//       <p>{message}</p>
//       <p>{number} Total props</p>
//     </div>
//   );
// }

// ReactDOM.render(
//   <Hello
//   library="React"
//   message="Have Fun !"
//   number={3}
//   />,
//   document.getElementById("root")
// );


// Composing Compoents


// function Lake({name})
// {
//   return <h1>{name}</h1>;
// }
// function App(){
//   return(
//     <div>
//       <Lake name="Tilicho Lake"/>
//       <Lake name="Fewa Lake"/>
//       <Lake name="Rara Lake"/>
//     </div>
//   );
// }

// ReactDOM.render
//   (
//   <App/>,
//   document.getElementById("root")
//   );



// Rendering Lists

// const lakeList=[
//   "Rara Lake",
//   "Fewa Lake",
//   "Tilicho Lake"
// ];

// function App(props)
// {
//   return (
//    <ul>
//      {props.lakes.map(lake=> (

//      <li>{lake}</li>
//       )) }
//    </ul>

//  );
// }

// ReactDOM.render
// (
//   <App lakes={lakeList}/>,

//   document.getElementById("root")
// );


// Destructuring the above code 

// const lakeList=[
//   "Rara Lake",
//   "Fewa Lake",
//   "Tilicho Lake"
// ];

// function App({lakes})
// {
//   return (
//    <ul>
//      {lakes.map(lake=> (

//      <li>{lake}</li>
//       )) }
//    </ul>

//  );
// }

// ReactDOM.render
// (
//   <App lakes={lakeList}/>,

//   document.getElementById("root")
// );



// Rendering the list of objects 


// const lakeList=[
//   {id:"1",name:"Rara Lake", place:"Mugu"},
//   {id:"2",name:"Phewa Lake",place:"Pokhara"},
//   {id:"3", name:"Tilicho Lake", place:"Manang"}
// ];

// function App({lakes})
// {
//   return(
//     <div>
//       {lakes.map(lake=>(
//         <div>

//           <h2>{lake.id} - {lake.name}</h2>
//           <p>Location :{lake.place}</p>

//           </div>
//       ))}
//     </div>
//   )
// }


// ReactDOM.render(
//   <App lakes={lakeList}/>,
//   document.getElementById("root")
// )


// Error in console

// Warning: Each child in a list should have a unique "key" prop.



// Adding keys

// const lakeList = [
//   { id: "1", name: "Rara Lake", place: "Mugu" },
//   { id: "2", name: "Phewa Lake", place: "Pokhara" },
//   { id: "3", name: "Tilicho Lake", place: "Manang" }
// ];

// function App({ lakes }) {
//   return (
//     <div>
//       {lakes.map(lake => (
//         <div key={lake.id}>

//           <h2>{lake.id} - {lake.name}</h2>
//           <p>Location :{lake.place}</p>

//         </div>
//       ))}
//     </div>
//   );
// }



// ReactDOM.render(
//   <App lakes={lakeList} />,
//   document.getElementById("root")
// )


// https://reactjs.org/docs/lists-and-keys.html#keys


// const list=[1,2,3,4,5];

// function App({items})
// {
//   return (
//     <ul>
//       {
//         items.map(itemkey =>(
//           <li key={itemkey.toString()}>{itemkey}</li>
//         ))
//       }
//     </ul>
//   )
// }


// ReactDOM.render(
//   <App items={list} />,
//   document.getElementById("root")
// )


// Conditional Rendering 


// function Budi()
// {
//   return(
//     <div>
//       <h1>Message me Today !</h1>
//     </div>
//   );
// }

// function OffendedBudi()
// {
//   return(
//     <div>
//       <h1>Message me Tuesday !</h1>
//     </div>
//   );
// }

// function App(props)
// {
//   if(props.love==="yes")
//   {
//     return <Budi />;
//   }
//   else if(props.love==="no")
//   {
//     return <OffendedBudi/>;
//   }
// }


// ReactDOM.render(
//   <App love="no"/>,
//   document.getElementById("root")
// );


// Conditional Rendering


// function Budi({day})
// {
//   return(
//     <div>
//       <h1>Message me {day} !</h1>
//     </div>
//   );
// }

// function OffendedBudi({day})
// {
//   return(
//     <div>
//       <h1>Message me {day} !</h1>
//     </div>
//   );
// }

// function App(props)
// {
//   if(props.love==="yes")
//   {
//     return <Budi day="Today" />;
//   }
//   else if(props.love==="no")
//   {
//     return <OffendedBudi day="Tuesday" />;
//   }
// }


// ReactDOM.render(
//   <App love="no"/>,
//   document.getElementById("root")
// );


// React Fragments

// function Budi() {
//   return <h1>She is on fire Today !</h1>;
// }

// function OffendedBudi() {
//   return <h1> She posted story in Instagram .!</h1>
// }

// ReactDOM.render(

//   // This tag <> is known as fragment tag
//   <>
//     <Budi /> <OffendedBudi />
//   </>,
//   document.getElementById("root")
// );

// Array destructuring

// const [first,sec,third]=[
//   "MoMo",
//   "Pizza",
//   "Burger"
// ];

// console.log(first);
// console.log(sec);
// console.log(third);


// Also

// const [, ,third]=[
//   "MoMo",
//   "Pizza",
//   "Burger"
// ];

// console.log(third);

// Using Use State

function Budi() {
  const [status, setStatus] = useState("Meri Pyari Saani");
  return (
    <div>
      <h1>Meri Budi  :{status}</h1>

    <button onClick={()=>setStatus("Loves me alot .")}>
      Good Thing
    </button>

      <button onClick={() => setStatus("Her Anger .")} >
        Bad Thing
  </button>

  <button onClick={() =>setStatus("She cares me .")}>
    Best Thing
  </button>

    </div>
  );
}

ReactDOM.render(
  <Budi />,
  document.getElementById("root")
);