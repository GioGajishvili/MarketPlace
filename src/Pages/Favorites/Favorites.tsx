import "./Favorites.css";
import { favoritesProductArray } from "./FavoritesProductArray";
import ProductModel from "./FavoritesModel";
import { useEffect, useState } from "react";
import { Box, Grid } from "@mui/material";

const GridViewComponent = () => {
  const [product, setProduct] = useState<any[]>([]);

  useEffect(() => {
    const itemList = localStorage.getItem("favItems")
    if (itemList) {
      setProduct(JSON.parse(itemList))
    }
  }, [localStorage.getItem("favItems")])

  return (
    <Box
      sx={{ display: "flex", flexDirection: "row", justifyContent: "center", padding: "150px", flexWrap: "wrap" }}
    >
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
  );
};

export default GridViewComponent;
