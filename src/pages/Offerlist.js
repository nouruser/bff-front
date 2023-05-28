import React from "react";
import { Table } from 'antd';

const columns = [
  {
    title: 'Nom du donateur',
    dataIndex: 'name',
  },
  {
    title: 'Annonce sélectionée',
    dataIndex: 'announcement',
  },
  {
    title: 'Offre proposé',
    dataIndex: 'offer',
  },
  {
    title: ' ',
    dataIndex: 'buttons',
  },
];
const data = [];
for (let i = 0; i < 46; i++) {
  data.push({
    name: `Edward King ${i}`,
    announcement: `L'annonce ${i}`,
    offer: `L'offre proposé est ${i}`,
    buttons: ``,
  });
}

const Offerlist = () => {
  return(
    <div >
        <h3 className="mt-4"> Liste des offres proposés : </h3>
        <div>
        <Table  columns={columns} dataSource={data} />
        </div>
    </div>
    
);
}

export default Offerlist