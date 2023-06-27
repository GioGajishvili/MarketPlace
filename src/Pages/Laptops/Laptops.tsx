import { Box,  } from "@mui/material";
import "./Laptops.css";
import Banner from "../../Components/Banner/Banner";
import { useEffect, useRef } from "react";

const Laptops = () => {
  const ref = useRef<any>()
  useEffect(()=> {
    ref.current?.scrollIntoView(0,0)
  },[])
  return (
    <Box ref={ref} component={"div"} className="laptops-page">
      <Box component={"p"} className="laptops-page">
        <Box style={{width: "1000px"}}>Laptops</Box>
      </Box>
    </Box>
  );
};

export default Laptops;
