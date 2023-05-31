import React, { useState } from 'react';
import { Table, Button, Modal } from 'antd';

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
    title: ' Actions ',
    dataIndex: 'buttons',
    render: (_, record) => {
      return <Button onClick={() => handleButtonClicked(record)}>Afficher</Button>;
    },
  },
];

const data = [];
for (let i = 0; i < 46; i++) {
  data.push({
    name: `Edward King ${i}`,
    announcement: `L'annonce ${i}`,
    offer: `L'offre proposé est ${i}`,
  });
}

const Offerlist = () => {
  const [selectedRecord, setSelectedRecord] = useState(null);

  const handleApproveClicked = () => {
    // Logic to approve the offer
    closeModal();
  };

  const handleDeleteClicked = () => {
    // Logic to delete the offer
    closeModal();
  };

  const closeModal = () => {
    setSelectedRecord(null);
  };

  const handleButtonClicked = (record) => {
    setSelectedRecord(record);
  };

  return (
    <div>
      <h3 className="mt-4 title" style={{ color: '#1d557c', fontFamily: 'Roboto', fontSize: '32px', marginBottom: '40px', textAlign: 'center' }}>Liste des offres proposées :</h3>
      <Table columns={columns} dataSource={data} />

      {selectedRecord && (
        <Modal
          title="Informations sur l'offre"
          visible={true}
          onCancel={closeModal}
          footer={[
            <Button key="approve" type="primary" onClick={handleApproveClicked}>
              Approuver
            </Button>,
            <Button key="delete" danger onClick={handleDeleteClicked}>
              Supprimer
            </Button>,
          ]}
        >
          <p>Nom du donateur: {selectedRecord.name}</p>
          <p>Annonce sélectionnée: {selectedRecord.announcement}</p>
          <p>Offre proposée: {selectedRecord.offer}</p>
        </Modal>
      )}
    </div>
  );
};

export default Offerlist;
