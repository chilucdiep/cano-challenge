import { ProductsList } from "./components/ProductsList";
import styles from "./App.module.css";

export default function App() {
  return (
    <div className={styles.Container}>
      <h1 className={styles.Title}>Product List</h1>
      <ProductsList />
    </div>
  );
}
