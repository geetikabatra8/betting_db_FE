import './App.css';  
import {Routes, Route } from 'react-router-dom'; 
 
import AdminLayout from './pages/admin/AdminLayout';
import Login from './pages/Login'; 
import AdminRecordList from './pages/admin/AdminRecordList';
import AdminTeamList from './pages/admin/AdminTeamList';
import AdminTechnicalBook from './pages/admin/AdminTechnicalBook';
import ManageUsers from './pages/admin/ManageUsers';
// import NotFound from './components/NotFound';
function App() {
  return (
    <>
     <div className='App'>
     <Routes> 
        <Route path="login" element={<Login/>}/>
        <Route path="/" element={<Login/>}/>
        <Route path="/admin" element={<AdminLayout/>}>
           <Route index element={<AdminRecordList/>} />
           <Route path="recordList" element={<AdminRecordList/>} />
           <Route path="teamList" element={<AdminTeamList/>} />
           <Route path="technicalbook" element={<AdminTechnicalBook/>} />
           <Route path="manageUsers" element={<ManageUsers/>} />
        </Route> 
      </Routes>
     </div>
    </>
  );
}
 

export default App;
