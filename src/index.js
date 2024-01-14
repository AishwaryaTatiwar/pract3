import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// import Greet from './Greet';
//   const root = ReactDOM.createRoot(document.getElementById('root'));
//   root.render( <Greet/> );
// function Hello() {
//   return <h1>This is Hello Component</h1>
//   }
// function Greet() {
//   return (
//     <>
//     <h1>Good Morning, This is Functional Component</h1>
//     <Hello/>
//   </>
//   )
//   }

  // root.render( Greet() );
  
 

  


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
