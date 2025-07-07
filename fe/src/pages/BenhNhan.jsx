// src/pages/BenhNhan.jsx
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ThanhToan from "./ThanhToan";
import DanhGiaUser from "./DanhGiaUser";
import bannerImg from "../assets/banner.jpg";
import bacsiImg from "../assets/bacsi.png";
import serviceImg1 from "../assets/banner.jpg";
import serviceImg2 from "../assets/banner.jpg";
import serviceImg3 from "../assets/banner.jpg";

const BenhNhan = () => {
  const [rating, setRating] = useState(0);
  const [isLoggedIn] = useState(false);
  const [reviews, setReviews] = useState([
    { name: "Phạm Minh Quân", rating: 4, date: "25/06/2025", comment: "Dịch vụ rất tốt, bác sĩ tận tâm. Tôi rất hài lòng!" },
    { name: "Lê Thanh Hà", rating: 3, date: "25/06/2025", comment: "Dịch vụ tốt, nhưng cần cải thiện thời gian chờ." },
    { name: "Phạm Hữu Thân Thương", rating: 5, date: "25/06/2025", comment: "Tuyệt vời, sẽ quay lại lần nữa!" },
  ]);
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);



  const handleBuy = (service) => {
    setSelectedService(service);
    setIsPaymentOpen(true);
  };

  return (
    <div className="bg-[#f7f9fc]">
      <Navbar />
      <div className="pt-16">
        {/* Banner */}
        <div id="home" className="w-full relative">
          <img src={bannerImg} alt="Banner" className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover" />
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center px-4">
            <div className="text-center text-white">
              <h1 className="text-2xl md:text-4xl font-bold mb-4">Phòng khám Anh Thương đẹp trai</h1>
              <p className="text-base md:text-lg mb-4">Nơi mang đến nụ cười hoàn hảo với đội ngũ bác sĩ chuyên môn thấp và công nghệ lỗi thời.</p>
              <h2 className="text-sm md:text-base">Chúng tôi cam kết cho rụng răng hết những thằng nói mất dạy</h2>
              <button className="bg-[#0077cc] text-white px-6 py-3 rounded-lg hover:bg-[#005fa3] mt-5 transition">Đặt lịch ngay</button>
            </div>
          </div>
        </div>

        {/* Danh sách bác sĩ */}
        <section id="danh-sach-bac-si" className="w-full max-w-[1200px] mx-auto p-5 md:p-10 rounded-xl text-center bg-gray-100">
          <h2 className="text-xl md:text-2xl font-bold text-[#0077cc] mb-8">Danh sách bác sĩ</h2>
          <div className="flex flex-wrap justify-center md:justify-between gap-6">
            {[{ name: "BS. Nguyễn Văn A", spec: "Răng Hàm Mặt" }, { name: "BS. Trần Thị B", spec: "Nha chu" }, { name: "BS. Lê Văn C", spec: "Cấy ghép Implant" }, { name: "BS. Phạm Thị D", spec: "Nha khoa thẩm mỹ" }].map((bs, i) => (
              <div key={i} className="bg-white p-5 rounded-xl w-full sm:w-[45%] md:w-[23%] shadow hover:-translate-y-1 transition">
                <img src={bacsiImg} className="w-24 h-24 object-cover rounded-full mx-auto mb-4" alt={bs.name} />
                <h3 className="font-semibold text-gray-800">{bs.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{bs.spec}</p>
                <button className="bg-[#0077cc] text-white px-4 py-2 rounded hover:bg-[#005fa3]">Xem chi tiết</button>
              </div>
            ))}
          </div>
        </section>

        {/* Gói dịch vụ */}
        <section id="goi-dich-vu" className="w-full max-w-[1200px] mx-auto my-10 p-5 md:p-10 bg-gray-50 text-center rounded-xl shadow">
          <h2 className="text-xl md:text-2xl font-bold text-[#0077cc] mb-8">Gói dịch vụ nổi bật</h2>
          <div className="flex flex-col md:flex-row md:justify-between gap-6">
            {[
              { title: "Gói Khám Tổng Quát", desc: "Khám răng tổng thể, chụp X-quang, tư vấn chuyên sâu với bác sĩ.", price: "500.000đ", image: serviceImg1, validity: "Thời hạn 6 tháng" },
              { title: "Gói Làm Trắng Răng", desc: "Làm trắng răng công nghệ Laser Whitening không ê buốt.", price: "1.200.000đ", image: serviceImg2, validity: "Thời hạn 6 tháng" },
              { title: "Gói Niềng Răng Trả Góp", desc: "Niềng răng mắc cài kim loại, hỗ trợ trả góp 0% lãi suất.", price: "19.000.000đ", image: serviceImg3, validity: "Thời hạn 6 tháng" },
            ].map((service, idx) => (
              <div key={idx} className="w-full md:w-[32%] bg-white p-5 rounded-xl shadow hover:-translate-y-1 transition relative">
                <div className="w-full h-40 bg-gray-300 mb-4" style={{ backgroundImage: `url(${service.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
                <h3 className="font-bold text-gray-800 mb-2">{service.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{service.desc}</p>
                <span className="block font-bold text-[#e74c3c] mb-3">{service.price}</span>
                <p className="text-sm text-gray-500 mb-3">{service.validity}</p>
                <button onClick={() => handleBuy(service)} className="bg-[#0077cc] text-white px-4 py-2 rounded hover:bg-[#005fa3]">Mua</button>
              </div>
            ))}
          </div>
        </section>

        {/* Đặt lịch */}
        <section id="dat-lich" className="w-full max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-start gap-10 bg-white p-5 md:p-8 rounded-lg shadow">
          <div className="w-full md:w-1/3 bg-white p-6 border-2 border-[#005b94] rounded-md shadow-md">
            <h2 className="text-orange-500 text-lg md:text-xl font-semibold text-center mb-4">ĐẶT LỊCH HẸN KHÁM</h2>
            <div className="space-y-4">
              <select className="w-full border p-2 rounded"><option>Vui lòng chọn phòng khám</option></select>
              <select className="w-full border p-2 rounded"><option>Vui lòng chọn chuyên khoa</option></select>
              <select className="w-full border p-2 rounded"><option>Vui lòng chọn bác sĩ</option></select>
              <div className="flex flex-col sm:flex-row gap-3">
                <input type="date" className="w-full sm:w-1/2 border p-2 rounded" />
                <select className="w-full sm:w-1/2 border p-2 rounded"><option>Chọn giờ khám</option></select>
              </div>
              <button className="w-full bg-[#2e7cc7] text-white py-2 rounded hover:bg-[#1b5fa7]">Tiếp theo</button>
            </div>
          </div>
        </section>

        {/* Đánh giá */}
        <section id="danh-gia" className="w-full max-w-[1200px] mx-auto my-10 p-5 md:p-10 bg-gray-50 text-center rounded-xl shadow">
          <DanhGiaUser />
        </section>

        <Footer />
      </div>

      <ThanhToan isOpen={isPaymentOpen} onClose={() => setIsPaymentOpen(false)} service={selectedService} />
    </div>
  );
};

export default BenhNhan;
