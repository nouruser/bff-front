import React, { useState } from "react";
import { Table, Button, Modal, Form, Input } from 'antd';

const columns = [
  {
    title: "Title de l'annonce",
    dataIndex: 'name',
  },
  {
    title: 'Liste des produits',
    dataIndex: 'products',
  },
  {
    title: 'Description',
    dataIndex: 'description',
  },
  {
    title: 'Localisation',
    dataIndex: 'localisation',
  },
  {
    title: 'Status',
    dataIndex: 'status',
  },
  {
    title: 'Actions',
    render: (_, record) => <EditButton record={record} />,
  },
];

const data = [];
for (let i = 0; i < 30; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    products: `Les produits demandés ${i}`,
    localisation: `Casablanca`,
    description: `C'est l'annonce ${i} que vous avez créée`,
    status: `en cours`,
  });
}

const EditButton = ({ record }) => {
  const [visible, setVisible] = useState(false);
  const [form] = Form.useForm();

  const handleEdit = () => {
    form.setFieldsValue(record);
    setVisible(true);
  };

  const handleOk = () => {
    form.submit();
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const handleFinish = (values) => {
    console.log(values);
    setVisible(false);
  };

  return (
    <>
      <Button type="primary" onClick={handleEdit}>
        Modifier
      </Button>
      <Modal
        title="Modifier l'annonce"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}  style={{paddingBottom:'20px', justifyContent:'center', color: '#1d557c', fontFamily: 'Roboto', fontSize: '32px'}}
      >
        <Form form={form} onFinish={handleFinish}>
          <Form.Item name="name" label="Titre de l'annonce">
            <Input />
          </Form.Item>
          <Form.Item name="products" label="Liste des produits">
            <Input />
          </Form.Item>
          <Form.Item name="description" label="Description">
            <Input.TextArea />
          </Form.Item>
          <Form.Item name="localisation" label="Localisation">
            <Input />
          </Form.Item>
          <Form.Item name="status" label="Status">
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

const Announcementlist = () => {
  return (
    <div>
      <h3 className="mt-4 title" style={{color: '#1d557c', fontFamily: 'Roboto', fontSize: '32px', marginBottom:'40px', textAlign:'center'}}>
        Liste des annonces créées :</h3>
      <div>
        <Table columns={columns} dataSource={data} />
      </div>
    </div>
  );
};

export default Announcementlist;