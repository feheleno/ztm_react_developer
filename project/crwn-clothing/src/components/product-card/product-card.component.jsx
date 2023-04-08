import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";
import Button from "../button/button.component";

import "./product-card.styles.scss";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { increaseItemToCart } = useContext(CartContext);

  const increaseProductToCart = () => {
    increaseItemToCart(product);
  };

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverted" onClick={increaseProductToCart}>
        Add to cart
      </Button>
    </div>
  );
};

export default ProductCard;
