import { useState } from 'react';
import { Form, Input, Button } from 'antd';
import type { Demo } from '../api/search/model';

interface SearchFormProps {
  onSearchForm: (searchText: string) => void;
  onResetForm: () => void;
}
interface SearchFormField {
  searchText: string;
}

const RepositorySearchForm = ({ onSearchForm, onResetForm }: SearchFormProps) => {
  const [repositories] = useState<Demo>();
  const [form] = Form.useForm();

  const onSubmit = (fieldsValue: SearchFormField) => {
    onSearchForm(fieldsValue.searchText);
  };

  return (
    <Form
      form={form}
      onFinish={onSubmit}
      onReset={onResetForm}
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
        <Button
          htmlType="reset"
          type="default"
        >
          Cancel
        </Button>
      </Form.Item>
      { repositories && repositories.items
        .map((item) => <div key={item.id}>{item.full_name}</div>) }
    </Form>
  );
};

export default RepositorySearchForm;
