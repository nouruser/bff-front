import React from "react";
import { Table } from 'antd';

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
    title: 'Description ',
    dataIndex: 'description',
  },
  {
    title: 'Localisation ',
    dataIndex: 'localisation',
  },
  {
    title: 'Status ',
    dataIndex: 'status',
  },
];
const data = [];
for (let i = 0; i < 30; i++) {
  data.push({
    name: `Edward King ${i}`,
    products: `Les produits demandés ${i}`,
    localisation: `Casablanca`,
    description: `C'est l'annonce ${i} que vous avez créer`,
    status: `en cours`,
  });
}

const Announcementlist = () => {
  return(
    <div >
        <h3 className="mt-4"> Liste des annonces crées: </h3>
        <div>
        <Table  columns={columns} dataSource={data} />
        </div>
    </div>
    
);
}

export default Announcementlist