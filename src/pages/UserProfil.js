import React, { useState } from 'react';
import { Button, Space } from 'antd';

const UserProfil = () => {
  const [userInfo, setUserInfo] = useState({
    name: 'John Doe',
    prenom: 'Active',
    email: 'johndoe@example.com',
    phoneNumber: '1234567890',
  });

  const [editing, setEditing] = useState(false);
  const [tempUserInfo, setTempUserInfo] = useState({ ...userInfo });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTempUserInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
  };

  const handleEditClick = () => {
    setEditing(true);
  };
  const handleSaveClick = () => {
    setUserInfo({ ...tempUserInfo });
    setEditing(false);
  };
  const handleCancelClick = () => {
    setTempUserInfo({ ...userInfo });
    setEditing(false);
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '70vh',
      }}
    >
      <div
        style={{
          width: '500px',
          padding: '20px',
          backgroundColor: '#fff',
          borderRadius: '4px',
          textAlign: 'center',
        }}
      >
        <h2 style={{ color: '#1d557c', fontFamily: 'Roboto', fontSize: '32px' }}>
          Mes informations :
        </h2>
        <div style={{ marginBottom: '30px',  justifyContent:'space-between' }}>
          <strong style={{ marginRight: '20px', fontSize: '18px', fontWeight: '300' }}>Nom :</strong>
          {editing ? (
            <input type="text" name="name" value={tempUserInfo.name} onChange={handleInputChange} />
          ) : (
            userInfo.name
          )}
        </div>
        <div style={{ marginBottom: '30px' ,  justifyContent:'space-between'}}>
          <strong style={{ marginRight: '20px', fontSize: '18px', fontWeight: '300' }}>Prénom :</strong>
          {editing ? (
            <input type="text" name="prenom" value={tempUserInfo.prenom} onChange={handleInputChange} />
          ) : (
            userInfo.prenom
          )}
        </div>
        <div style={{ marginBottom: '30px' ,  justifyContent:'space-between'}}>
          <strong style={{ marginRight: '10px', fontSize: '18px', fontWeight: '300' }}>Email :</strong>
          {editing ? (
            <input type="email" name="email" value={tempUserInfo.email} onChange={handleInputChange} />
          ) : (
            userInfo.email
          )}
        </div>
        <div style={{ marginBottom: '30px', justifyContent:'space-between' }}>
          <strong style={{ marginRight: '10px', fontSize: '18px', fontWeight: '300' }}>Télephone :</strong>
          {editing ? (
            <input type="tel" name="phoneNumber" value={tempUserInfo.phoneNumber} onChange={handleInputChange} />
          ) : (
            userInfo.phoneNumber
          )}
        </div>

        {editing ? (
          <Space direction="vertical">
            <Space wrap>
              <Button type="primary" onClick={handleSaveClick} style={{ marginTop: '20px', marginRight:'30px' }}>
                Enregistrer
              </Button>
              <Button onClick={handleCancelClick} style={{ marginTop: '20px' }}>Annuler</Button>
            </Space>
          </Space>
        ) : (
          <Space direction="vertical">
            <Space wrap>
              <Button onClick={handleEditClick} style={{ marginTop: '20px' }}>Modifier</Button>
            </Space>
          </Space>
        )}
      </div>
    </div>
  );
};

export default UserProfil;
