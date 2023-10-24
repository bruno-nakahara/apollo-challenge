import { create, remove, search } from '../services/product.services';

const createProduct = async (req, res) => {
  try {
    const productCreated = await create(req.body);

    if (!!productCreated?._id) {
      return res.status(201).json({ message: 'Produto criado com sucesso' });
    }
  } catch (error) {
    console.error(error);
    return res.status(400).json({ message: 'Falha ao tentar criar produto' });
  }
};

const getProducts = async (req, res) => {
  const { filter } = req.query;

  try {
    const products = await search(filter);

    return res.status(200).json(products);
  } catch (error) {
    console.error(error);
    return res.status(400).json({ message: 'Falha ao tentar buscar produtos' });
  }
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const productDeleted = await remove(id);

    if (!productDeleted)
      return res.status(404).json({ message: 'Erro, produto não encontrado.' });

    return res.status(200).json({ message: 'Produto deletado com sucesso' });
  } catch (error) {
    console.error(error);
    return res.status(400).json({ message: 'Falha ao tentar deletar produto' });
  }
};

export { createProduct, getProducts, deleteProduct };
