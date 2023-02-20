import { Box } from "@mui/material";
import GridViewComponent from "../../Components/ViewComponents/GridView";
import "./HomePage.css";

const HomePage = () => {
  return (
    <Box component={"div"} className="home-page">
      <GridViewComponent />
    </Box>
  );
};

export default HomePage;
