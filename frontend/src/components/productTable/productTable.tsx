import { useMemo } from 'react';
import { Button, Table } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { Product } from '../../types/product';
import { ProductsActions } from '../../actions';
import { useProductStore } from '../../reducers';

interface IProps {
  products: Product[];
}

const ProductTable: React.FC<IProps> = ({ products }) => {
  const { productsIsLoading, createProductIsLoading, productDeleteIsLoading } =
    useProductStore();

  const parsedProducts = useMemo(
    () =>
      products?.map(product => ({
        ...product,
        price: `$ ${product.price.$numberDecimal}`,
        promotionalPrice: `$ ${product.promotionalPrice?.$numberDecimal}`,
      })),
    [products]
  );

  const onDeleteProduct = async (id: string) => {
    await ProductsActions.deleteProduct(id);
  };

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      sortDirections: ['descend'],
      sorter: (a: Product, b: Product) => a.name.length - b.name.length,
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
      width: 350,
      ellipsis: true,
    },
    {
      title: 'Color',
      dataIndex: 'color',
      key: 'color',
    },
    {
      title: 'Product Type',
      dataIndex: 'productCategory',
      key: 'productCategory',
      sortDirections: ['descend'],
      sorter: (a: Product, b: Product) =>
        a.productCategory.localeCompare(b.productCategory),
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Promotional Price',
      dataIndex: 'promotionalPrice',
      key: 'promotionalPrice',
    },
    {
      title: 'Action',
      width: 80,
      render: (item: Product) => (
        <Button
          type="text"
          danger
          icon={<DeleteOutlined />}
          onClick={() => onDeleteProduct(item._id || '')}
        />
      ),
    },
  ];

  return (
    <Table
      loading={
        productsIsLoading || productDeleteIsLoading || createProductIsLoading
      }
      columns={columns}
      dataSource={parsedProducts}
      pagination={{ position: ['none', 'none'] }}
    />
  );
};

export default ProductTable;
