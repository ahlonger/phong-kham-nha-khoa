// src/pages/LichHen.jsx
import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import {
  FaCalendarAlt,
  FaFileExport,
  FaSearch,
} from "react-icons/fa";

const LichHen = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [lichHenData, setLichHenData] = useState([
    {
      id: 1,
      benhNhan: "Nguyễn Văn A",
      bacSi: "BS. Lê Văn T",
      thoiGian: "26/06/2025 - 09:30",
      dichVu: "Khám tổng quát",
      trangThai: "Đã xác nhận",
    },
    {
      id: 2,
      benhNhan: "Trần Thị B",
      bacSi: "BS. Nguyễn Thị H",
      thoiGian: "26/06/2025 - 14:00",
      dichVu: "Khám da liễu",
      trangThai: "Đã xác nhận",
    },
  ]);

  const filteredData = lichHenData.filter((item) =>
    item.benhNhan.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.bacSi.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.dichVu.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleExportReport = () => {
    alert("Xuất báo cáo thành công! (Tính năng giả lập)");
  };

  const handleViewDetail = (item) => {
    alert(
      `Chi tiết lịch hẹn:\nBệnh nhân: ${item.benhNhan}\nBác sĩ: ${item.bacSi}\nThời gian: ${item.thoiGian}\nDịch vụ: ${item.dichVu}\nTrạng thái: ${item.trangThai}`
    );
  };

  const handleCancelAppointment = (id) => {
    if (window.confirm("Bạn có chắc muốn hủy lịch hẹn này?")) {
      setLichHenData((prevData) =>
        prevData.map((item) =>
          item.id === id ? { ...item, trangThai: "Đã huỷ" } : item
        )
      );
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <div className="flex-1 p-6 pl-72">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            <FaCalendarAlt /> Quản lý lịch hẹn
          </h1>
          <button
            onClick={handleExportReport}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 shadow-md"
          >
            <FaFileExport /> Xuất báo cáo
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-6">
            <div className="relative w-1/3">
              <input
                type="text"
                placeholder="Tìm kiếm bệnh nhân, bác sĩ, dịch vụ..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <FaSearch className="absolute left-3 top-2.5 text-gray-400" />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-separate border-spacing-y-2">
              <thead>
                <tr className="bg-gray-50 text-gray-700">
                  <th className="py-3 px-4 font-semibold">Bệnh nhân</th>
                  <th className="py-3 px-4 font-semibold">Bác sĩ</th>
                  <th className="py-3 px-4 font-semibold">Thời gian</th>
                  <th className="py-3 px-4 font-semibold">Dịch vụ</th>
                  <th className="py-3 px-4 font-semibold">Trạng thái</th>
                  <th className="py-3 px-4 font-semibold">Hành động</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((item) => (
                  <tr key={item.id} className="bg-white hover:bg-gray-50 rounded-lg">
                    <td className="py-3 px-4">{item.benhNhan}</td>
                    <td className="py-3 px-4">{item.bacSi}</td>
                    <td className="py-3 px-4">{item.thoiGian}</td>
                    <td className="py-3 px-4">{item.dichVu}</td>
                    <td className="py-3 px-4">
                      <span
                        className={`px-3 py-1 text-sm font-medium rounded-full ${
                          item.trangThai === "Đã xác nhận"
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {item.trangThai}
                      </span>
                    </td>
                    <td className="py-3 px-4 whitespace-nowrap">
                      <button
                        onClick={() => handleViewDetail(item)}
                        className="text-blue-600 hover:text-blue-800 mr-2 text-sm"
                      >
                        Chi tiết
                      </button>
                      {item.trangThai === "Đã xác nhận" && (
                        <button
                          onClick={() => handleCancelAppointment(item.id)}
                          className="text-red-600 hover:text-red-800 text-sm"
                        >
                          Hủy
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {filteredData.length === 0 && (
              <p className="text-center text-gray-500 mt-6">
                Không có lịch hẹn nào phù hợp.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LichHen;
