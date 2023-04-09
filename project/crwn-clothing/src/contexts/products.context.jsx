import { createContext, useState, useEffect } from "react";

import { getCategoriesAndDocuments } from "../utils/firebase/firebse.utils";

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
  const [products] = useState([]);
  const value = { products };

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      console.log(categoryMap);
    };
    getCategoriesMap();
  }, []);

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
