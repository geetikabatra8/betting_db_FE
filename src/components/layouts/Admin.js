import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminSidebar from '../admin/includes/AdminSidebar'
import AdminNavbar from '../admin/includes/AdminNavbar'

export default function Admin() {
  return (
    <>
    <div className='admin-main-container'>
        <div className='sidebar'>
         <AdminSidebar/>
        </div>
        <div className='content'>
           <AdminNavbar/>
           <div>Admin</div>
           <Outlet />
        </div>
    </div>
    
    
    </>
  )
}
