import React from "react";
import Cards from '../components/Cards';
import CounterBox from '../components/CounterBox';
import { Col, Row, Statistic } from 'antd';

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


const Dashboard = () =>  {
  return(
    <>
    <div>
        <h3 className="mb-4 title" style={{ color: '#1d557c', textAlign: 'center', fontFamily: 'Roboto', fontSize: '32px' }}>
          Bienvenue !
        </h3>

        <div style={{ marginTop: '100px', textAlign: 'center' }}>
          <Row gutter={16} style={{ marginBottom: '25px' }}>
            <Col span={8}>
              <div >
              <CounterBox icon="fa-thumbs-o-up" counter={21} text="Nombre des annonces créées" colored={false} style={{ height: '140px' }}/>
              </div>
            </Col>
            <Col span={8}>
              <div >
              <CounterBox icon="fa-group" counter={32} text="Nombre de consultations" colored={false} />
              </div>
            </Col>
            <Col span={8}>
              <div >
              <CounterBox icon="fa-shopping-cart" counter={9} text="Nombre d'offres proposées" colored={false} />
              </div>
            </Col>
          </Row>
        </div>

        <Cards />
      </div>
    </>
);
}

export default Dashboard