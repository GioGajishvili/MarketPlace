import { useState } from "react";
import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Box, useMediaQuery, useTheme } from "@mui/material";
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
import Favorites from "./Pages/Favorites/Favorites";
import Cart from "./Pages/Cart/Cart";

function App() {
  const [count, setCount] = useState(0);

  const theme = useTheme();

  const breakPoint = theme.breakpoints.down(1400);
  const isResponsive = useMediaQuery(breakPoint);

  return (
    <BrowserRouter>
      <Box className={"App"} style={{ backgroundColor: "white" }}>
        {isResponsive ? (
          <p>NOT READY YET</p>
        ) : (
          <>
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
              <Route path="/Favorites" element={<Favorites />} />
              <Route path="/Cart" element={<Cart />} />
            </Routes>
            <Footer />
          </>
        )}
      </Box>
    </BrowserRouter>
  );
}

export default App;
