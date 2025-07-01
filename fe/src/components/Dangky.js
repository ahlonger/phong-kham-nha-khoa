import React, { useState } from 'react';
import Api from './Api';
import { useNavigate } from "react-router-dom";
const DangKy = () => {
  const navigate = useNavigate();
  // đăng nhập
 const [isLoginForm, setIsLoginForm] = useState(false);
 const [login, setLogin] = useState({ 
  email: "", 
  password: "" 
  });

  // đăng ký  
 const [inputs,setInput] = useState({
    name :"",
    email:"", 
    password: "",
    repassword: "",
    avatar:"",
    // address:"",
    // phone:""
    role:""
   });

   const [errors,seterrors] = useState({});
   const [avatar, setAvatar] = useState("");
   const [file, setFile] = useState(null);
   
   // Hàm kiểm tra file ảnh hợp lệ
    const validateFile = (file) => {
    const maxSize = 1024 * 1024; // 1MB
    const allowedTypes = ["png", "jpg", "jpeg"];

    if (!file) return "Vui lòng chọn ảnh đại diện!";
    if (file.size > maxSize) return "Ảnh phải nhỏ hơn 1MB!";

    let fileExtension = file.name.split(".").pop().toLowerCase();
    if (!allowedTypes.includes(fileExtension)) return "Ảnh không đúng định dạng (chỉ hỗ trợ png, jpg, jpeg)!";

    return null;
    };
    // xử lý thay đổi input(đăng ký)
   const hasInput = (e) => {
        const nameInput = e.target.name;
        const value = e.target.value;
        setInput(state => ({...state,[nameInput]:value})
    )}
    // xử lý thay đổi input(đăng nhập)
    const handleLoginInput = (e) => {
    const { name, value } = e.target;
    setLogin((prev) => ({ ...prev, [name]: value }));
    };
    // xử lý thay đổi file
    const hasInputchange = (e) => {
    const file = e.target.files[0];
        if (file) {
            let fileError = validateFile(file);
            if (fileError) {
                seterrors((prev) => ({ ...prev, avatar: fileError }));
                return;
            }

            let reader = new FileReader();
            reader.onload = (e) => {
                setAvatar(e.target.result); // Base64 để gửi qua api
                setFile(file); // Lưu file gốc để gửi API
            };
            reader.readAsDataURL(file);
        }
    };
   function hasFormSubmit(e){
    e.preventDefault();
        let errorsSubmit = {};
        let flag = true;

        if(inputs.name == ""){
            errorsSubmit.name = "vui long nhap ten";
            flag = false;
        }
        if(inputs.email == ""){
            errorsSubmit.email = "vui lòng nhập email";
            flag = false;
        } 
        if(inputs.password == ""){
            errorsSubmit.password = "vui lòng nhập password";
            flag = false;
        }
        // kiểm tra password khớp không
        if (inputs.password != inputs.repassword) {
        errorsSubmit.repassword = "Mật khẩu nhập lại không khớp";
        flag = false;
        }
        // if(inputs.phone == ""){
        //     errorsSubmit.phone = "vui lòng nhập phone";
        //     flag = false;
        // }
        // if(inputs.address == ""){
        //     errorsSubmit.address = "vui lòng nhập address";
        //     flag = false;
        // }
        if(!file){
            errorsSubmit.avatar = "vui lòng nhập avatar";
            flag = false;
        }
         if(inputs.role == ""){
            errorsSubmit.role = "vui lòng nhập role";
            flag = false;
        }
        if(!flag){
            seterrors(errorsSubmit);
        }else {        
            const formData = new FormData();
            formData.append("name", inputs.name);
            formData.append("email", inputs.email);
            formData.append("password", inputs.password);
            formData.append("avatar", file); // gửi file gốc
            formData.append("role",inputs.role);
            
            Api.post('register',formData,{
            headers: {
              'Content-Type': 'multipart/form-data'
              }
            })
            .then(response=>{
                if(response.data.errors){
                    seterrors(response.data.errors);
                }else{
                   alert("đăng ký thành công")
                   
                    // đăng ký xong thành công cho về rỗng
                    setInput({ name: "", email: "", password: "", repassword: "", phone: "", address: "", avatar: "",role:"" });
                    setFile(null); setAvatar(""); seterrors({}); setIsLoginForm(true);
                    
                }
            })
        }
   }
      // đăng nhập
      const handleLoginSubmit = (e) => {
        e.preventDefault();
        let errorsSubmit = {};
        let flag = true;

        if (login.email == "") {
          errorsSubmit.email = "Vui lòng nhập email";
          flag = false;
        }
        if (login.password == "") {
          errorsSubmit.password = "Vui lòng nhập mật khẩu";
          flag = false;
        }

        if (!flag) {
          seterrors(errorsSubmit);
        } else {
          Api.post('login', login)
        .then(response => {
          if (response.data.message == "Đăng nhập thành công") {
            alert("Đăng nhập thành công!");
            console.log("Login response:", response.data);
            // Lưu user (bao gồm avatar) vào localStorage
            const user = response.data.user;
            localStorage.setItem("user", JSON.stringify({
              //lưu tên và ảnh
              name: user.name,
              avatar: user.avatar
            }));
            navigate('/');
          } else {
            alert("Đăng nhập thất bại!");
          }
        })
        .catch(error => {
          alert("Email hoặc mật khẩu không đúng!");
          console.error(error);
        });
        }
      };

  return (
    <div className='.auth-page'>
      <div className="container">
          <div className="left-panel">
            <img src="img/cho.jpg" alt="Hình minh họa" />
          </div>
          <div className="right-panel">
    <h2>{isLoginForm ? "Đăng Nhập" : "Đăng Ký Tài Khoản"}</h2>

    {isLoginForm ? (
      <form onSubmit={handleLoginSubmit}>
        <input type="email" placeholder="Email" onChange={handleLoginInput} name='email' value={login.email}/>
        {errors.email && <p className="error">{errors.email}</p>}

        <input type="password" placeholder="Mật khẩu" onChange={handleLoginInput} name='password' value={login.password}/>
        {errors.password && <p className="error">{errors.password}</p>}

        <button type="submit">Đăng Nhập</button>

        <p style={{ marginTop: "15px", textAlign: "center" }}>
          Chưa có tài khoản?{" "}
          <span style={{ color: "blue", cursor: "pointer" }} onClick={() => setIsLoginForm(false)}>Đăng ký</span>
        </p>
      </form>
      ) : (
      <form onSubmit={hasFormSubmit}>
        <input type="text" placeholder="Họ và tên"  onChange={hasInput} name='name' value={inputs.name}/>
        {errors.name && <p className="error">{errors.name}</p>}

        <input type="email" placeholder="Email" onChange={hasInput} name='email' value={inputs.email}/>
        {errors.email && <p className="error">{errors.email}</p>}

        <input type="password" placeholder="Mật khẩu" onChange={hasInput} name='password' value={inputs.password}/>
        {errors.password && <p className="error">{errors.password}</p>}

        <input type="password" placeholder="Nhập lại mật khẩu"  onChange={hasInput} name='repassword' value={inputs.repassword}/>
        {errors.repassword && <p className="error">{errors.repassword}</p>}

        {/* <input type="text"  placeholder="Số điện thoại"  onChange={hasInput} name="phone" value={inputs.phone}/>
        {errors.phone && <p className="error">{errors.phone}</p>}

        <input type="text"  placeholder="Địa chỉ"  onChange={hasInput} name="address" value={inputs.address}/>
        {errors.address && <p className="error">{errors.address}</p>} */}

        <input type="file" placeholder="avatar" onChange={hasInputchange} name="avatar" />
        {errors.avatar && <p className="error">{errors.avatar}</p>}

        <label>Vai trò:</label>
        <select name="role" onChange={hasInput} value={inputs.role}>
          <option value="">-- Chọn vai trò --</option>
          <option value="admin" disabled>Admin</option>
          <option value="benhnhan">Bệnh nhân</option>
          <option value="bacsi" disabled>Bác sĩ</option>
        </select>
        {errors.role && <p className="error">{errors.role}</p>}

        <button type="submit">Đăng Ký</button>

        <p style={{ marginTop: "15px", textAlign: "center" }}>
          Đã có tài khoản?{" "}
          <span style={{ color: "blue", cursor: "pointer" }} onClick={() => setIsLoginForm(true)}>Đăng nhập</span>
        </p>
        </form>
        )}
      </div>

      </div>
    </div>
  );
};

export default DangKy;