import "./App.css";

import React, { Component } from "react";
import NavBar from "./components/NavBar";
import Login from "./components/Login";
import NewReg from "./components/NewReg";
import HosSel from "./components/HosSel";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
export default class App extends Component {
  render() {
    return (
      <>
        <Router>
          <NavBar />
          <Routes>
            <Route exact path="/newReg" element={<NewReg />}></Route>
            <Route exact path="/login" element={<Login />}></Route>
            <Route exact path="/hosSel" element={<HosSel />}></Route>
          </Routes>
        </Router>

        {/* <Login /> */}
        {/* <NewReg /> */}
      </>
    );
  }
}

// function App() {
//   return <>

//   </>;
// }

// export default App;
