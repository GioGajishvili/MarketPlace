import { Box,  } from "@mui/material";
import "./Vapes.css";
import { useEffect, useRef } from "react";

const Vapes = () => {
  const ref = useRef<any>()
  useEffect(()=> {
    ref.current?.scrollIntoView(0,0)
  },[])
  return (
    <Box ref={ref} component={"div"} className="vapes-page">
      <Box component={"p"} className="vapes-page">
        <Box style={{width: "1000px"}}>Vapes</Box>
      </Box>
    </Box>
  );
};

export default Vapes;
