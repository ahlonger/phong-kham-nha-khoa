// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-blue-600 w-full fixed top-0 left-0 z-50 shadow text-white">
      <div className="flex items-center justify-between px-4 md:px-8 h-16">
        {/* Logo */}
        <div className="flex-shrink-0 flex items-center gap-2 font-bold text-lg">
          <img
            src="/img/cho.jpg"
            alt="Logo"
            className="w-8 h-8 rounded-full border-2 border-white object-cover"
            onError={(e) => {
              e.target.src = "https://via.placeholder.com/32";
            }}
          />
          PHÒNG KHÁM GWOUTH
        </div>

        {/* Nav ở giữa - chỉ desktop */}
        <nav className="hidden md:flex flex-grow justify-center gap-6 font-semibold">
          <Link to="/" className="hover:text-yellow-300">Trang chủ</Link>
          <Link to="/danh-sach-bac-si" className="hover:text-yellow-300">Bác sĩ</Link>
          <Link to="/goi" className="hover:text-yellow-300">Gói</Link>
          <Link to="/dat-lich" className="hover:text-yellow-300">Đặt lịch</Link>
          <Link to="/danh-gia-user" className="hover:text-yellow-300">Đánh giá</Link>
        </nav>

        {/* Search + Auth bên phải - chỉ desktop */}
        <div className="hidden md:flex items-center gap-4">
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

        {/* Hamburger icon - chỉ mobile */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-600 px-4 py-4 space-y-4">
          <nav className="flex flex-col gap-4 text-center font-semibold">
            <Link to="/" className="hover:text-yellow-300" onClick={() => setIsOpen(false)}>Trang chủ</Link>
            <Link to="/danh-sach-bac-si" className="hover:text-yellow-300" onClick={() => setIsOpen(false)}>Bác sĩ</Link>
            <Link to="/goi" className="hover:text-yellow-300" onClick={() => setIsOpen(false)}>Gói</Link>
            <Link to="/dat-lich" className="hover:text-yellow-300" onClick={() => setIsOpen(false)}>Đặt lịch</Link>
            <Link to="/danh-gia-user" className="hover:text-yellow-300" onClick={() => setIsOpen(false)}>Đánh giá</Link>
          </nav>

          <div className="mt-4 flex flex-col gap-4">
            <input
              type="text"
              placeholder="Tìm kiếm dịch vụ..."
              className="px-3 py-1 rounded-md text-black w-full"
            />
            <div className="text-sm font-semibold text-center space-x-2">
              <Link to="/dang-nhap" className="hover:text-yellow-300" onClick={() => setIsOpen(false)}>Đăng nhập</Link> |
              <Link to="/dang-ky" className="hover:text-yellow-300" onClick={() => setIsOpen(false)}>Đăng ký</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
