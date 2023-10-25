import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { ProductReducer } from '../types/product';

const initialState = {
  products: [],
  productsIsLoading: false,
  productsIsError: false,
  productDeleteIsLoading: false,
  productDeleteIsError: false,
  createProductIsLoading: false,
  createProductIsError: false,
} as ProductReducer;

export default create<ProductReducer>()(
  devtools(
    persist(
      set => ({
        ...initialState,
        reset: () => {
          set(initialState);
        },
      }),
      {
        name: 'product-store',
      }
    )
  )
);
