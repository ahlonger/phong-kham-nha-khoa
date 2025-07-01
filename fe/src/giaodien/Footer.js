function Footer() {

  return(
    <>
     {/* Footer */}
      <footer className="site-footer">
        <div className="footer-content">
          <div className="footer-logo">
            <h3>PHÒNG KHÁM AHLONG</h3>
            <p>PHÒNG KHÁM AHLONG – Trao nụ cười, gửi niềm tin!</p>
            <p>
              Chăm sóc sức khỏe toàn diện với đội ngũ bác sĩ chuyên nghiệp và công nghệ
              hiện đại.
            </p>
          </div>

          <div className="footer-links">
            <h4>Liên kết</h4>
            <ul>
              <li><a href="#">Trang chủ</a></li>
              <li><a href="#">Dịch vụ</a></li>
              <li><a href="#">Gói</a></li>
              <li><a href="#">Bác sĩ</a></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4>Liên hệ</h4>
            <p>Địa chỉ: Nguyễn Văn Linh-Đà Nẵng</p>
            <p>Điện thoại: 0123 456 789</p>
            <p>Email: ahlong@gmail.com</p>
          </div>
        </div>
        <div className="footer-bottom">
          &copy; 2025 PHÒNG KHÁM AHLONG. All rights reserved.
        </div>
      </footer>
      </>
  )
}
export default Footer