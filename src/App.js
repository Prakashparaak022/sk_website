import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import "./App.css";
import "./assets/css/Navbar.css";
import "./assets/css/Carousel.css";
import "./assets/css/Form.css";
import "./assets/css/Gamebar.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Register from "./components/pages/Register";
import Login from "./components/pages/Login";
import User from "./components/pages/User";
import { DataProvider } from "./components/context/DataContext";
import { CssBaseline } from "@mui/material";

function App() {
  return (
    <DataProvider>
        <CssBaseline /> 
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/user" element={<User />}></Route>
        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
