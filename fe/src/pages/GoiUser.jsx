// src/pages/GoiUser.jsx
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import ThanhToan from "./ThanhToan";

// ✅ Import ảnh đúng cách trong React
import bannerImage from "../assets/banner.jpg";
import bacsiImage from "../assets/bacsi.png";

const GoiUser = () => {
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  // ✅ Mảng dịch vụ có ảnh import trực tiếp
  const services = [
    {
      title: "Gói Khám Tổng Quát",
      desc: "Khám răng tổng thể, chụp X-quang, tư vấn chuyên sâu với bác sĩ.",
      price: "500.000đ",
      image: bannerImage, // ảnh khác cho đa dạng
      validity: "Thời hạn 6 tháng",
    },
    {
      title: "Gói Làm Trắng Răng",
      desc: "Làm trắng răng công nghệ Laser Whitening không ê buốt.",
      price: "1.200.000đ",
      image: bannerImage,
      validity: "Thời hạn 6 tháng",
    },
    {
      title: "Gói Niềng Răng Trả Góp",
      desc: "Niềng răng mắc cài kim loại, hỗ trợ trả góp 0% lãi suất.",
      price: "19.000.000đ",
      image: bannerImage,
      validity: "Thời hạn 6 tháng",
    },
  ];

  const handleBuy = (service) => {
    setSelectedService(service);
    setIsPaymentOpen(true);
  };

  return (
    <>
      <Navbar />
      <section
        id="goi-dich-vu"
        className="w-[1200px] mx-auto my-10 p-10 bg-gray-50 mt-10 text-center rounded-xl shadow"
      >
        <h2 className="text-2xl font-bold text-[#0077cc] mb-8">
          Gói dịch vụ nổi bật
        </h2>
        <div className="flex justify-between">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="w-[30%] bg-white p-5 rounded-xl shadow hover:-translate-y-1 transition relative"
            >
              <div
                className="w-full h-40 bg-gray-300 mb-4 rounded"
                style={{
                  backgroundImage: `url(${service.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <h3 className="font-bold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-sm text-gray-600 mb-3">{service.desc}</p>
              <span className="block font-bold text-[#e74c3c] mb-3">
                {service.price}
              </span>
              <p className="text-sm text-gray-500 mb-3">{service.validity}</p>
              <button
                onClick={() => handleBuy(service)}
                className="bg-[#0077cc] text-white px-4 py-2 rounded hover:bg-[#005fa3]"
              >
                Mua
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* ✅ Popup thanh toán */}
      <ThanhToan
        isOpen={isPaymentOpen}
        onClose={() => setIsPaymentOpen(false)}
        service={selectedService}
      />
    </>
  );
};

export default GoiUser;
