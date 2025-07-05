// src/pages/QuanLyLichLamViec.jsx
import React, { useState } from "react";
import Navbar2 from "../components/Navbar2";
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";
import { Dialog } from "@headlessui/react";

const QuanLyLichLamViec = () => {
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [newSchedule, setNewSchedule] = useState({
    ngay: "",
    gioBatDau: "",
    gioKetThuc: "",
    phongKham: "",
    trangThai: "Đang chờ xác nhận",
  });
  const [editSchedule, setEditSchedule] = useState(null);
  const [schedules, setSchedules] = useState([
    {
      ngay: "26/06/2025",
      gioBatDau: "08:00",
      gioKetThuc: "11:30",
      phongKham: "Phòng 203",
      trangThai: "Chưa có đăng ký",
    },
    {
      ngay: "27/06/2025",
      gioBatDau: "13:00",
      gioKetThuc: "16:30",
      phongKham: "Phòng 204",
      trangThai: "Đang chờ xác nhận",
    },
  ]);

  const handleCreate = () => {
    setSchedules([newSchedule, ...schedules]);
    setNewSchedule({
      ngay: "",
      gioBatDau: "",
      gioKetThuc: "",
      phongKham: "",
      trangThai: "Đang chờ xác nhận",
    });
    setIsCreateOpen(false);
  };

  const handleEdit = (schedule) => {
    setEditSchedule({ ...schedule });
    setIsEditOpen(true);
  };

  const handleSaveEdit = () => {
    setSchedules(
      schedules.map((item) =>
        item.ngay === editSchedule.ngay &&
        item.gioBatDau === editSchedule.gioBatDau &&
        item.gioKetThuc === editSchedule.gioKetThuc &&
        item.phongKham === editSchedule.phongKham
          ? editSchedule
          : item
      )
    );
    setIsEditOpen(false);
    setEditSchedule(null);
  };

  const handleDelete = (schedule) => {
    if (window.confirm("Bạn có chắc muốn xóa lịch này?")) {
      setSchedules(schedules.filter((item) => item !== schedule));
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Navbar2 />

      {/* Nội dung chính */}
      <div className="flex-1 p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center space-x-4">
            <div className="w-8 h-8 bg-gray-300 rounded flex items-center justify-center">
              <span className="text-gray-500 font-bold">□</span>
            </div>
            <h1 className="text-xl font-bold text-blue-600">Quản lý lịch làm việc</h1>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-600">Phòng khám đa khoa</span>
            <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
              <span className="text-gray-500">👤</span>
            </div>
            <span className="text-sm text-gray-600">Bác sĩ</span>
          </div>
        </div>

        {/* Nội dung chính */}
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex justify-between mb-4">
            <h2 className="text-lg font-semibold">Danh sách lịch làm việc</h2>
            <button
              onClick={() => setIsCreateOpen(true)}
              className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 flex items-center gap-2"
            >
              <FaPlus /> Tạo lịch làm việc mới
            </button>
          </div>

          {/* Bảng dữ liệu */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-separate border-spacing-y-2">
              <thead>
                <tr className="bg-gray-300 text-gray-700">
                  <th className="py-3 px-4 font-semibold">Ngày</th>
                  <th className="py-3 px-4 font-semibold">Giờ bắt đầu</th>
                  <th className="py-3 px-4 font-semibold">Giờ kết thúc</th>
                  <th className="py-3 px-4 font-semibold">Phòng khám</th>
                  <th className="py-3 px-4 font-semibold">Trạng thái</th>
                  <th className="py-3 px-4 font-semibold">Hành động</th>
                </tr>
              </thead>
              <tbody>
                {schedules.map((schedule, index) => (
                  <tr key={index} className="bg-white hover:bg-gray-50 rounded-lg">
                    <td className="py-3 px-4">{schedule.ngay}</td>
                    <td className="py-3 px-4">{schedule.gioBatDau}</td>
                    <td className="py-3 px-4">{schedule.gioKetThuc}</td>
                    <td className="py-3 px-4">{schedule.phongKham}</td>
                    <td className="py-3 px-4">
                      <span
                        className={`px-3 py-1 text-sm font-medium rounded-full ${
                          schedule.trangThai === "Chưa có đăng ký"
                            ? "bg-green-200 text-green-800"
                            : schedule.trangThai === "Đang chờ xác nhận"
                            ? "bg-yellow-200 text-yellow-800"
                            : "bg-blue-200 text-blue-800"
                        }`}
                      >
                        {schedule.trangThai}
                      </span>
                    </td>
                    <td className="py-3 px-4 flex space-x-2">
                      <button
                        onClick={() => handleEdit(schedule)}
                        className="bg-gray-500 text-white px-2 py-1 rounded text-xs hover:bg-gray-600 flex items-center gap-1"
                      >
                        <FaEdit /> Sửa
                      </button>
                      <button
                        onClick={() => handleDelete(schedule)}
                        className="bg-red-500 text-white px-2 py-1 rounded text-xs hover:bg-red-600 flex items-center gap-1"
                      >
                        <FaTrash /> Xóa
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Modal tạo lịch làm việc mới */}
      <Dialog
        open={isCreateOpen}
        onClose={() => setIsCreateOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="w-full max-w-md bg-white rounded-xl p-6 shadow-lg space-y-4">
            <div className="flex justify-between items-center">
              <Dialog.Title className="text-lg font-bold text-blue-800">
                Tạo lịch làm việc mới
              </Dialog.Title>
              <button
                onClick={() => setIsCreateOpen(false)}
                className="text-gray-500 hover:text-red-500"
              >
                ✕
              </button>
            </div>

            <input
              type="text"
              placeholder="Ngày (VD: 26/06/2025)"
              className="w-full border px-3 py-2 rounded"
              value={newSchedule.ngay}
              onChange={(e) =>
                setNewSchedule({ ...newSchedule, ngay: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Giờ bắt đầu (VD: 08:00)"
              className="w-full border px-3 py-2 rounded"
              value={newSchedule.gioBatDau}
              onChange={(e) =>
                setNewSchedule({ ...newSchedule, gioBatDau: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Giờ kết thúc (VD: 11:30)"
              className="w-full border px-3 py-2 rounded"
              value={newSchedule.gioKetThuc}
              onChange={(e) =>
                setNewSchedule({ ...newSchedule, gioKetThuc: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Phòng khám (VD: Phòng 203)"
              className="w-full border px-3 py-2 rounded"
              value={newSchedule.phongKham}
              onChange={(e) =>
                setNewSchedule({ ...newSchedule, phongKham: e.target.value })
              }
            />
            <select
              className="w-full border px-3 py-2 rounded"
              value={newSchedule.trangThai}
              onChange={(e) =>
                setNewSchedule({ ...newSchedule, trangThai: e.target.value })
              }
              disabled
            >
              <option value="Đang chờ xác nhận">Đang chờ xác nhận</option>
              <option value="Đợi Admin xét duyệt">Đợi Admin xét duyệt</option>
            </select>

            <div className="text-right">
              <button
                onClick={handleCreate}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Tạo mới
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>

      {/* Modal chỉnh sửa lịch làm việc */}
      <Dialog
        open={isEditOpen}
        onClose={() => setIsEditOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="w-full max-w-md bg-white rounded-xl p-6 shadow-lg space-y-4">
            <div className="flex justify-between items-center">
              <Dialog.Title className="text-lg font-bold text-blue-800">
                Chỉnh sửa lịch làm việc
              </Dialog.Title>
              <button
                onClick={() => setIsEditOpen(false)}
                className="text-gray-500 hover:text-red-500"
              >
                ✕
              </button>
            </div>

            {editSchedule && (
              <>
                <input
                  type="text"
                  placeholder="Ngày (VD: 26/06/2025)"
                  className="w-full border px-3 py-2 rounded"
                  value={editSchedule.ngay}
                  onChange={(e) =>
                    setEditSchedule({ ...editSchedule, ngay: e.target.value })
                  }
                />
                <input
                  type="text"
                  placeholder="Giờ bắt đầu (VD: 08:00)"
                  className="w-full border px-3 py-2 rounded"
                  value={editSchedule.gioBatDau}
                  onChange={(e) =>
                    setEditSchedule({ ...editSchedule, gioBatDau: e.target.value })
                  }
                />
                <input
                  type="text"
                  placeholder="Giờ kết thúc (VD: 11:30)"
                  className="w-full border px-3 py-2 rounded"
                  value={editSchedule.gioKetThuc}
                  onChange={(e) =>
                    setEditSchedule({ ...editSchedule, gioKetThuc: e.target.value })
                  }
                />
                <input
                  type="text"
                  placeholder="Phòng khám (VD: Phòng 203)"
                  className="w-full border px-3 py-2 rounded"
                  value={editSchedule.phongKham}
                  onChange={(e) =>
                    setEditSchedule({ ...editSchedule, phongKham: e.target.value })
                  }
                />
                <select
                  className="w-full border px-3 py-2 rounded"
                  value={editSchedule.trangThai}
                  onChange={(e) =>
                    setEditSchedule({ ...editSchedule, trangThai: e.target.value })
                  }
                >
                  <option value="Chưa có đăng ký">Chưa có đăng ký</option>
                  <option value="Đang chờ xác nhận">Đang chờ xác nhận</option>
                  <option value="Đợi Admin xét duyệt">Đợi Admin xét duyệt</option>
                </select>

                <div className="text-right">
                  <button
                    onClick={handleSaveEdit}
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                  >
                    Lưu
                  </button>
                </div>
              </>
            )}
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
};

export default QuanLyLichLamViec;