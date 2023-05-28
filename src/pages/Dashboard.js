import React from "react";
import { BsArrowDownRight } from "react-icons/bs";
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

const Dashboard = () => {
  return(
    <div>
      <h3 className="mb-4 title">Dashboard</h3>
      <div className="d-flex justify-content-between align-items-center gap-3">
        <div className="d-flex justify-content-between align-items-end flex-grow-1 bg-white p-3 roudned-3">
          <div>
            <p className="desc">Total</p>
            <h4 className="mb-0 sub-title">$1100</h4>
          </div>
          <div className="d-flex flex-column align-items-end">
            <h6>
              <BsArrowDownRight /> 32%
            </h6>
            <p className="mb-0  desc">Compared To April 2022</p>
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-end flex-grow-1 bg-white p-3 roudned-3">
          <div>
            <p className="desc">Total</p>
            <h4 className="mb-0 sub-title">$1100</h4>
          </div>
          <div className="d-flex flex-column align-items-end">
            <h6 className="red">
              <BsArrowDownRight /> 32%
            </h6>
            <p className="mb-0  desc">Compared To April 2022</p>
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-end flex-grow-1 bg-white p-3 roudned-3">
          <div>
            <p className="desc">Total</p>
            <h4 className="mb-0 sub-title">$1100</h4>
          </div>
          <div className="d-flex flex-column align-items-end">
            <h6 className="green">
              <BsArrowDownRight /> 32%
            </h6>
            <p className="mb-0 desc">Compared To April 2022</p>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <h3 className="mt-4"> Les offres récentes </h3>
        <div>
        <Table  columns={columns} dataSource={data} />
        </div>
      </div>
    </div>
);
}

export default Dashboard