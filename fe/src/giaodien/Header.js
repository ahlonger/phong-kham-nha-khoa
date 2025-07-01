
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
function Header() {

  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  // Khi component được render, kiểm tra xem đã có user chưa
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/dangnhap");
  };

  const getAvatarPath = (filename) => {
  if (!filename) return "";
  return `http://localhost:3000/uploads/${filename}`;
};


  return(
    <>
      {/* HEADER */}
      <header>
        <div className="logo">
          <img src="/img/cho.jpg" alt="Logo" className="logo-img" />
          PHÒNG KHÁM AHLONG
        </div>

        <div className="center-nav">
          <nav>
            <Link to="#">Trang chủ</Link>
            <Link to="#">Dịch vụ</Link>
            <Link to="#">Gói</Link>
            <Link to="#">Bác sĩ</Link>
          </nav>
        </div>

        <div className="search-login">
          <div className="search-box">
            <input type="text" placeholder="Tìm kiếm dịch vụ..." />
          </div>
          <div className="auth-links">
            {/* <Link to="/dangnhap">Đăng nhập</Link> | <Link to="/dangky">Đăng ký</Link> */}
            {user ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <img
                src={getAvatarPath(user.avatar)}
                alt="Avatar"
                style={{
                  width: '35px',
                  height: '35px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  border: '1px solid #ccc'
                }}
              />
              <span>{user.name}</span>
              <span
                style={{ cursor: 'pointer', color: 'blue' }}
                onClick={handleLogout}
              >
               | Đăng xuất
              </span>
            </div>
          ) : (
            <>
              <Link to="/dangnhap">Đăng nhập</Link> | <Link to="/dangky">Đăng ký</Link>
            </>
          )}
          </div>
        </div>
      </header>
      
      </>
  )
}
export default Header