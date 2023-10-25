export type Product = {
  _id?: string;
  name: string;
  description: string;
  color: string;
  productCategory: string;
  price: {
    $numberDecimal: string;
  };
  promotionalPrice?: {
    $numberDecimal: string;
  };
};

export type ProductReducer = {
  products: Product[];
  productsIsLoading: boolean;
  productsIsError: boolean;
  productDeleteIsLoading: boolean;
  productDeleteIsError: boolean;
  createProductIsLoading: boolean;
  createProductIsError: boolean;
};

export type FieldType = {
  name: string;
  description: string;
  color: string;
  productCategory: string;
  price: number;
};
