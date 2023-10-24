import ProductTypeModel from '../model/productType.model';

const searchProductType = async type => {
  return await ProductTypeModel.findOne({ category: type });
};

export { searchProductType };
