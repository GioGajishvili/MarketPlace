import { Box } from "@mui/material";
import "./NetworkingDevices.css";
import { useEffect, useRef } from "react";

const NetworkingDevices = () => {
  const ref = useRef<any>()
  useEffect(()=> {
    ref.current?.scrollIntoView(0,0)
  },[])
  return (
    <Box ref={ref} component={"div"} className="networking-devices-page">
      <Box component={"p"} className="networking-devices-page">
        Networking Devices
      </Box>
    </Box>
  );
};

export default NetworkingDevices;
