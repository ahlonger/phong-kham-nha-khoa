// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import TrangChu from "./pages/Trangchu";
import TaiKhoan from "./pages/Taikhoan";
import DanhGia from "./pages/Danhgia";
import DichVuGoi from "./pages/DichVuGoi";
import LichHen from "./pages/LichHen";
import CaiDat from "./pages/CaiDat";

const App = () => {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 bg-gray-50 min-h-screen p-6 pl-72">
          <Routes>
            <Route path="/" element={<TrangChu />} />
            <Route path="/tai-khoan" element={<TaiKhoan />} />
            <Route path="/danh-gia" element={<DanhGia />} />
            <Route path="/dich-vu-goi" element={<DichVuGoi />} />
            <Route path="/lich-hen" element={<LichHen />} />
            <Route path="/cai-dat" element={<CaiDat />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
