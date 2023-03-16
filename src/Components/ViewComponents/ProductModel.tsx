import "./GridView.css";
import { BsCheckCircleFill } from "react-icons/bs";
import { BsFillStarFill } from "react-icons/bs";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import { Box, IconButton, Rating } from "@mui/material";
import { useEffect, useState } from "react";
import { NextPlan } from "@mui/icons-material";
import { useAutoAnimate } from "@formkit/auto-animate/react";

const ProductModel = (props: any) => {
  const threeDots = "...";
  const {
    id,
    inStock,
    stockColor,
    stockIndicator,
    photo,
    colorfulStarsCount,
    reviewCount,
    description,
    specialPrice,
    discountedPrice,
  } = props;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [images, setImages] = useState(photo);
  const [isUpdated, setIsUpdated] = useState(false);

  useEffect(() => {
    if (isUpdated) {
      setTimeout(() => {
        setIsUpdated(false);
      }, 500);
    }
  }, [isUpdated]);

  const prevPhoto = () => {
    setTimeout(() => {
      setCurrentIndex((currentIndex + photo.length - 1) % photo.length);
    }, 500);

    setIsUpdated(true);
  };

  const nextPhoto = () => {
    setTimeout(() => {
      setCurrentIndex((currentIndex + 1) % photo.length);
    }, 500);
    setIsUpdated(true);
  };

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
        <Box
          component="img"
          className={`product-photo ${isUpdated ? "updated" : ""}`}
          src={images[currentIndex]}
        />
        <IconButton
          onClick={prevPhoto}
          component={"button"}
          className="product-arrow-icons"
          style={{
            position: "absolute",
            margin: "60px 0px 0px 20px",
            outline: "none",
          }}
        >
          <MdArrowBackIosNew size={20} />
        </IconButton>
        <IconButton
          onClick={nextPhoto}
          component={"button"}
          className="product-arrow-icons"
          style={{
            position: "absolute",
            margin: "60px 0px 0px 210px",
            outline: "none",
          }}
        >
          <MdArrowForwardIos size={20} />
        </IconButton>
      </Box>
      <Box component={"div"} className="review-stars">
        <Rating
          precision={0.5}
          name="read-only"
          value={colorfulStarsCount}
          readOnly
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
      {specialPrice ? (
        <Box component={"div"} className="prices-container">
          <Box
            component={"p"}
            className="special-price"
            style={{ marginBottom: "10px" }}
          >
            {specialPrice}
          </Box>
          <Box
            component={"p"}
            style={{ marginLeft: "40px", marginBottom: "10px" }}
            className="discounted-price"
          >
            {discountedPrice}
          </Box>
        </Box>
      ) : (
        <Box
          component={"p"}
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "10px",
          }}
          className="discounted-price"
        >
          {discountedPrice}
        </Box>
      )}
    </Box>
  );
};

export default ProductModel;
