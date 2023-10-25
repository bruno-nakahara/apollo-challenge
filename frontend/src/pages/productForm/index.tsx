import { Button, Form, Input, InputNumber, Select } from 'antd';
import { useNavigate } from 'react-router-dom';
import { FieldType } from '../../types/product';
import './style.css';
import { ProductsActions } from '../../actions';

interface IProps {}

const ProductForm: React.FC<IProps> = () => {
  const navigate = useNavigate();

  const { TextArea } = Input;

  const onFinish = async values => {
    await ProductsActions.createProduct(values);
    navigate('/');
  };

  return (
    <div>
      <div className="title">
        <h2>New Product Form</h2>
      </div>

      <Form
        className="product-form"
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          label="Name"
          name="name"
          rules={[{ required: true, message: 'Name of the product' }]}
        >
          <Input placeholder="Name of the product" />
        </Form.Item>

        <Form.Item<FieldType>
          label="Description"
          name="description"
          rules={[{ required: true, message: 'Description of the product' }]}
        >
          <TextArea rows={4} placeholder="Description of the product" />
        </Form.Item>

        <Form.Item<FieldType>
          label="Color"
          name="color"
          rules={[{ required: true, message: 'Color of the product' }]}
        >
          <Input placeholder="Color of the product" />
        </Form.Item>

        <Form.Item<FieldType>
          label="Product Type"
          name="productCategory"
          rules={[{ required: true, message: 'Type of the product' }]}
        >
          <Select
            options={[
              { value: 'Furniture', label: 'Furniture' },
              { value: 'Appliances', label: 'Appliances' },
              { value: 'Refrigerators', label: 'Refrigerators' },
              { value: 'Smartphones', label: 'Smartphones' },
              { value: 'Electronics', label: 'Electronics' },
            ]}
          />
        </Form.Item>

        <Form.Item<FieldType>
          label="Price"
          name="price"
          rules={[{ required: true, message: 'Price of the product' }]}
        >
          <InputNumber
            className="price-input"
            size="large"
            placeholder="Price of the product"
            formatter={value => `$ ${value}`.replace(/^\d+\.\d{2}$/g, '.')}
          />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ProductForm;
