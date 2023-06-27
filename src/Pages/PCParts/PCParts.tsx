import { Box } from "@mui/material";
import "./PCParts.css";
import { useEffect, useRef } from "react";

const PCParts = () => {
  const ref = useRef<any>()
  useEffect(()=> {
    ref.current?.scrollIntoView(0,0)
  },[])
  return (
    <Box ref={ref} component={"div"} className="pc-parts-page">
      <Box component={"p"} className="pc-parts-page">
        PC Parts
      </Box>
    </Box>
  );
};

export default PCParts;
