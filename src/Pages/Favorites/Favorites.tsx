import "./Favorites.css";
import ProductModel from "./FavoritesModel";
import { useEffect, useRef, useState } from "react";
import { Box } from "@mui/material";

const GridViewComponent = () => {
  const [product, setProduct] = useState<any[]>([]);

  const favoriteClickHandler = (newValue: any, id: string) => {
    if (newValue === 1) {
    } else {
      localStorage.setItem("favItems", JSON.stringify(product.filter((itm) => itm?.id !== id)));
      setProduct(product.filter((itm) => itm?.id !== id));
    }
  };

  const ref = useRef<any>();
  useEffect(() => {
    ref.current?.scrollIntoView(0, 0);
  }, []);

  useEffect(() => {
    const itemList = localStorage.getItem("favItems");
    if (itemList) {
      setProduct(JSON.parse(itemList));
    }
  }, [localStorage.getItem("favItems")]);

  return (
    <Box ref={ref} sx={{ display: "flex", flexDirection: "row", justifyContent: "center", padding: "150px", flexWrap: "wrap" }}>
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
          favoriteClickHandler={favoriteClickHandler}
        />
      ))}
    </Box>
  );
};

export default GridViewComponent;
