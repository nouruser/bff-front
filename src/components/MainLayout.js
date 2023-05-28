import {MenuFoldOutlined,MenuUnfoldOutlined} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import { useState } from 'react';
import Footer from './Footer';
import {AiOutlineDashboard} from 'react-icons/ai';
import { CgProfile} from 'react-icons/cg';
import { MdAnnouncement,  MdCreate} from 'react-icons/md';
import {  Outlet, useNavigate } from 'react-router-dom';
import {BsListCheck} from 'react-icons/bs';
import {FaClipboardList} from 'react-icons/fa';
import { IoMdNotificationsOutline } from 'react-icons/io';


const { Header, Sider, Content } = Layout;

const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { token: { colorBgContainer }, } = theme.useToken();
  const navigate= useNavigate();
  return (
    <>
      <Layout> 
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['']}
          onClick={({key}) => {
            if( key === "signout"){}
            else { navigate(key); }
          }}
          items={[
            {
              key: '',
              icon: <AiOutlineDashboard className='fs-4' />,
              label: 'Dashboard',
            },
            {
              key: 'announcement',
              icon: <MdAnnouncement className='fs-4' />,
              label: 'Annonces',
              children :[
                {
                  key: 'add-announcement',
                  icon: <MdCreate className='fs-4' />,
                  label: 'Ajouter une annonce',
                },
                {
                  key: 'announcement-list',
                  icon: <BsListCheck className='fs-4' />,
                  label: 'Liste des annonces',
                },
              ],
            },
            {
              key: 'offer',
              icon: <FaClipboardList className='fs-4' />,
              label: 'Offres',
              children :[
                {
                  key: 'offer-list',
                  icon: <BsListCheck className='fs-4' />,
                  label: 'Listes des offres',
                },
              ],
            },
            {
              key: 'profil',
              icon: <CgProfile className='fs-4' />,
              label: 'Profil',
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header className='d-flex justify-content-between ps-1 pe-5' style={{ padding: 0, background: colorBgContainer, }} >
         
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{ fontSize: '16px', width: 64, height: 64, }} />
          
          <Button
            type='text'
            icon= {<IoMdNotificationsOutline/>}
            style={{ fontSize: '16px', width: 64, height: 64, marginLeft: '80%' }}
          />

          <Button 
             type="text"
             icon={collapsed ? <CgProfile /> : <CgProfile />}
             style={{ fontSize: '16px', width: 64, height: 64 }}/>
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
        <Outlet/>
        </Content>
      </Layout>
    </Layout>

    <Footer/>
    </>
  );
};

export default MainLayout;