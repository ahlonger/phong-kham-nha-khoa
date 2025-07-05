// src/pages/BenhNhan.jsx
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaStar } from "react-icons/fa";
import ThanhToan from "./ThanhToan";

// Import ảnh (thay bằng placeholder nếu cần)
import bannerImg from "../assets/banner.jpg";
import bacsiImg from "../assets/bacsi.png";
import serviceImg1 from "../assets/banner.jpg";
import serviceImg2 from "../assets/banner.jpg";
import serviceImg3 from "../assets/banner.jpg";

const BenhNhan = () => {
  console.log("BenhNhan component is rendering"); // Debug
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [isLoggedIn] = useState(false);
  const [reviews, setReviews] = useState([
    { name: "Phạm Minh Quân", rating: 4, date: "25/06/2025", comment: "Dịch vụ rất tốt, bác sĩ tận tâm. Tôi rất hài lòng!" },
    { name: "Lê Thanh Hà", rating: 3, date: "25/06/2025", comment: "Dịch vụ tốt, nhưng cần cải thiện thời gian chờ." },
    { name: "Phạm Hữu Thân Thương", rating: 5, date: "25/06/2025", comment: "Tuyệt vời, sẽ quay lại lần nữa!" },
  ]);
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const handleRating = (rate) => {
    setRating(rate);
  };

  const handleSubmitReview = (e) => {
    e.preventDefault();
    if (!isLoggedIn) {
      alert("Bạn phải đăng nhập để thực hiện đánh giá!");
      return;
    }
    if (rating > 0 && comment.trim()) {
      const newReview = { name: "Người dùng", rating, date: new Date().toLocaleDateString(), comment };
      setReviews([...reviews, newReview]);
      setRating(0);
      setComment("");
      alert("Cảm ơn bạn đã đánh giá!");
    } else {
      alert("Vui lòng chọn số sao và nhập bình luận!");
    }
  };

  const handleBuy = (service) => {
    console.log("Opening payment for:", service);
    setSelectedService(service);
    setIsPaymentOpen(true);
  };

  return (
    <div className="bg-[#f7f9fc]">
      <Navbar />
      <div className="pt-16">
        <div id="home" className="w-full relative">
          <img src={bannerImg} alt="Banner" className="w-full h-[500px] object-cover" />
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl font-bold mb-4">Phòng khám Anh Thương đẹp trai</h1>
              <p className="text-lg mb-6">Nơi mang đến nụ cười hoàn hảo với đội ngũ bác sĩ chuyên môn thấp và công nghệ lỗi thời.</p>
              <h2>Chúng tôi cam kết cho rụng răng hết những thằng nói mất dạy</h2>
              <button className="bg-[#0077cc] text-white px-6 py-3 rounded-lg hover:bg-[#005fa3] mt-5 transition">Đặt lịch ngay</button>
            </div>
          </div>
        </div>

        <section id="danh-sach-bac-si" className="w-[1200px] mx-auto p-10 rounded-xl text-center bg-gray-100">
          <h2 className="text-2xl font-bold text-[#0077cc] mb-8">Danh sách bác sĩ</h2>
          <div className="flex flex-wrap justify-between gap-6">
            {[{ name: "BS. Nguyễn Văn A", spec: "Răng Hàm Mặt" }, { name: "BS. Trần Thị B", spec: "Nha chu" }, { name: "BS. Lê Văn C", spec: "Cấy ghép Implant" }, { name: "BS. Phạm Thị D", spec: "Nha khoa thẩm mỹ" }].map((bs, i) => (
              <div key={i} className="bg-white p-5 rounded-xl w-[250px] shadow hover:-translate-y-1 transition">
                <img src={bacsiImg} className="w-24 h-24 object-cover rounded-full mx-auto mb-4" alt={bs.name} />
                <h3 className="font-semibold text-gray-800">{bs.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{bs.spec}</p>
                <button className="bg-[#0077cc] text-white px-4 py-2 rounded hover:bg-[#005fa3]">Xem chi tiết</button>
              </div>
            ))}
          </div>
        </section>

        <section id="goi-dich-vu" className="w-[1200px] mx-auto my-10 p-10 bg-gray-50 text-center rounded-xl shadow">
          <h2 className="text-2xl font-bold text-[#0077cc] mb-8">Gói dịch vụ nổi bật</h2>
          <div className="flex justify-between">
            {[
              { title: "Gói Khám Tổng Quát", desc: "Khám răng tổng thể, chụp X-quang, tư vấn chuyên sâu với bác sĩ.", price: "500.000đ", image: serviceImg1, validity: "Thời hạn 6 tháng" },
              { title: "Gói Làm Trắng Răng", desc: "Làm trắng răng công nghệ Laser Whitening không ê buốt.", price: "1.200.000đ", image: serviceImg2, validity: "Thời hạn 6 tháng" },
              { title: "Gói Niềng Răng Trả Góp", desc: "Niềng răng mắc cài kim loại, hỗ trợ trả góp 0% lãi suất.", price: "19.000.000đ", image: serviceImg3, validity: "Thời hạn 6 tháng" },
            ].map((service, idx) => (
              <div key={idx} className="w-[30%] bg-white p-5 rounded-xl shadow hover:-translate-y-1 transition relative">
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

        <section id="dat-lich" className="w-[1200px] mx-auto flex justify-between items-start gap-10 bg-white p-8 rounded-lg shadow">
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

        <section id="danh-gia" className="w-[1200px] mx-auto my-10 p-10 bg-gray-50 text-center rounded-xl shadow">
          <h2 className="text-2xl font-bold text-[#0077cc] mb-8">Đánh giá của bạn</h2>
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Đánh giá từ khách hàng</h3>
            {reviews.map((review, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow mb-4 text-left">
                <div className="flex justify-between items-center">
                  <span className="font-medium">{review.name}</span>
                  <span className="text-sm text-gray-500">{review.date}</span>
                </div>
                <div className="flex mt-2">
                  {[...Array(5)].map((star, i) => <FaStar key={i} size={16} className={i < review.rating ? "text-yellow-400" : "text-gray-300"} />)}
                </div>
                <p className="mt-2 text-gray-600">{review.comment}</p>
              </div>
            ))}
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Viết đánh giá của bạn</h3>
            <form onSubmit={handleSubmitReview} className="space-y-4">
              <div className="flex mb-4">
                {[...Array(5)].map((star, index) => {
                  const ratingValue = index + 1;
                  return <FaStar key={index} size={30} className={`cursor-pointer ${ratingValue <= rating ? "text-yellow-400" : "text-gray-300"}`} onClick={() => handleRating(ratingValue)} />;
                })}
              </div>
              <textarea value={comment} onChange={(e) => setComment(e.target.value)} placeholder="Nhập nội dung đánh giá..." className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" rows="4" />
              <button type="submit" className="w-full bg-[#0077cc] text-white py-2 rounded-lg hover:bg-[#005fa3] transition">Gửi</button>
            </form>
          </div>
        </section>
        <Footer />
      </div>

      <ThanhToan isOpen={isPaymentOpen} onClose={() => setIsPaymentOpen(false)} service={selectedService} />
    </div>
  );
};

export default BenhNhan;