import { notification } from 'antd';
import { useProductStore } from '../reducers';
import { ProductAction } from '../request';
import { Product } from '../types/product';

export const getProducts = async (filter?: string) => {
  useProductStore.setState({ productsIsLoading: true });

  try {
    const payload: Product[] = await ProductAction.getAll(filter);

    useProductStore.setState({ products: payload });

    return payload;
  } catch (err) {
    useProductStore.setState({ productsIsError: true });
  } finally {
    useProductStore.setState({ productsIsLoading: false });
  }
};

export const deleteProduct = async (id: string) => {
  useProductStore.setState({ productDeleteIsLoading: true });

  try {
    const response = await ProductAction.remove(id);

    if (response) {
      notification.info({ message: response.message });
      getProducts();
    }
  } catch (err) {
    useProductStore.setState({ productDeleteIsError: true });
  } finally {
    useProductStore.setState({ productDeleteIsLoading: false });
  }
};

export const createProduct = async (data: Product) => {
  useProductStore.setState({ createProductIsLoading: true });

  try {
    const response = await ProductAction.create(data);

    if (response) {
      notification.info({ message: response.message });
      getProducts();
    }
  } catch (err) {
    useProductStore.setState({ createProductIsError: true });
  } finally {
    useProductStore.setState({ createProductIsLoading: false });
  }
};
