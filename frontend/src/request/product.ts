import axios from 'axios';
import env from '../config/env';
import { Product } from '../types/product';

const MODULE_VERSION = 'v1';
const MODULE_BASE_URL = 'product';

const ProductAction = {
  create: async (payload: Product) => {
    const response = await axios.post(
      `${env.API_BASE_URL}/${MODULE_VERSION}/${MODULE_BASE_URL}`,
      payload
    );

    return response.data;
  },
  getAll: async (filter?: string) => {
    const response = await axios.get(
      `${env.API_BASE_URL}/${MODULE_VERSION}/${MODULE_BASE_URL}?filter=${
        filter || ''
      }`
    );

    return response.data;
  },
  remove: async (id: string) => {
    const response = await axios.delete(
      `${env.API_BASE_URL}/${MODULE_VERSION}/${MODULE_BASE_URL}/${id}`
    );

    return response.data;
  },
};

export default ProductAction;
