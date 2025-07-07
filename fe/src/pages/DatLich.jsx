// src/pages/DatLich.jsx
import React from "react";
import Navbar from "../components/Navbar";

const DatLich = () => {
  return (
    <>
    <Navbar />
    <section id="dat-lich" className="w-[1200px] mx-auto flex justify-between mt-10 items-start gap-10 bg-white p-8 rounded-lg shadow">
      <div className="w-1/3 bg-white p-6 border-2 border-[#005b94] rounded-md shadow-md">
        <h2 className="text-orange-500 text-xl font-semibold text-center mb-4">ĐẶT LỊCH HẸN KHÁM</h2>
        <div className="space-y-4">
          <select className="w-full border p-2 rounded"><option>Vui lòng chọn phòng khám</option></select>
          <select className="w-full border p-2 rounded"><option>Vui lòng chọn chuyên khoa</option></select>
          <select className="w-full border p-2 rounded"><option>Vui lòng chọn bác sĩ</option></select>
          <div className="flex gap-3">
            <input type="date" className="w-1/2 border p-2 rounded" />
            <select className="w-1/2 border p-2 rounded"><option>Chọn giờ khám</option></select>
          </div>
          <button className="w-full bg-[#2e7cc7] text-white py-2 rounded hover:bg-[#1b5fa7]">Tiếp theo</button>
        </div>
      </div>
    </section>
    </>
  );
};

export default DatLich;