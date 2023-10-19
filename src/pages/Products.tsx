import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { Navigate } from "react-router-dom";
import { Product } from "../utils/products";
import ProductCard from "../components/ProductCard";

function ProductsPage() {
  const [data, setData] = useState<Product[]>([]);
  useEffect(() => {
    fetch("../products.json")
      .then((res) => res.json())
      .then((arr) => setData(arr));
  }, []);

  return sessionStorage.getItem("test") ? (
    <>
      <h1 className={styles.title}>Результат</h1>
      <p className={styles.paragraph}>
        Мы подобрали для вас наиболее подходящие средства
      </p>
      <div className={styles.products_wrapper}>
        {data.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </>
  ) : (
    <Navigate to="/" />
  );
}

export default ProductsPage;
