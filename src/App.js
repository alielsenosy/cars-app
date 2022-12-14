import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Nav from "./components/Nav";
import LeftSide from "./components/LeftSide";
import Cars from "./components/Cars";
import DashBoard from "./components/DashBoard";

function App() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    axios
      .get("https://6329f6dc713d41bc8e67f6f0.mockapi.io/cars")
      .then((res) => setCars(res.data));
  }, []);

  const [arabicClass, setArabicClass] = useState(false);
  const handleLanguage = () => {
    arabicClass === true ? setArabicClass(false) : setArabicClass(true);
  };

  return (
    <div
      className={`App ${arabicClass ? "arabicContainer" : ""}`}
      style={{ display: "flex" }}
    >
      <BrowserRouter>
        <div className="left" style={{ width: "20%" }}>
          <LeftSide />
        </div>
        <div className="right" style={{ width: "80%" }}>
          <Nav language={handleLanguage} langText={arabicClass} />
          <Routes>
            <Route path="/" element={<Cars cars={cars} />} />
            <Route path="dashboard" element={<DashBoard />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
