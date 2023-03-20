import { useState } from "react";
import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Auth from "./Pages/Auth/Auth";
import HomePage from "./Pages/HomePage/HomePage";
import Laptops from "./Pages/Laptops/Laptops";
import DesktopPCs from "./Pages/DesktopPCs/DesktopPcs";
import NetworkingDevices from "./Pages/NetworkingDevices/NetworkingDevices";
import PCParts from "./Pages/PCParts/PCParts";
import ProductDetailes from "./Pages/ProductDetailes/ProductDetailes";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Box className={"App"}>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Laptops" element={<Laptops />} />
          <Route path="/DesktopPCs" element={<DesktopPCs />} />
          <Route path="/NetworkingDevices" element={<NetworkingDevices />} />
          <Route path="/PCParts" element={<PCParts />} />
          <Route path="Auth" element={<Auth />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/ProductDetailes" element={<ProductDetailes />} />
        </Routes>
        <Footer />
      </Box>
    </BrowserRouter>
  );
}

export default App;
