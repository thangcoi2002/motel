import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import EmptyClient from "~/components/EmptyClient";

import * as authService from "~/services/authService";

function EditProfile() {
  const [data, setData] = useState({});
  const [image, setImage] = useState({});
  const token = localStorage.token;

  useEffect(() => {
    if (token) {
      authService
        .getCurrentUser()
        .then((user) => {
          setData(user.data);
        })
        .catch((error) => console.log(error));
    }
  }, [token]);

  const handleData = (e) => {
    const newData = { ...data };
    newData[e.target.name] = e.target.value;
    setData(newData);
  };

  const handleImage = (e) => {
    const newData = { ...data };
    newData[e.target.name] = e.target.value;
    setData(newData);
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const img = {
        preview: URL.createObjectURL(e.target.files[0]),
        data: e.target.files[0],
      };
      setImage(img);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("fullName", data.fullName);
    formData.append("password", data.password);
    formData.append("email", data.email);
    formData.append("address", data.address);
    formData.append("imageUrl", image.data);

    try {
      await authService
        .editUser({ data: formData })
        .then((auth) => {
          if (auth.status === 200) {
            toast.success("Sửa thông tin thành công", {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
          }else if(auth.status === 204){
            toast.error("Dữ liệu nhập vào thiếu", {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
          }
        })
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error);
    }
  };

  if (!token) {
    return (
      <EmptyClient title="Chưa đăng nhập" description="Vui lòng đăng nhập!" />
    );
  }

  return (
    <form
      onSubmit={(e) => onSubmit(e)}
      className="flex flex-col items-center md:items-start"
    >
      <p className="text-2xl font-bold">Thay đổi thông tin cá nhân</p>
      <div className="w-3/4 lg:flex relative">
        <div className="lg:absolute lg:right-0 flex justify-center mt-4 md:ml-10">
          <img
            src={image.preview || data.imageUrl}
            alt="error"
            className="w-[200px] h-[200px] object-cover rounded-full"
          />
        </div>

        <div className="flex flex-col lg:w-3/5 items-center lg:items-start mt-4">
          <input
            required
            type="text"
            className="
          border 
          border-purple-300 
          px-4 
          py-4 
          text-2xl 
          w-3/4
          my-4
          focus:border-blue-400
          focus:outline-none
          rounded-3xl
          lg:w-full
          "
            placeholder="Họ và tên ..."
            autoComplete="fullName"
            name="fullName"
            value={data.fullName || ""}
            onChange={(e) => handleData(e)}
          />
          <input
            type="password"
            className="
          border 
          border-purple-300 
          px-4 
          py-4 
          text-2xl 
          w-3/4
          my-4
          focus:border-blue-400
          focus:outline-none
          rounded-3xl
          lg:w-full
          "
            placeholder="Mật khẩu ..."
            autoComplete="password"
            name="password"
            value={data.password || ""}
            onChange={(e) => handleData(e)}
          />
          <input
            required
            type="email"
            className="
          border 
          border-purple-300 
          px-4 
          py-4 
          text-2xl 
          w-3/4
          my-4
          focus:border-blue-400
          focus:outline-none
          rounded-3xl
          lg:w-full
          "
            placeholder="Email ..."
            autoComplete="email"
            name="email"
            value={data.email || ""}
            onChange={(e) => handleData(e)}
          />
          <input
            required
            type="text"
            className="
          border 
          border-purple-300 
          px-4 
          py-4 
          text-2xl 
          w-3/4
          my-4
          focus:border-blue-400
          focus:outline-none
          rounded-3xl
          lg:w-full
          "
            placeholder="Địa chỉ ..."
            autoComplete="address"
            name="address"
            value={data.address || ""}
            onChange={(e) => handleData(e)}
          />

          <label
            htmlFor="avatar"
            className="
          border 
          border-purple-300 
          px-4 
          py-4 
          text-2xl 
          w-3/4
          my-4
          rounded-3xl
          lg:w-full
          opacity-60
          "
          >
            {!data.imageUrl ? "Chọn avatar" : "Thay đổi ảnh đại diện"}
          </label>

          <input
            type="file"
            className="hidden"
            autoComplete="imageUrl"
            name="imageUrl"
            onChange={(e) => handleImage(e)}
            accept="image/png,image/jpeg"
            id="avatar"
          />

          <button
            className="
            mt-4
          w-3/4
          md:w-40
          h-20
          hover:font-bold
          text-xl
          border
          rounded-3xl
          bg-emerald-500 
          "
          >
            Sửa
          </button>
        </div>
      </div>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </form>
  );
}

export default EditProfile;
