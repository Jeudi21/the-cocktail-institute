function StoreProduct({ product }) {
  return (
    <div className="store-product">
      <img className="store-product-img" src={product.img} alt={product.name} />
      <span className="store-product-name">{product.name}</span>
      <span className="store-product-price">Price: ${product.price}</span>
      <button className="btn btn--primary store-product-button">
        Add to cart
      </button>
    </div>
  );
}

export default StoreProduct;
