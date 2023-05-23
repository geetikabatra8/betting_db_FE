import React, { useEffect } from 'react'; 
import { Outlet } from 'react-router-dom'
import { getAuth } from '../../auth/getAuth'; 
import AdminSidebar from '../../components/admin/AdminSidebar';
import AdminNavBar from '../../components/admin/AdminNavBar';


const AdminLayout = () =>{ 
    useEffect(() => {
        getAuth().then((res) => {
           if(!res.status){
            window.location.href = '/login';
           }
           console.log("check auth in admin layout");
        });
     },[]);
 

    return (
      <>
        <article id="root">
                <div className="wrapper">
                    <div className="sidebar">
                        <AdminSidebar />
                    </div>
                    <div className="content-page">
                        <div className="content">
                            <div className="MainNavRow"><AdminNavBar/></div>
                            <div className="container-fluid "><Outlet/></div>
                        </div>
                    </div>
                </div>
        </article> 
      </>
    );
     
}
export default AdminLayout;