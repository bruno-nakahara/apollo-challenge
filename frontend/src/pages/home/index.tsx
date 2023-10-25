import { useEffect } from 'react';
import { ProductTable } from '../../components';
import { ProductsActions } from '../../actions';
import { useProductStore } from '../../reducers';
import { Input } from 'antd';
import './style.css';

interface IProps {}

const Home: React.FC<IProps> = () => {
  const { products } = useProductStore();

  const { Search } = Input;

  const getProducts = async (filter?: string) =>
    ProductsActions.getProducts(filter);

  const onSearch = (value: string) => getProducts(value);

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <div className="search">
        <Search
          placeholder="Search a product by name or type"
          onSearch={onSearch}
          enterButton
          size="large"
          allowClear
        />
      </div>

      <ProductTable products={products} />
    </div>
  );
};

export default Home;
