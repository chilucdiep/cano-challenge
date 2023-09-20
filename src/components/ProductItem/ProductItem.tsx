import Product from "../../types/ProductType";
import styles from "./ProductItem.module.css";

interface ProductItemProps {
  product: Product;
}

export function ProductItem({ product }: ProductItemProps) {
  const { name, environmentalImpact } = product;

  return (
    <li className={styles.ProductItem}>
      <h2>{name}</h2>
      <p>{environmentalImpact}/5</p>
    </li>
  );
}
