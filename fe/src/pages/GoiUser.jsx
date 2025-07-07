// src/pages/GoiUser.jsx
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import ThanhToan from "./ThanhToan";

import bannerImage from "../assets/banner.jpg";

const GoiUser = () => {
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      title: "Gói Khám Tổng Quát",
      desc: "Khám răng tổng thể, chụp X-quang, tư vấn chuyên sâu với bác sĩ.",
      price: "500.000đ",
      image: bannerImage,
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
      <section className="max-w-7xl mx-auto p-4 md:p-10 mt-20 md:mt-28 text-center bg-gray-50 rounded-xl shadow">
        <h2 className="text-2xl md:text-3xl font-bold text-[#0077cc] mb-8">
          Gói dịch vụ nổi bật
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-white p-5 rounded-xl shadow hover:-translate-y-1 transition relative"
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

      <ThanhToan
        isOpen={isPaymentOpen}
        onClose={() => setIsPaymentOpen(false)}
        service={selectedService}
      />
    </>
  );
};

export default GoiUser;
