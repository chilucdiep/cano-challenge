import { useState } from "react";
import productsData from "../../mockData/products";
import { FilterButton } from "../FilterButton";
import { ProductItem } from "../ProductItem";
import { SearchBar } from "../SearchBar";
import styles from "./ProductsList.module.css";
import Product from "../../types/ProductType";

export function ProductsList() {
  const [products] = useState<Product[]>(productsData);
  const [sortBy, setSortBy] = useState<"ascending" | "descending">("ascending");
  const [searchTerm, setSearchTerm] = useState<string>("");

  const sortedAndFilteredProducts = [...products]
    .sort((a, b) => {
      return sortBy === "ascending"
        ? a.environmentalImpact - b.environmentalImpact
        : b.environmentalImpact - a.environmentalImpact;
    })
    .filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

  const functionalityBarMarkup = (
    <nav className={styles.functionalityBar}>
      <SearchBar
        searchTerm={searchTerm}
        onSearchTermChange={handleSearchTermChange}
      />
      <FilterButton sortBy={sortBy} onSortChange={handleSortChange} />
    </nav>
  );

  const productsListMarkup = products.length ? (
    sortedAndFilteredProducts.map((product) => (
      <ProductItem key={product.id} product={product} />
    ))
  ) : (
    <div>No Products Available</div>
  );

  return (
    <section>
      {functionalityBarMarkup}
      <ul className={styles.ProductsGrid}>{productsListMarkup}</ul>
    </section>
  );

  function handleSortChange(): void {
    setSortBy(sortBy === "ascending" ? "descending" : "ascending");
  }

  function handleSearchTermChange(term: string): void {
    setSearchTerm(term);
  }
}
