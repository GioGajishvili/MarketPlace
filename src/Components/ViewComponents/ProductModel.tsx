import "./GridView.css";
import { BsCheckCircleFill } from "react-icons/bs";
import { BsFillStarFill } from "react-icons/bs";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import { Box } from "@mui/material";

const ProductModel = (props: any) => {
  const threeDots = "...";
  const {
    id,
    inStock,
    stockColor,
    stockIndicator,
    photo,
    colorfulStarCount,
    reviewCount,
    description,
    specialPrice,
    discountedPrice,
  } = props;

  return (
    <Box component={"div"} className="grid-view-product">
      <Box component={"div"} className="stock-indicator">
        <BsCheckCircleFill color={inStock ? "green" : "#cf1b2d"} />
        <Box
          component={"p"}
          style={{
            margin: "0px 0px 0px 10px",
            color: inStock ? "green" : "#cf1b2d",
          }}
        >
          {stockIndicator}
        </Box>
      </Box>
      <Box
        component={"div"}
        style={{
          display: "flex",
          flexDirection: "column",
          position: "relative",
        }}
      >
        <Box component={"img"} className="product-photo" src={photo} />
        <Box
          component={"button"}
          className="product-arrow-icons"
          style={{ position: "absolute", margin: "60px 0px 0px 20px" }}
        >
          <MdArrowBackIosNew />
        </Box>
        <Box
          component={"button"}
          className="product-arrow-icons"
          style={{ position: "absolute", margin: "60px 0px 0px 210px" }}
        >
          <MdArrowForwardIos />
        </Box>
      </Box>
      <Box component={"div"} className="review-stars">
        <BsFillStarFill
          color={id && colorfulStarCount > 0 ? "orange" : "gray"}
          size="18"
          style={{ margin: "0px 1px 0px 1px" }}
        />
        <BsFillStarFill
          color={id && colorfulStarCount > 1 ? "orange" : "gray"}
          size="18"
          style={{ margin: "0px 1px 0px 1px" }}
        />
        <BsFillStarFill
          color={id && colorfulStarCount > 2 ? "orange" : "gray"}
          size="18"
          style={{ margin: "0px 1px 0px 1px" }}
        />
        <BsFillStarFill
          color={id && colorfulStarCount > 3 ? "orange" : "gray"}
          size="18"
          style={{ margin: "0px 1px 0px 1px" }}
        />
        <BsFillStarFill
          color={id && colorfulStarCount > 4 ? "orange" : "gray"}
          size="18"
          style={{ margin: "0px 1px 0px 1px" }}
        />
        <Box
          component={"p"}
          style={{ margin: "0px 0px 2px 12px", color: "grey" }}
        >
          {reviewCount}
        </Box>
      </Box>
      <Box component={"p"} className="product-describe">
        {description.length < 25
          ? description
          : description.substring(0, 25) + threeDots}
      </Box>
      <Box component={"div"} className="prices-container">
        <Box component={"p"} className="special-price">
          {specialPrice}
        </Box>
        <Box
          component={"p"}
          style={{ marginLeft: "40px" }}
          className="discounted-price"
        >
          {discountedPrice}
        </Box>
      </Box>
    </Box>
  );
};

export default ProductModel;
