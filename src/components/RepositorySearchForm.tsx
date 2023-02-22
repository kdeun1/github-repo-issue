import {
  Form, Input, Button, Typography,
} from 'antd';

interface SearchFormProps {
  onSearchForm: (searchText: string) => void;
  onResetForm: () => void;
}
interface SearchFormField {
  searchText: string;
}

const RepositorySearchForm = ({ onSearchForm, onResetForm }: SearchFormProps) => {
  const { Title } = Typography;

  const [form] = Form.useForm();

  const onSubmit = (fieldsValue: SearchFormField) => {
    onSearchForm(fieldsValue.searchText);
  };

  return (
    <article className="repository-search-form">
      <Title level={2} type="secondary">Github 검색</Title>
      <Title level={4}>Public Repository</Title>
      <Form
        form={form}
        onFinish={onSubmit}
        onReset={onResetForm}
      >
        <Form.Item
          name="searchText"
          rules={[
            {
              required: true,
              message: 'Please input repository name!',
            },
          ]}
        >
          <Input size="large" />
        </Form.Item>
        <Form.Item className="repository-search-form__btn">
          <Button
            htmlType="submit"
            type="primary"
          >
            Search
          </Button>
          <Button
            htmlType="reset"
            type="default"
          >
            Cancel
          </Button>
        </Form.Item>
      </Form>
    </article>
  );
};

export default RepositorySearchForm;
