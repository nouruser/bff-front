import { Cascader, DatePicker, Form, Input, Select, Switch, TreeSelect, Button } from 'antd';
import { useState } from 'react';

const tailLayout = { wrapperCol: { offset: 8, span: 16 } };

const AddAnnouncement = () => {
  const [componentSize, setComponentSize] = useState('default');

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  const onReset = () => {
    formRef.current?.resetFields();
  };
  const { TextArea } = Input;

  return (
    <>
      <h2 style={{ color: '#1d557c', fontFamily: '', fontSize: '25px', alignItems: 'center', textAlign: 'center' }}>
        Créer une annonce :
      </h2>
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        initialValues={{ size: componentSize }}
        onValuesChange={onFormLayoutChange}
        size={componentSize}
        style={{ maxWidth: 900, marginLeft: 30 }}
      >
        <Form.Item label="Nom de l'annonce :" name="annonce" rules={[{ required: true }]}>
          <Input />
        </Form.Item>

        <Form.Item label="Localisation :" name="localisation" rules={[{ required: true }]}>
          <Select>
            <Select.Option value="Casablanca">Casablanca</Select.Option>
            <Select.Option value="Rabat">Rabat</Select.Option>
            <Select.Option value="Marrakech">Marrakech</Select.Option>
            <Select.Option value="Agadir">Agadir</Select.Option>
            <Select.Option value="Tanger">Tanger</Select.Option>
            <Select.Option value="Fes">Fes</Select.Option>
            <Select.Option value="Dakhla">Dakhla</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item label="Date fin :" name="dateFin" rules={[{ required: true }]}>
          <DatePicker />
        </Form.Item>

        <Form.Item label="Produits" name="produits" rules={[{ required: true }]}>
          <Select mode="multiple">
            <Select.Option value="aliment1">Aliment1</Select.Option>
            <Select.Option value="aliment2">Aliment2</Select.Option>
            <Select.Option value="aliment3">Aliment3</Select.Option>
            <Select.Option value="aliment4">Aliment4</Select.Option>
            <Select.Option value="aliment5">Aliment5</Select.Option>
            <Select.Option value="aliment6">Aliment6</Select.Option>
            <Select.Option value="aliment7">Aliment7</Select.Option>

          </Select>
        </Form.Item>

        {/* <Form.Item label="Cascader" name="cascader" rules={[{ required: true }]}>
          <Cascader
            options={[
              {
                value: 'zhejiang',
                label: 'Zhejiang',
                children: [
                  {
                    value: 'hangzhou',
                    label: 'Hangzhou',
                  },
                ],
              },
            ]}
          />
        </Form.Item> */}

        <Form.Item label="Description :" name="description" rules={[{ required: true }]}>
          <TextArea rows={4} />
        </Form.Item>

        <Form.Item label="Urgent" name="urgent" valuePropName="checked" rules={[{ required: true }]}>
          <Switch />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Créer
          </Button>
          <Button htmlType="button" onClick={onReset}>
            Supprimer
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default AddAnnouncement;
