import React from 'react';
import BigFormik from "./components/BigFormik";
import CompFormik from "./components/CompFormik";
import {MaterialFormik} from "./components/MaterialFormik";


function App() {
  return (
    <div className="App">
        <BigFormik />

        <CompFormik />

        <MaterialFormik />
    </div>
  );
}

export default App;
