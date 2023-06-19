import "./Header.css";
import { CiUser } from "react-icons/ci";
import { RiShoppingCartLine } from "react-icons/ri";
import { BsHeart } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { FaFacebookSquare } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import SearchBar from "./SearchBar";
import { Box, IconButton, Typography, TypographyProps } from "@mui/material";
import { CSSProperties, styled } from "@mui/styles";

const HeaderTypography = styled((props: any) => (
  <Typography
    variant="body1"
    {...props}
    sx={{
      fontFamily: "Jura",
      fontSize: "12px",
      marginTop: "4px",
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
      <Box
        className="black-line"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "280px",
        }}
      >
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
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <HeaderTypography>Call Us: (995) 551 37 07 37 </HeaderTypography>
          <Box
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              paddingLeft: "20px",
            }}
          >
            <Box
              sx={{ width: "20px", marginTop: "10px" }}
              component={"a"}
              href="https://www.facebook.com"
              target="_blank"
            >
              <FaFacebookSquare color="white" className="facebook-logo" />
            </Box>

            <Box
              sx={{ width: "20px", marginTop: "10px" }}
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
            gap: "100px",
          }}
        >
          <Box>
            <Box
              component={"img"}
              className="logo-for-header"
              src="./assets/images/LogoForHeader.png"
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex",
              alignItems: "center",
              gap: "32px",
            }}
          >
            <Link
              to="/"
              className="header-filters"
              style={{ marginLeft: "30px" }}
            >
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
            <Link style={{paddingRight: "200px"}} to="/PCParts" className="header-filters">
              PC Parts
            </Link>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "6px",
            }}
          >
            {/* <SearchBar /> */}
            <IconButton
              size="small"
              style={{
                outline: "none",
              }}
              onClick={() => navigate("/Auth")}
            >
              <CiUser className="user-icon" />
            </IconButton>
            <IconButton
              style={{
                outline: "none",
              }}
              onClick={() => navigate("/Favorites")}
            >
              <BsHeart />
            </IconButton>
            <IconButton
              style={{
                outline: "none",
              }}
              onClick={() => navigate("/Cart")}
            >
              <RiShoppingCartLine />
            </IconButton>

            
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Header;
