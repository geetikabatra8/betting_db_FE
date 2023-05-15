import React from 'react'
import Navbar from '../home/includes/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../home/includes/Footer';

export default function Frontend(props) {
  return (
    <> <div>frontend</div>
         <Navbar/>
        
          <Outlet/>
          <Footer/>
    </>
    );
  }