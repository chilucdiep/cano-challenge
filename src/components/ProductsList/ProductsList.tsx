import { memo, useCallback, useMemo, useState } from "react";
import productsData from "../../mockData/products";
import { FilterButton } from "../FilterButton";
import { ProductItem } from "../ProductItem";
import { SearchBar } from "../SearchBar";
import styles from "./ProductsList.module.css";
import Product from "../../types/ProductType";

const FilterButtonMemoed = memo(FilterButton);
const SearchBarMemoed = memo(SearchBar);

let ProductsListRender = 0;

export function ProductsList() {
  console.log(`ProductsListRender ${ProductsListRender++}`);
  const [products] = useState<Product[]>(productsData);
  const [sortBy, setSortBy] = useState<"ascending" | "descending">("ascending");
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleSortChange = useCallback(
    () =>
      setSortBy((prevSortBy) =>
        prevSortBy === "ascending" ? "descending" : "ascending"
      ),
    []
  );

  const handleSearchTermChange = useCallback(
    (term: string) => setSearchTerm(term),
    []
  );

  const sortedProducts = useMemo(
    () =>
      [...products].sort((a, b) => {
        return sortBy === "ascending"
          ? a.environmentalImpact - b.environmentalImpact
          : b.environmentalImpact - a.environmentalImpact;
      }),
    [products, sortBy]
  );

  const filteredProducts = useMemo(
    () =>
      sortedProducts.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    [searchTerm, sortedProducts]
  );

  const functionalityBarMarkup = (
    <nav className={styles.functionalityBar}>
      <SearchBarMemoed
        searchTerm={searchTerm}
        onSearchTermChange={handleSearchTermChange}
      />
      <FilterButtonMemoed sortBy={sortBy} onSortChange={handleSortChange} />
    </nav>
  );

  const productsListMarkup = products.length ? (
    filteredProducts.map((product) => (
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
}
