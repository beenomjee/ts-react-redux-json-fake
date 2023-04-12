import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Product as ProductType, State, getProducts } from "../../store";

const Product: FC = () => {
  const dispatch = useDispatch();
  const products = useSelector((state: State) => state.products.products);
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
        gap: "20px",
      }}
    >
      {products.length === 0 ? (
        <p>Loading...</p>
      ) : (
        products.map((product: ProductType) => (
          <div key={product.id} style={{ maxWidth: "300px" }}>
            <img
              src={product.image}
              alt={product.title}
              style={{ width: "100%" }}
            />
            <br />
            <strong>{product.title}</strong>
            <br />
            <span>{product.price}</span>
          </div>
        ))
      )}
    </div>
  );
};

export default Product;
