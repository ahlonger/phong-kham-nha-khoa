// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-blue-600 h-16 w-full fixed top-0 left-0 z-50 flex items-center justify-between px-6 shadow text-white">
      {/* Logo */}
      <div className="flex items-center gap-2 font-bold text-lg">
        <img
          src="/img/cho.jpg"
          alt="Logo"
          className="w-8 h-8 rounded-full border-2 border-white object-cover"
          onError={(e) => { e.target.src = "https://via.placeholder.com/32"; }}
        />
        PHÒNG KHÁM AHLONG
      </div>

      {/* Điều hướng */}
      <nav className="flex gap-10 font-semibold">
        <Link to="/" className="hover:text-yellow-300">Trang chủ</Link>
        <Link to="/danh-sach-bac-si" className="hover:text-yellow-300">Bác sĩ</Link>
        <Link to="/goi" className="hover:text-yellow-300">Gói</Link>
        <Link to="/dat-lich" className="hover:text-yellow-300">Đặt lịch</Link>
        <Link to="/danh-gia-user" className="hover:text-yellow-300">Đánh giá</Link> {/* Cập nhật route */}
      </nav>

      {/* Tìm kiếm + Auth */}
      <div className="flex items-center gap-4">
        <input
          type="text"
          placeholder="Tìm kiếm dịch vụ..."
          className="px-3 py-1 rounded-md text-black w-48"
        />
        <div className="text-sm font-semibold space-x-2">
          <Link to="/dang-nhap" className="hover:text-yellow-300">Đăng nhập</Link> |
          <Link to="/dang-ky" className="hover:text-yellow-300">Đăng ký</Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;