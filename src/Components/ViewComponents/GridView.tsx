import "./GridView.css";
import { testProductArray } from "./TestProductArray";
import ProductModel from "./ProductModel";
import { Link } from "react-router-dom";
import { useState } from "react";
import { MdArrowBackIosNew } from "react-icons/md";
import { Box, styled } from "@mui/material";

const GridViewComponent = () => {
  const [product, setProduct] = useState(testProductArray);
  const [toggleCategory, setToggleCategory] = useState(false);
  const [togglePrice, setTogglePrice] = useState(false);

  const toggleButton = () => {
    setToggleCategory(!toggleCategory);
  };

  const FilterButton = styled((props: any) => (
    <Box
      variant="body2"
      {...props}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Jura",
        fontSize: "16px",
        marginTop: "20px",
        fontStyle: "normal",
        fontWeight: 600,
      }}
    />
  ))(({ theme }) => ({}));

  return (
    <Box component={"div"} className="grid-view-filter-container">
      <Box component={"div"} className="leftside-filter">
        <Box>
          <Box component={"h1"} style={{ fontSize: "28px", marginTop: "20px" }}>
            Filters
          </Box>
          <Box
            component={"button"}
            style={{ fontFamily: "jura" }}
            className="clear-filters-button"
          >
            Clear Filters
          </Box>
        </Box>
        <Box component={"div"}>
          <FilterButton
            component={"button"}
            className="filter-category-button"
            onClick={() => toggleButton()}
          >
            Category
            <MdArrowBackIosNew
              style={{ margin: "5px 0px 1px 16" }}
              size="12px"
            />
          </FilterButton>
        </Box>
        {toggleCategory && (
          <Box
            component={"div"}
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: "8px",
            }}
          >
            <Link to={"/"} className="filter-links">
              Desktop Pcs
            </Link>
            <Link to={"/"} className="filter-links">
              Laptops
            </Link>
            <Link to={"/"} className="filter-links">
              Pc Parts
            </Link>
          </Box>
        )}
        <Box component={"div"}>
          <FilterButton
            component={"button"}
            className="filter-price-button"
            onClick={() => setTogglePrice(!togglePrice)}
          >
            Price
            <MdArrowBackIosNew
              style={{ margin: "5px 0px 1px 16" }}
              size="12px"
            />
          </FilterButton>
        </Box>
        {togglePrice && (
          <Box
            component={"div"}
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: "8px",
            }}
          >
            <Link to={"/"} className="filter-links">
              $0.00 - $100
            </Link>
            <Link to={"/"} className="filter-links">
              $100 - $200
            </Link>
            <Link to={"/"} className="filter-links">
              $200 - $400
            </Link>
            <Link to={"/"} className="filter-links">
              $400 - $600
            </Link>
            <Link to={"/"} className="filter-links">
              $600 - $1,000
            </Link>
            <Link to={"/"} className="filter-links">
              $1000 - $1000+
            </Link>
          </Box>
        )}
      </Box>
      <Box component={"div"} className="container-grid-view">
        {product.map((item) => (
          <ProductModel
            key={item.id}
            id={item.id}
            inStock={item.inStock}
            stockColor={item.stockColor}
            stockIndicator={item.stockIndicator}
            photo={item.photo}
            colorfulStarsCount={item.colorfulStarCount}
            reviewCount={item.reviewCount}
            description={item.description}
            specialPrice={item.specialPrice}
            discountedPrice={item.discountedPrice}
          />
        ))}
      </Box>
    </Box>
  );
};

export default GridViewComponent;
