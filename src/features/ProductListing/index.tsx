import { ProductCard } from "../../common";
import { useProductListing } from "./container/useProductListing";
import { Product } from "./productsSlice";

export const ProductListing = () => {
  const {
    products,
    productInCart,
    addToCartHandler,
    increaseQuantityHandler,
    decreaseQuantityHandler,
  } = useProductListing();

  return (
    <div className="grid grid-cols-1 px-5 py-5 lg:px-0 md:grid-cols-2 lg:grid-cols-3 gap-x-24 gap-y-10">
      {products.map(
        ({
          id,
          name,
          description,
          final_price,
          original_price,
          img_url,
        }: Product) => (
          <ProductCard
            id={id}
            name={name}
            description={description}
            final_price={final_price}
            original_price={original_price}
            img_url={img_url}
            addToCartHandler={addToCartHandler}
            increaseQuantityHandler={increaseQuantityHandler}
            decreaseQuantityHandler={decreaseQuantityHandler}
            key={id}
            inCartDetail={productInCart(id)}
          />
        )
      )}
    </div>
  );
};
