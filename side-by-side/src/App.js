import "./App.css";
import { BrowserRouter as Router, Route,  Routes } from "react-router-dom";

import Homepage from "./components/homepage/Homepage";
import Navbar from './components/navbar/Navbar'
import Update from './components/updates/Updates'
import About from "./components/about/About";
import CouponPopup from "./components/coupon/CouponPopup";
import Login from "./components/login/Login";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/update" element={<Update />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/popup" element={<CouponPopup />} />
          <Route exact path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
