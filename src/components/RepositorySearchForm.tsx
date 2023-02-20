import { useState } from 'react';
import { Form, Input, Button } from 'antd';
import type { Demo } from '../api/search/model';

interface SearchFormProps {
  onSearchForm: (searchText: string) => void;
}
interface SearchFormField {
  searchText: string;
}

const RepositorySearchForm = ({ onSearchForm }: SearchFormProps) => {
  const [repositories] = useState<Demo>();
  const [form] = Form.useForm();

  const onSubmit = async (fieldsValue: SearchFormField) => {
    await onSearchForm(fieldsValue.searchText);
  };

  return (
    <Form
      form={form}
      onFinish={onSubmit}
    >
      <Form.Item
        name="searchText"
        label="Search Repository"
        rules={[
          {
            required: true,
            message: 'Please input repository name!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item>
        <Button
          htmlType="submit"
          type="primary"
        >
          Search
        </Button>
      </Form.Item>
      { repositories && repositories.items
        .map((item) => <div key={item.id}>{item.full_name}</div>) }
    </Form>
  );
};

export default RepositorySearchForm;
