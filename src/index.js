// import React, {component} from 'react'
import Baseclass from './home'

// import ReactDOM from "react-dom";


// const wrapper = document.getElementById("home");
//   ReactDOM.render(<baseclass />, wrapper) ;

// console.log("hello");

import React from "react";
import ReactDOM from "react-dom";





const Index = () => {
  return <div>Hello React!</div>;
};

ReactDOM.render(<Baseclass />, document.getElementById("home"));

if ('serviceWorker' in navigator) {

  window.addEventListener('load', () => {

    navigator.serviceWorker.register('/service-worker.js').then(registration => {

      console.log('SW registered: ', registration);

    }).catch(registrationError => {

      console.log('SW registration failed: ', registrationError);

    });

  });

}