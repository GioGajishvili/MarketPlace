import "./GridView.css";
import { testProductArray } from "./TestProductArray";
import ProductModel from "./ProductModel";
import { useState } from "react";
import { Box } from "@mui/material";
import FilterCompononet from "../FilterComponent/Filter";

const GridViewComponent = () => {
  const [product, setProduct] = useState(testProductArray);

  return (
    <Box
      sx={{ display: "flex", flexDirection: "row", justifyContent: "center" }}
    >
      <Box>
        <FilterCompononet />
      </Box>
      <Box component={"div"} className="container-grid-view">
        {product.map((item) => (
          <ProductModel
            key={item.id}
            id={item.id}
            inStock={item.inStock}
            stockColor={item.stockColor}
            stockIndicator={item.stockIndicator}
            photos={item.photos}
            colorfulStarsCount={item.colorfulStarsCount}
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
