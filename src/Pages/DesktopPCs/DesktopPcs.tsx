import { Box } from "@mui/material";
import "./DesktopPcs.css";
import { useEffect, useRef } from "react";

const DesktopPCs = () => {
  const ref = useRef<any>()
  useEffect(()=> {
    ref.current?.scrollIntoView(0,0)
  },[])
  return (
    <Box ref={ref} component={"div"} className="desktop-pcs-page">
      <Box component={"p"} className="desktop-pcs-page">
        Desktop PCs
      </Box>
    </Box>
  );
};

export default DesktopPCs;
