import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
// import { Route, Routes, BrowserRouter, useParams } from "react-router-dom";

function App() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    axios
      .get("https://6329f6dc713d41bc8e67f6f0.mockapi.io/cars")
      .then((res) => setCars(res.data));
  }, []);

  console.log(cars);
  return <div className="App"></div>;
}

export default App;
