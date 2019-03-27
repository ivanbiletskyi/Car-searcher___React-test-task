import React, { Component } from "react";
import "./App.css";
import CarNumberInput from "./CarNumberInput";
import CarInfo from "./CarInfo";

class App extends Component {
    render() {
        return (
            <div className="app">
                <CarNumberInput />
                <CarInfo />
            </div>
        );
    }
}

export default App;
