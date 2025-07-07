// src/pages/DanhSachBacSi.jsx
import React from "react";
import bacsiImg from "../assets/bacsi.png";
import Navbar from "../components/Navbar";

const DanhSachBacSi = () => {
  return (
    <>
      <Navbar />
      <section className="max-w-7xl mx-auto p-4 md:p-10 mt-20 md:mt-28 text-center bg-gray-100 rounded-xl">
        <h2 className="text-2xl md:text-3xl font-bold text-[#0077cc] mb-8">
          Danh sách bác sĩ
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[
            { name: "BS. Phạm Hữu Thân Thương", spec: "Phụ Khoa" },
            { name: "BS. Trần Thị B", spec: "Nha chu" },
            { name: "BS. Lê Văn C", spec: "Cấy ghép Implant" },
            { name: "BS. Nguyễn Tấn Dũng", spec: "Khám chim" },
            { name: "BS. Phạm Minh Quân", spec: "Phám Trĩ" },
            { name: "BS. Lê Thanh Hà", spec: "Chống cận" },
            { name: "BS. Võ Hồ Thành Trung", spec: "Chống Ngu" },
            { name: "BS. Phạm Thị D", spec: "Nha khoa thẩm mỹ" },
          ].map((bs, i) => (
            <div
              key={i}
              className="bg-white p-5 rounded-xl shadow hover:-translate-y-1 transition"
            >
              <img
                src={bacsiImg}
                className="w-24 h-24 object-cover rounded-full mx-auto mb-4"
                alt={bs.name}
              />
              <h3 className="font-semibold text-gray-800">{bs.name}</h3>
              <p className="text-sm text-gray-600 mb-2">{bs.spec}</p>
              <button className="bg-[#0077cc] text-white px-4 py-2 rounded hover:bg-[#005fa3]">
                Xem chi tiết
              </button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default DanhSachBacSi;
