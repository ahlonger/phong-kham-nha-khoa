import React from "react";
// import "./TrangChu.css"; // Kết nối CSS bạn đã có

const Trangchu = () => {
  return (
    
<div >
      {/* Banner */}
      <div className="hero-banner">
        <img src="/img/meodep.jpg" alt="Banner" />
      </div>

      {/* Danh sách bác sĩ */}
      <section className="doctor-section">
        <h2>Danh sách bác sĩ</h2>
        <div className="doctor-list">
          <div className="doctor-card">
            <img src="/img/chodep.jpg" alt="Bác sĩ A" />
            <h3>BS. Nguyễn Văn A</h3>
            <p>Chuyên khoa Răng Hàm Mặt</p>
            <button>Xem chi tiết</button>
          </div>

          <div className="doctor-card">
            <img src="/img/cho.jpg" alt="Bác sĩ B" />
            <h3>BS. Trần Thị B</h3>
            <p>Chuyên khoa Nha chu</p>
            <button>Xem chi tiết</button>
          </div>

          <div className="doctor-card">
            <img src="/img/meocute.jpg" alt="Bác sĩ C" />
            <h3>BS. Lê Văn C</h3>
            <p>Chuyên khoa Cấy ghép Implant</p>
            <button>Xem chi tiết</button>
          </div>

          <div className="doctor-card">
            <img src="/img/meongoan.jpg" alt="Bác sĩ D" />
            <h3>BS. Lê Văn D</h3>
            <p>Chuyên khoa Cấy ghép Implant</p>
            <button>Xem chi tiết</button>
          </div>
        </div>
      </section>

      {/* Gói dịch vụ */}
      <section className="package-section">
        <h2>Gói dịch vụ nổi bật</h2>
        <div className="package-list">
          <div className="package-card">
            <h3>Gói Khám Tổng Quát</h3>
            <p>Khám răng tổng thể, chụp X-quang, tư vấn chuyên sâu với bác sĩ.</p>
            <span className="price">500.000đ</span>
            <button>Đăng ký ngay</button>
          </div>

          <div className="package-card">
            <h3>Gói Làm Trắng Răng</h3>
            <p>Làm trắng răng công nghệ Laser Whitening không ê buốt.</p>
            <span className="price">1.200.000đ</span>
            <button>Đăng ký ngay</button>
          </div>

          <div className="package-card">
            <h3>Gói Niềng Răng Trả Góp</h3>
            <p>Niềng răng mắc cài kim loại, hỗ trợ trả góp 0% lãi suất.</p>
            <span className="price">19.000.000đ</span>
            <button>Đăng ký ngay</button>
          </div>

          <div className="package-card">
            <h3>Gói Cấy Ghép Implant</h3>
            <p>Trồng răng Implant tiêu chuẩn Hàn Quốc, bảo hành lâu dài.</p>
            <span className="price">12.000.000đ/răng</span>
            <button>Đăng ký ngay</button>
          </div>

          <div className="package-card">
            <h3>Gói Cấy Ghép Implant</h3>
            <p>Trồng răng Implant tiêu chuẩn Hàn Quốc, bảo hành lâu dài.</p>
            <span className="price">12.000.000đ/răng</span>
            <button>Đăng ký ngay</button>
          </div>

          <div className="package-card">
            <h3>Gói Cấy Ghép Implant</h3>
            <p>Trồng răng Implant tiêu chuẩn Hàn Quốc, bảo hành lâu dài.</p>
            <span className="price">12.000.000đ/răng</span>
            <button>Đăng ký ngay</button>
          </div>

          <div className="package-card">
            <h3>Gói Cấy Ghép Implant</h3>
            <p>Trồng răng Implant tiêu chuẩn Hàn Quốc, bảo hành lâu dài.</p>
            <span className="price">12.000.000đ/răng</span>
            <button>Đăng ký ngay</button>
          </div>

          <div className="package-card">
            <h3>Gói Cấy Ghép Implant</h3>
            <p>Trồng răng Implant tiêu chuẩn Hàn Quốc, bảo hành lâu dài.</p>
            <span className="price">12.000.000đ/răng</span>
            <button>Đăng ký ngay</button>
          </div>
        </div>
      </section>

      {/* Đặt lịch */}
      <section className="booking-section">  
        {/* Left: Form */}
        <div className="form-box">
          <h3>ĐẶT LỊCH HẸN KHÁM</h3>
          {/* Thông tin bệnh nhân */}
          <div className="form-group">
            <input type="text" placeholder="Họ tên bệnh nhân" />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Email" />
          </div>
          <div className="form-group">
            <input type="tel" placeholder="Số điện thoại" />
          </div>
          <div className="form-group">
            <input type="text" placeholder="Địa chỉ" />
          </div>
          {/* Chọn dịch vụ, bác sĩ, ghi chú */}
          <div className="form-group">
            <select>
              <option>Vui lòng chọn dịch vụ</option>
            </select>
          </div>
          <div className="form-group">
            <select>
              <option>Bác sĩ</option>
            </select>
          </div>
          <div className="form-group">
            <input type="text" placeholder="Ghi chú" />
          </div>
          {/* Ngày đặt lịch */}
          <div className="form-group">
            <input type="date" />
          </div>
          <div style={{marginTop: '20px'}}>
            <button className="submit-btn">Đặt lịch</button>
          </div>
        </div>
      </section>
</div>
  );
};

export default Trangchu;

