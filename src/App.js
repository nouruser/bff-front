import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Offerlist from './pages/Offerlist';
import Login from './pages/Login';
import MainLayout from './components/MainLayout';
import Announcementlist from './pages/Announcementlist';
import AddAnnouncement from './pages/AddAnnouncement';
import UserProfil from './pages/UserProfil';


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/assocbff" element={<MainLayout/>}>
          <Route index element={<Dashboard/>}/>
          <Route path ="offer-list" element={<Offerlist/>}/>
          <Route path ="announcement-list" element={<Announcementlist/>}/>
          <Route path ="add-announcement" element={<AddAnnouncement/>}/>
          <Route path ="profil" element={<UserProfil/>}/>
        </Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;



