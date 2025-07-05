// src/pages/LichHenHomNay.jsx
import React from "react";
import Navbar2 from "../components/Navbar2";

const LichHenHomNay = () => {
  const schedules = [
    {
      ngay: "05/07/2025",
      gioBatDau: "09:00",
      gioKetThuc: "10:00",
      phongKham: "Phòng 201",
      trangThai: "Đang chờ xác nhận",
    },
    {
      ngay: "05/07/2025",
      gioBatDau: "14:00",
      gioKetThuc: "15:00",
      phongKham: "Phòng 202",
      trangThai: "Đã xác nhận",
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Navbar2 />

      {/* Nội dung chính */}
      <div className="flex-1 p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center space-x-4">
            <div className="w-8 h-8 bg-gray-300 rounded flex items-center justify-center">
              <span className="text-gray-500 font-bold">□</span>
            </div>
            <h1 className="text-xl font-bold text-blue-600">Lịch hẹn hôm nay</h1>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-600">Phòng khám đa khoa</span>
            <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
              <span className="text-gray-500">👤</span>
            </div>
            <span className="text-sm text-gray-600">Bác sĩ</span>
          </div>
        </div>

        {/* Nội dung chính */}
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="mb-4">
            <h2 className="text-lg font-semibold">Danh sách lịch hẹn hôm nay</h2>
          </div>

          {/* Bảng dữ liệu */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-separate border-spacing-y-2">
              <thead>
                <tr className="bg-gray-300 text-gray-700">
                  <th className="py-3 px-4 font-semibold">Giờ bắt đầu</th>
                  <th className="py-3 px-4 font-semibold">Giờ kết thúc</th>
                  <th className="py-3 px-4 font-semibold">Phòng khám</th>
                  <th className="py-3 px-4 font-semibold">Trạng thái</th>
                </tr>
              </thead>
              <tbody>
                {schedules.map((schedule, index) => (
                  <tr key={index} className="bg-white hover:bg-gray-50 rounded-lg">
                    <td className="py-3 px-4">{schedule.gioBatDau}</td>
                    <td className="py-3 px-4">{schedule.gioKetThuc}</td>
                    <td className="py-3 px-4">{schedule.phongKham}</td>
                    <td className="py-3 px-4">
                      <span
                        className={`px-3 py-1 text-sm font-medium rounded-full ${
                          schedule.trangThai === "Đang chờ xác nhận"
                            ? "bg-yellow-200 text-yellow-800"
                            : "bg-blue-200 text-blue-800"
                        }`}
                      >
                        {schedule.trangThai}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LichHenHomNay;