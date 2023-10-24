import ProductModel from '../model/product.model';
import { searchProductType } from '../services/productType.services';
import { calculatePromotionalPrice } from '../helper/price';

const create = async data => {
  const productExists = await ProductModel.findOne({ name: data.name });

  if (productExists) return productExists;

  const productCategory = await searchProductType(data.productCategory);

  let productPromotionalPrice = data.price;
  if (productCategory) {
    productPromotionalPrice = calculatePromotionalPrice({
      price: data.price,
      discount: productCategory.discount,
    });
  }

  return await ProductModel.create({
    ...data,
    promotionalPrice: productPromotionalPrice.toFixed(2),
  });
};

const search = async filter => {
  const queryWordRegex = new RegExp(filter, 'i');

  return await ProductModel.find({
    $or: [
      { name: { $regex: queryWordRegex } },
      { productCategory: { $regex: queryWordRegex } },
    ],
  });
};

const remove = async id => {
  const productExists = await ProductModel.findOne({ _id: id });

  if (!productExists) return false;

  const productDeleted = await ProductModel.deleteOne({ _id: id });

  return productDeleted.deletedCount > 0;
};

export { create, search, remove };
