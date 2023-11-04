import { useState } from "react";
import StoreList from "./StoreList";

const products = [
  {
    id: 1,
    name: "Spoon",
    price: 20,
    discount: 0,
    stock: true,
    img: "img/store/spoon.jpg",
    category: "spoon",
  },

  {
    id: 2,
    name: "Jigger",
    price: 20,
    discount: 0,
    stock: true,
    img: "img/store/jigger.jpg",
    category: "jigger",
  },
  {
    id: 3,
    name: "Strainer",
    price: 20,
    discount: 0,
    stock: true,
    img: "img/store/strainer.jpg",
    category: "strainer",
  },
  {
    id: 4,
    name: "Strainer",
    price: 20,
    discount: 0,
    stock: true,
    img: "img/store/strainer2.png",
    category: "strainer",
  },
  {
    id: 5,
    name: "Shaker",
    price: 20,
    discount: 0,
    stock: true,
    img: "img/store/shaker.jpg",
    category: "shaker",
  },
];
function StoreMain() {
  const [filteredProducts, setFilteredProducts] = useState(products);

  function getNumProduct(products, category) {
    if (category === "all") return products.length;
    return products.filter((product) => product.category === category).length;
  }

  function filterProducts(products, category) {
    if (category === "all") setFilteredProducts(products);
    else
      setFilteredProducts(
        products.filter((product) => product.category === category)
      );
  }

  return (
    <main className="store-main">
      <div className="container store-container">
        <div className="store-side-bar">
          <span
            className="store-side-bar-filter"
            onClick={() => filterProducts(products, "all")}
          >
            {`All (${getNumProduct(products, "all")})`}
          </span>
          <span
            className="store-side-bar-filter"
            onClick={() => filterProducts(products, "shaker")}
          >
            {`Shaker (${getNumProduct(products, "shaker")})`}
          </span>
          <span
            className="store-side-bar-filter"
            onClick={() => filterProducts(products, "spoon")}
          >
            {`Bar spoon (${getNumProduct(products, "spoon")})`}
          </span>
          <span
            className="store-side-bar-filter"
            onClick={() => filterProducts(products, "strainer")}
          >{`Strainer (${getNumProduct(products, "strainer")})`}</span>
          <span
            className="store-side-bar-filter"
            onClick={() => filterProducts(products, "jigger")}
          >{`Jigger (${getNumProduct(products, "jigger")})`}</span>
        </div>
        <StoreList products={filteredProducts} />
      </div>
    </main>
  );
}

export default StoreMain;
