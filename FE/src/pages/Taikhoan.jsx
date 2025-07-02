// src/pages/TaiKhoan.jsx

import React, { useState } from "react";
import {
  FaUserShield,
  FaLock,
  FaTrash,
  FaUnlock,
  FaTimes,
  FaSave,
} from "react-icons/fa";

const TaiKhoan = () => {
  const [accounts, setAccounts] = useState([
    {
      name: "Nguyễn Văn A",
      email: "nva@gmail.com",
      username: "nva123",
      status: "Đang hoạt động",
      role: "Admin",
      permissions: ["Tạo tài khoản", "Khóa tài khoản"],
    },
    {
      name: "Trần Thị B",
      email: "tran.b@gmail.com",
      username: "ttb321",
      status: "Đang hoạt động",
      role: "Bác sĩ",
      permissions: ["Xem lịch hẹn"],
    },
    {
      name: "Lê Minh C",
      email: "le.c@gmail.com",
      username: "leminhc",
      status: "Đã khóa",
      role: "Lễ tân",
      permissions: ["Tạo lịch hẹn"],
    },
     {
      name: "Lê Minh C",
      email: "le.c@gmail.com",
      username: "leminhc",
      status: "Đã khóa",
      role: "Lễ tân",
      permissions: ["Tạo lịch hẹn"],
    },
     {
      name: "Lê Minh C",
      email: "le.c@gmail.com",
      username: "leminhc",
      status: "Đã khóa",
      role: "Lễ tân",
      permissions: ["Tạo lịch hẹn"],
    },
     {
      name: "Lê Minh C",
      email: "le.c@gmail.com",
      username: "leminhc",
      status: "Đã khóa",
      role: "Lễ tân",
      permissions: ["Tạo lịch hẹn"],
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [selectedAccIndex, setSelectedAccIndex] = useState(null);
  const [selectedRole, setSelectedRole] = useState("");
  const [selectedPermissions, setSelectedPermissions] = useState([]);

  const roles = ["Admin", "Bác sĩ", "Lễ tân", "Khách hàng"];
  const permissionsList = [
    "Tạo tài khoản",
    "Khóa tài khoản",
    "Xem lịch hẹn",
    "Tạo lịch hẹn",
    "Duyệt đánh giá",
  ];

  // 👉 Mở modal phân quyền
  const openRoleModal = (idx) => {
    setSelectedAccIndex(idx);
    setSelectedRole(accounts[idx].role);
    setSelectedPermissions(accounts[idx].permissions);
    setShowModal(true);
  };

  // 👉 Tick quyền
  const togglePermission = (perm) => {
    if (selectedPermissions.includes(perm)) {
      setSelectedPermissions(selectedPermissions.filter((p) => p !== perm));
    } else {
      setSelectedPermissions([...selectedPermissions, perm]);
    }
  };

  // 👉 Lưu phân quyền
  const saveRole = () => {
    const updated = [...accounts];
    updated[selectedAccIndex].role = selectedRole;
    updated[selectedAccIndex].permissions = selectedPermissions;
    setAccounts(updated);
    setShowModal(false);
  };

  // 👉 Khóa tài khoản
  const lockAccount = (idx) => {
    const updated = [...accounts];
    updated[idx].status = "Đã khóa";
    setAccounts(updated);
  };

  // 👉 Mở tài khoản
  const unlockAccount = (idx) => {
    const updated = [...accounts];
    updated[idx].status = "Đang hoạt động";
    setAccounts(updated);
  };

  // 👉 Xóa tài khoản
  const deleteAccount = (idx) => {
    if (
      window.confirm(
        `Bạn có chắc chắn muốn xoá tài khoản ${accounts[idx].name} không?`
      )
    ) {
      const updated = [...accounts];
      updated.splice(idx, 1);
      setAccounts(updated);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 flex items-center gap-2">
        <FaUserShield /> Quản lý tài khoản
      </h1>

      <div className="overflow-x-auto rounded shadow border bg-white">
        <table className="min-w-full">
          <thead className="bg-blue-50">
            <tr>
              <th className="px-4 py-3 border-b text-left">Họ và tên</th>
              <th className="px-4 py-3 border-b text-left">Email</th>
              <th className="px-4 py-3 border-b text-left">Tên đăng nhập</th>
              <th className="px-4 py-3 border-b text-left">Trạng thái</th>
              <th className="px-4 py-3 border-b text-left">Vai trò</th>
              <th className="px-4 py-3 border-b text-left">Hành động</th>
            </tr>
          </thead>
          <tbody>
            {accounts.map((acc, idx) => (
              <tr key={idx} className="hover:bg-gray-50">
                <td className="px-4 py-2 border-b">{acc.name}</td>
                <td className="px-4 py-2 border-b">{acc.email}</td>
                <td className="px-4 py-2 border-b">{acc.username}</td>
                <td className="px-4 py-2 border-b">
                  {acc.status === "Đang hoạt động" ? (
                    <span className="text-green-600 font-semibold">
                      {acc.status}
                    </span>
                  ) : (
                    <span className="text-red-600 font-semibold">
                      {acc.status}
                    </span>
                  )}
                </td>
                <td className="px-4 py-2 border-b">{acc.role}</td>
                <td className="px-4 py-2 border-b">
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => openRoleModal(idx)}
                      className="flex items-center gap-1 px-2 py-1 text-white bg-blue-500 rounded hover:bg-blue-600 text-sm"
                    >
                      <FaUserShield /> Phân quyền
                    </button>

                    {acc.status === "Đang hoạt động" ? (
                      <button
                        onClick={() => lockAccount(idx)}
                        className="flex items-center gap-1 px-2 py-1 text-white bg-red-500 rounded hover:bg-red-600 text-sm"
                      >
                        <FaLock /> Khóa
                      </button>
                    ) : (
                      <button
                        onClick={() => unlockAccount(idx)}
                        className="flex items-center gap-1 px-2 py-1 text-white bg-green-500 rounded hover:bg-green-600 text-sm"
                      >
                        <FaUnlock /> Mở
                      </button>
                    )}

                    <button
                      onClick={() => deleteAccount(idx)}
                      className="flex items-center gap-1 px-2 py-1 text-white bg-pink-500 rounded hover:bg-pink-600 text-sm"
                    >
                      <FaTrash /> Xóa
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal Phân quyền */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow w-full max-w-md">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <FaUserShield /> Phân quyền cho {accounts[selectedAccIndex].name}
            </h2>

            <label className="block mb-2 font-semibold">Vai trò:</label>
            <select
              value={selectedRole}
              onChange={(e) => setSelectedRole(e.target.value)}
              className="w-full border rounded px-3 py-2 mb-4"
            >
              {roles.map((role, idx) => (
                <option key={idx} value={role}>
                  {role}
                </option>
              ))}
            </select>

            <label className="block mb-2 font-semibold">Quyền:</label>
            <div className="space-y-2 mb-4">
              {permissionsList.map((perm, idx) => (
                <label key={idx} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={selectedPermissions.includes(perm)}
                    onChange={() => togglePermission(perm)}
                  />
                  {perm}
                </label>
              ))}
            </div>

            <div className="flex justify-end gap-2">
              <button
                onClick={saveRole}
                className="flex items-center gap-1 px-3 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 text-sm"
              >
                <FaSave /> Lưu
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="flex items-center gap-1 px-3 py-2 text-gray-600 bg-gray-200 rounded hover:bg-gray-300 text-sm"
              >
                <FaTimes /> Đóng
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaiKhoan;
