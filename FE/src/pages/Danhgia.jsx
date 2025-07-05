// src/pages/DanhGia.jsx
import React from "react";
import Sidebar from "../components/Sidebar";
import { FaCheck, FaDownload, FaStar } from "react-icons/fa";

const danhGiaData = [
  {
    id: 1,
    tenKhach: "Nguyễn Văn A",
    email: "nva@gmail.com",
    soSao: 5,
    binhLuan: "Dịch vụ rất tốt, bác sĩ tư vấn tận tâm. Tôi rất hài lòng!",
    ngay: "25/06/2025",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    tenKhach: "Trần Thị B",
    email: "tran.b@gmail.com",
    soSao: 3,
    binhLuan: "Thời gian chờ hơi lâu, mong được cải thiện.",
    ngay: "24/06/2025",
    avatar: "https://randomuser.me/api/portraits/men/31.jpg",
  },
  {
    id: 3,
    tenKhach: "Lê Minh C",
    email: "le.c@gmail.com",
    soSao: 4,
    binhLuan: "Không gian sạch sẽ, lễ tân thân thiện. Sẽ quay lại!",
    ngay: "22/06/2025",
    avatar: "https://randomuser.me/api/portraits/men/30.jpg",
  },
  {
    id: 4,
    tenKhach: "Lê Minh C",
    email: "le.c@gmail.com",
    soSao: 4,
    binhLuan: "Không gian sạch sẽ, lễ tân thân thiện. Sẽ quay lại!",
    ngay: "22/06/2025",
    avatar: "https://randomuser.me/api/portraits/men/30.jpg",
  },
];

const DanhGia = () => {
  const handleDuyet = (id) => {
    alert(`Đã duyệt đánh giá ID: ${id}`);
  };

  const handleXuat = (id) => {
    alert(`Đã xuất đánh giá ID: ${id}`);
  };

  return (
    <div className="flex bg-gray-50 min-h-screen">
      <Sidebar />

      <div className="flex-1 p-8 pl-72">
        <h1 className="text-2xl font-bold mb-6 flex items-center">
          <span className="mr-2">👥</span> Danh sách đánh giá
        </h1>

        <div className="space-y-6">
          {danhGiaData.map((dg) => (
            <div
              key={dg.id}
              className="flex justify-between items-start bg-blue-50 rounded-2xl p-6 border border-blue-100"
            >
              {/* Bên trái: Avatar và thông tin */}
              <div className="flex items-start space-x-4">
                <img
                  src={dg.avatar}
                  alt={dg.tenKhach}
                  className="w-16 h-16 rounded-full object-cover border-2 border-blue-300"
                />
                <div>
                  <h2 className="text-lg font-semibold text-blue-900">
                    {dg.tenKhach}
                  </h2>
                  <p className="text-gray-600 text-sm">
                    Email: {dg.email} • Ngày gửi: {dg.ngay}
                  </p>
                  <p className="mt-2 text-gray-800">{dg.binhLuan}</p>
                  <div className="flex space-x-3 mt-4">
                    <button
                      onClick={() => handleDuyet(dg.id)}
                      className="flex items-center bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-full text-sm"
                    >
                      <FaCheck className="mr-1" /> Duyệt
                    </button>
                    <button
                      onClick={() => handleXuat(dg.id)}
                      className="flex items-center bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-full text-sm"
                    >
                      <FaDownload className="mr-1" /> Xuất
                    </button>
                  </div>
                </div>
              </div>

              {/* Bên phải: Số sao */}
              <div className="flex items-center space-x-1">
                {Array.from({ length: dg.soSao }).map((_, idx) => (
                  <FaStar key={idx} className="text-yellow-400 w-5 h-5" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DanhGia;
