import { create, remove, search } from '../services/product.services';

const createProduct = async (req, res) => {
  try {
    const productCreated = await create(req.body);

    if (!!productCreated?._id) {
      return res.status(201).json({ message: 'Product created!' });
    }
  } catch (error) {
    console.error(error);
    return res.status(400).json({ message: 'Error, failed to create product' });
  }
};

const getProducts = async (req, res) => {
  const { filter } = req.query;

  try {
    const products = await search(filter);

    return res.status(200).json(products);
  } catch (error) {
    console.error(error);
    return res.status(400).json({ message: 'Error, failed to get products' });
  }
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const productDeleted = await remove(id);

    if (!productDeleted)
      return res.status(404).json({ message: 'Error, product not found' });

    return res.status(200).json({ message: 'Product deleted!' });
  } catch (error) {
    console.error(error);
    return res.status(400).json({ message: 'Error, failed to delete product' });
  }
};

export { createProduct, getProducts, deleteProduct };
