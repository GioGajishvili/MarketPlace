import "./cart.css";
import { useEffect, useRef, useState } from "react";
import { Box } from "@mui/material";
import CartModel from "./CartModel";

const GridViewComponent = () => {
  const [product, setProduct] = useState<any[]>([]);

  const removeFromCartClickHandler = (id: string) => {
    localStorage.setItem("cartItems", JSON.stringify(product.filter((itm) => itm?.id !== id)));
    setProduct(product.filter((itm) => itm?.id !== id));
    window.dispatchEvent(new Event("storage"));
  };
  const ref = useRef<any>();
  useEffect(() => {
    ref.current?.scrollIntoView(0, 0);
  }, []);

  useEffect(() => {
    const itemList = localStorage.getItem("cartItems");
    if (itemList) {
      setProduct(JSON.parse(itemList));
    }
  }, [localStorage.getItem("cartItems")]);

  return (
    <Box ref={ref} sx={{ display: "flex", flexDirection: "row", justifyContent: "center", padding: "150px", flexWrap: "wrap" }}>
      {product.map((item) => (
        <CartModel
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
          removeFromCartClickHandler={removeFromCartClickHandler}
        />
      ))}
    </Box>
  );
};

export default GridViewComponent;
