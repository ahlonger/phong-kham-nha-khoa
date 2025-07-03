import React, { useState } from "react";
import { FaUserMd, FaEnvelope, FaLock, FaHospitalAlt } from "react-icons/fa";
import { Link } from "react-router-dom"; // Thêm Link từ react-router-dom

const DangKy = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    if (!name.trim()) newErrors.name = "Họ và tên không được để trống.";
    if (!email.trim()) newErrors.email = "Email không được để trống.";
    else if (!/\S+@\S+\.\S+/.test(email))
      newErrors.email = "Email không hợp lệ.";
    if (!password.trim()) newErrors.password = "Mật khẩu không được để trống.";
    else if (password.length < 6)
      newErrors.password = "Mật khẩu ít nhất 6 ký tự.";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Đăng ký thành công!");
      setName("");
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-blue-50">
      {/* LEFT BANNER */}
      <div className="hidden md:flex flex-col justify-center items-center bg-blue-700 text-white w-1/2 p-10">
        <FaHospitalAlt size={60} className="mb-4" />
        <h1 className="text-3xl font-bold mb-2">Phòng Khám Sức Khỏe</h1>
        <p className="text-center max-w-xs">
          Chăm sóc sức khỏe tận tâm, chuyên nghiệp & an toàn. Hãy đăng ký để bắt
          đầu hành trình chăm sóc sức khỏe của bạn.
        </p>
        <img
          src="https://cdn-icons-png.flaticon.com/512/3774/3774299.png"
          alt="clinic"
          className="w-64 mt-6"
        />
      </div>

      {/* RIGHT FORM */}
      <div className="flex flex-col justify-center items-center w-full md:w-1/2 p-8">
        <h2 className="text-2xl font-bold text-blue-700 mb-6">
          Đăng Ký Tài Khoản
        </h2>
        <form className="space-y-4 w-full max-w-sm" onSubmit={handleSubmit}>
          <div>
            <label className="block mb-1 text-gray-600">Họ và tên</label>
            <div className="flex items-center border rounded px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500">
              <FaUserMd className="text-blue-500 mr-2" />
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Nhập họ tên"
                className="w-full focus:outline-none"
              />
            </div>
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          <div>
            <label className="block mb-1 text-gray-600">Email</label>
            <div className="flex items-center border rounded px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500">
              <FaEnvelope className="text-blue-500 mr-2" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Nhập email"
                className="w-full focus:outline-none"
              />
            </div>
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <label className="block mb-1 text-gray-600">Mật khẩu</label>
            <div className="flex items-center border rounded px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500">
              <FaLock className="text-blue-500 mr-2" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Nhập mật khẩu"
                className="w-full focus:outline-none"
              />
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Đăng Ký
          </button>

          {/* Nút chuyển hướng sang đăng nhập */}
          <p className="text-center text-gray-600">
            Bạn đã có tài khoản?{" "}
            <Link to="/dang-nhap" className="text-blue-600 hover:underline">
              Đăng nhập ngay
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default DangKy;