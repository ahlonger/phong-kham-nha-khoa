// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TrangChu from "./pages/Trangchu";
import TaiKhoan from "./pages/Taikhoan";
import DanhGia from "./pages/Danhgia";
import DichVuGoi from "./pages/DichVuGoi";
import LichHen from "./pages/LichHen";
import CaiDat from "./pages/CaiDat";
import BenhNhan from "./pages/BenhNhan";
import DangNhap from "./components/DangNhap";
import DangKy from "./components/DangKy";
import BacSi from "./pages/BacSi";
import DichVu from "./pages/DichVu";
import QuanLyLichLamViec from "./pages/QuanLyLichLamViec";
import LichDaDangKy from "./pages/LichDaDangKy";
import LichHenHomNay from "./pages/LichHenHomNay";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* BenhNhan */}
        <Route path="/" element={<BenhNhan />} />
        <Route path="/dang-nhap" element={<DangNhap />} />
        <Route path="/dang-ky" element={<DangKy />} />

        {/* BacSi */}
        <Route path="/bac-si" element={<BacSi />} />
        <Route path="/dich-vu" element={<DichVu />} />
        <Route path="/quan-ly-lich-lam-viec" element={<QuanLyLichLamViec />} />
        <Route path="/lich-da-dang-ky" element={<LichDaDangKy />} />
        <Route path="/lich-hen-hom-nay" element={<LichHenHomNay />} />

        {/* Admin */}
        <Route path="/admin" element={<TrangChu />} />
        <Route path="/tai-khoan" element={<TaiKhoan />} />
        <Route path="/danh-gia" element={<DanhGia />} />
        <Route path="/dich-vu-goi" element={<DichVuGoi />} />
        <Route path="/lich-hen" element={<LichHen />} />
        <Route path="/cai-dat" element={<CaiDat />} />
      </Routes>
    </Router>
  );
};

export default App;