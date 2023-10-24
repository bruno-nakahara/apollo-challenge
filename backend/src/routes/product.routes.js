import express from 'express';
import {
  createProduct,
  getProducts,
  deleteProduct,
} from '../controllers/product.controller';
import checkAllFields from '../validators/checkAllFields';

const routes = express.Router();

routes.post('/', checkAllFields, createProduct);
routes.get('/', getProducts);
routes.delete('/:id', deleteProduct);

module.exports = routes;
