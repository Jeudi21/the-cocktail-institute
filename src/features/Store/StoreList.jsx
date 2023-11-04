import StoreProduct from "./StoreProduct";

function StoreList({ products }) {
  return (
    <div className="store-products-container">
      {products.map((product) => (
        <StoreProduct product={product} key={product.id} />
      ))}
    </div>
  );
}

export default StoreList;
