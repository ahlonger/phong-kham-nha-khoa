// src/components/Navbar2.jsx
import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaHome,
  FaUser,
  FaCalendarAlt,
  FaCube,
  FaCog,
  FaSignOutAlt
} from "react-icons/fa";

const Navbar2 = () => {
  const location = useLocation();

  const linkClass = (path) =>
    location.pathname === path
      ? "flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-md"
      : "flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-blue-50 rounded-md";

  return (
    <div className="h-screen w-64 bg-white border-r shadow-sm flex flex-col justify-between">
      <div>
        <div className="px-4 py-6">
          <h1 className="text-xl font-bold text-blue-700 flex items-center gap-2">
            <FaHome /> Phòng Khám
          </h1>
        </div>

        <nav className="flex flex-col gap-2 px-2">
          <Link to="/quan-ly-thong-tin" className={linkClass("/quan-ly-thong-tin")}>
            <FaUser /> Quản lý thông tin cá nhân
          </Link>

          <div>
            <Link to="/quan-ly-lich-lam-viec" className={linkClass("/quan-ly-lich-lam-viec")}>
              <FaCalendarAlt /> Quản lý lịch làm việc
            </Link>
            <div className="ml-6 mt-1 flex flex-col gap-1">
              <Link to="/lich-da-dang-ky" className={linkClass("/lich-da-dang-ky")}>
                <FaCalendarAlt className="text-sm" /> Lịch đã đăng ký
              </Link>
              <Link to="/lich-hen-hom-nay" className={linkClass("/lich-hen-hom-nay")}>
                <FaCalendarAlt className="text-sm" /> Lịch hẹn hôm nay
              </Link>
            </div>
          </div>

          <Link to="/dich-vu" className={linkClass("/quan-ly-dich-vu")}>
            <FaCube /> Quản lý dịch vụ
          </Link>

          <Link to="/cai-dat" className={linkClass("/cai-dat")}>
            <FaCog /> Cài đặt
          </Link>
        </nav>
      </div>

      <div className="px-4 py-4 border-t">
        <button className="flex items-center gap-2 text-red-600 hover:text-red-700">
          <FaSignOutAlt /> Đăng xuất
        </button>
      </div>
    </div>
  );
};

export default Navbar2;
