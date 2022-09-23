import React from "react";
import './App.css';
import ReactDOM from "react-dom";
// import Analysis from "./components/Analysis";
// import Ratings from "./components/Ratings";
// import Reviews from "./components/Reviews";
// import Sidebar from "./components/Sidebar";
// import Visitors from "./components/Visitors";
import Dashboard from "./components/Dashboard";

 function App() {
 return (

  <div>
    <Dashboard /> 
  </div>
 );
}

 const rootElement = document.getElementById("root");
 ReactDOM.render(<App />, rootElement);
 
 export default App;