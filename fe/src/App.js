import React, { useState } from 'react';
import './App.css';
import Header from './giaodien/Header';
import Footer from './giaodien/Footer';
import Trangchu from './giaodien/Trangchu';
import DangKy from './components/Dangky';
import { useLocation } from "react-router-dom";
function App(props) {
 let params1 = useLocation();
 const isAuthPage = location.pathname.includes("dangnhap") || location.pathname.includes("dangky");
  return (
   <>
    {!isAuthPage && <Header />}
      <div className="main-content">
      {props.children}
      </div>
    {!isAuthPage && <Footer />}
   </>
  );
}

export default App;


