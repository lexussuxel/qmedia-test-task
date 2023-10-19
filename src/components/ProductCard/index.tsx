import { FC } from "react";
import { Product } from "../../utils/products";
import styles from './styles.module.css';
import { ReactComponent as Heart } from "./heart.svg"

interface ProductProps {
    product: Product;
}

const ProductCard:FC<ProductProps> = ({product}) =>{
  return (
    <div className={styles.wrapper}>
        <img alt={product.title} className={styles.image_wrapper} src={`${product.image}`}/>
        <Heart className={styles.heart}/>
        <p className={styles.desc}>{product.title}</p>
        <div>
            {product.oldPrice && <span className={styles.prev_price}>{product.oldPrice}</span>}
            <span className={styles.price}>{product.price}</span> <span className={styles.price_text}>руб.</span>
        </div>
    </div>
  );
}

export default ProductCard;
