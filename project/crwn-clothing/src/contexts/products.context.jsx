import { createContext, useState } from "react";

import SHOP_DATA from "../shop-data.json";

//this is the actual value you want to access
export const ProductsContext = createContext({
  products: [],
  id: null,
  setId: () => null,
  name: null,
  setName: () => null,
  imageUrl: null,
  setImageUrl: () => null,
  price: null,
  setPrice: () => null,
});

export const ProductsProvider = ({ children }) => {
  const [products] = useState(SHOP_DATA);
  const value = { products };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
