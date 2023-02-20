import "./Header.css";
import { CiShoppingCart, CiUser } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";
import { FaFacebookSquare } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import SearchBar from "./SearchBar";
import { Box, Typography, TypographyProps } from "@mui/material";
import { CSSProperties, styled } from "@mui/styles";

const HeaderTypography = styled((props: any) => (
  <Typography
    variant="body1"
    {...props}
    sx={{
      fontFamily: "Jura",
      fontSize: "12px",
      marginTop: "4px",
      marginLeft: "14%",
      color: "white",
      fontStyle: "normal",
      fontWeight: 600,
      lineHeight: "18px",
    }}
  />
))(({ theme }) => ({}));

function Header() {
  const navigate = useNavigate();
  return (
    <Box style={{ zIndex: 100 }} className="header">
      <Box className="black-line">
        <Box className="info-container">
          <HeaderTypography>
            Mon-Fri :{" "}
            <Box
              component={"mark"}
              sx={{ backgroundColor: "transparent", color: "grey" }}
            >
              9:00 AM - 5:30 PM
            </Box>
          </HeaderTypography>
          <HeaderTypography>
            Visit our showroom in Tbilisi, Chavchavadze N36, Contact Us
          </HeaderTypography>
          <HeaderTypography>Call Us: (995) 551 37 07 37 </HeaderTypography>
          <Box
            style={{
              marginRight: "265px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              paddingLeft: "20px",
            }}
          >
            <Box
              component={"a"}
              href="https://www.facebook.com"
              target="_blank"
            >
              <FaFacebookSquare color="white" className="facebook-logo" />
            </Box>
            <Box
              component={"a"}
              href="https://www.instagram.com"
              target="_blank"
            >
              <FiInstagram color="white" className="instagram-logo" />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className="routing-container">
        <Box
          className="main-header"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            component={"img"}
            className="logo-for-header"
            src="./assets/images/LogoForHeader.png"
          />
          <Link to="/" className="header-filters" id="first-filter">
            Home
          </Link>
          <Link to="/AboutUs" className="header-filters">
            About Us
          </Link>
          <Link to="/Laptops" className="header-filters">
            Laptops
          </Link>
          <Link to="/DesktopPcs" className="header-filters">
            Desktop PCs
          </Link>
          <Link to="/NetworkingDevices" className="header-filters">
            Networking Devices
          </Link>
          <Link to="/PCParts" className="header-filters">
            PC Parts
          </Link>
          <SearchBar />
          <CiShoppingCart className="cart-icon cart-icon-global" />
          <Box
            component={"button"}
            style={{
              border: "none",
              width: "fit-content",
              borderRadius: "50px",
              backgroundColor: "transparent",
            }}
            onClick={() => navigate("/Auth")}
          >
            <CiUser className="user-icon" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Header;
