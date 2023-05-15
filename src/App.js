import './App.css';  
import {Routes, Route} from 'react-router-dom';
import Frontend from './components/layouts/Frontend';
import Admin from './components/layouts/Admin';
import Homepage from './components/home/Homepage';
import Dashboard from './components/admin/Dashboard';
import Login from './components/home/Login';
// import NotFound from './components/NotFound';
function App() {
  return (
    <>
     <div className='App'>
     <Routes>
       <Route path="/" element={<Frontend/>}>
          <Route index element={<Homepage/>} />
          <Route path="login" element={<Login/>}/>
       </Route>
       <Route path="/admin" element={<Admin/>}>
         <Route index element={<Dashboard/>} />
       </Route>
       
     </Routes>
     </div>
    </>
  );
}
 

export default App;
