import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import './App.css'
import './assets/css/Navbar.css'
import "./assets/css/Carousel.css";
import './assets/css/Form.css'
import './assets/css/Gamebar.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Register from "./components/Register";
import Login from "./components/Login";
import User from "./components/User";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/user" element={<User />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
