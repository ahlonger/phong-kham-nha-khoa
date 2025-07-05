// src/components/Navbar.jsx
import React from "react";

const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="bg-blue-600 h-16 w-full fixed top-0 left-0 z-50 flex items-center justify-between px-6 shadow text-white">
      {/* Logo */}
      <div className="flex items-center gap-2 font-bold text-lg">
        <img
          src="/img/cho.jpg" // Đảm bảo file cho.jpg nằm trong public/img/
          alt="Logo"
          className="w-8 h-8 rounded-full border-2 border-white object-cover"
          onError={(e) => { e.target.src = "https://via.placeholder.com/32"; }} // Fallback nếu ảnh không load
        />
        PHÒNG KHÁM AHLONG
      </div>

      {/* Điều hướng */}
      <nav className="flex gap-10 font-semibold">
        <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection("home"); }} className="hover:text-yellow-300">Trang chủ</a>
        <a href="#danh-sach-bac-si" onClick={(e) => { e.preventDefault(); scrollToSection("danh-sach-bac-si"); }} className="hover:text-yellow-300">Bác sĩ</a>
        <a href="#goi-dich-vu" onClick={(e) => { e.preventDefault(); scrollToSection("goi-dich-vu"); }} className="hover:text-yellow-300">Gói</a>
        <a href="#dat-lich" onClick={(e) => { e.preventDefault(); scrollToSection("dat-lich"); }} className="hover:text-yellow-300">Đặt lịch</a>
        <a href="#danh-gia" onClick={(e) => { e.preventDefault(); scrollToSection("danh-gia"); }} className="hover:text-yellow-300">Đánh giá</a>
      </nav>

      {/* Tìm kiếm + Auth */}
      <div className="flex items-center gap-4">
        <input
          type="text"
          placeholder="Tìm kiếm dịch vụ..."
          className="px-3 py-1 rounded-md text-black w-48"
        />
        <div className="text-sm font-semibold space-x-2">
          <a href="/dang-nhap" className="hover:text-yellow-300">Đăng nhập</a> |
          <a href="/dang-ky" className="hover:text-yellow-300">Đăng ký</a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;