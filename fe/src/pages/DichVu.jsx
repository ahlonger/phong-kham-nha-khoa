// src/pages/DichVu.jsx
import React, { useState } from "react";
import Navbar2 from "../components/Navbar2";
import { FaSearch, FaFolderOpen } from "react-icons/fa";

const DichVu = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const services = [
    {
      name: "Khám dạ dày",
      email: "abc@gmail.com",
      date: "26/06/2025",
      amount: "300000",
      status: "Đã thanh toán",
    },
    {
      name: "Khám dạ dày",
      email: "abc@gmail.com",
      date: "26/06/2025",
      amount: "300000",
      status: "Đã thanh toán",
    },
    {
      name: "Khám dạ dày",
      email: "abc@gmail.com",
      date: "26/06/2025",
      amount: "300000",
      status: "Đã thanh toán",
    },
  ];

  const filteredServices = services.filter((service) =>
    service.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex">
      <Navbar2 />

      <div className="flex-1 p-8 bg-gray-50 min-h-screen">
        {/* Tiêu đề */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-blue-700 flex items-center gap-2">
            <FaFolderOpen /> Quản lý dịch vụ
          </h1>

          <div className="flex items-center border rounded px-3 py-2 bg-white shadow-sm">
            <FaSearch className="text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Tìm kiếm gói dịch vụ..."
              className="outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Bảng dịch vụ */}
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="flex items-center bg-blue-100 px-4 py-2 font-bold">
            <FaFolderOpen className="mr-2 text-blue-600" />
            Danh sách dịch vụ
          </div>
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-200 text-gray-700">
                <th className="px-4 py-2">Tên dịch vụ</th>
                <th className="px-4 py-2">Email bệnh nhân</th>
                <th className="px-4 py-2">Ngày</th>
                <th className="px-4 py-2">Thành tiền</th>
                <th className="px-4 py-2">Trạng thái</th>
              </tr>
            </thead>
            <tbody>
              {filteredServices.map((s, index) => (
                <tr
                  key={index}
                  className="border-t hover:bg-gray-50 transition"
                >
                  <td className="px-4 py-2">{s.name}</td>
                  <td className="px-4 py-2">{s.email}</td>
                  <td className="px-4 py-2">{s.date}</td>
                  <td className="px-4 py-2">{s.amount} vnđ</td>
                  <td className="px-4 py-2">{s.status}</td>
                </tr>
              ))}
              {filteredServices.length === 0 && (
                <tr>
                  <td
                    colSpan="5"
                    className="text-center px-4 py-6 text-gray-500"
                  >
                    Không tìm thấy dịch vụ phù hợp.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DichVu;
