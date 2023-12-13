import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";

import Modal from "./Modal";
import useRegisterModal from "~/hooks/useRegisterModal";
import * as authService from "~/services/authService";
import useLoginModal from "~/hooks/useLoginModal";
import { toast } from "react-toastify";

function RegisterModal() {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const [data, setData] = useState({});

  const handleData = (e) => {
    const newData = { ...data };
    newData[e.target.name] = e.target.value;
    setData(newData);
  };

  const onSubmit = () => {
    authService
      .Register(data)
      .then((user) => {
        if (user.status === 200) {
          setData("");
          registerModal.onClose();
          loginModal.onOpen();
        }
      })
      .catch((err) => {
        if (err.response.status === 409) {
          toast.error("Tài khoản đã tồn tại!", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        }
        console.log(err);
      });
  };

  const body = (
    <div className="flex flex-col">
      <input
        type="text"
        placeholder="Nhập tài khoản ..."
        className="
        w-full
      h-[32px]
      px-6
      py-10
      text-2xl
      rounded-2xl
      border
      border-neutral-300
      outline-none
      "
        required
        name="username"
        value={data.username || ""}
        onChange={(e) => handleData(e)}
        autoComplete="username"
      />

      <input
        type="password"
        placeholder="Nhập mật khẩu ..."
        className="
      h-[32px]
      px-6
      py-10
      my-3
      text-2xl
      rounded-2xl
      border
      border-neutral-300
      outline-none
      "
        required
        name="password"
        value={data.password || ""}
        onChange={(e) => handleData(e)}
        autoComplete="password"
      />

      <input
        type="text"
        placeholder="Nhập tên người dùng ..."
        className="
      h-[32px]
      px-6
      py-10
      my-3
      text-2xl
      rounded-2xl
      border
      border-neutral-300
      outline-none
      "
        required
        name="fullName"
        value={data.fullName || ""}
        onChange={(e) => handleData(e)}
        autoComplete="fullName"
      />

      <input
        type="email"
        placeholder="Nhập email ..."
        className="
      h-[32px]
      px-6
      py-10
      my-3
      text-2xl
      rounded-2xl
      border
      border-neutral-300
      outline-none
      "
        required
        name="email"
        value={data.email || ""}
        onChange={(e) => handleData(e)}
        autoComplete="email"
      />

      <input
        type="text"
        placeholder="Nhập địa chỉ ..."
        className="
      h-[32px]
      px-6
      py-10
      my-3
      text-2xl
      rounded-2xl
      border
      border-neutral-300
      outline-none
      "
        required
        name="address"
        value={data.address || ""}
        onChange={(e) => handleData(e)}
        autoComplete="address"
      />
    </div>
  );

  return (
    <Modal
      title="Đăng ký"
      isOpen={registerModal.isOpen}
      onClose={registerModal.onClose}
      actionLabel="Đăng ký"
      onSubmit={onSubmit}
      secondaryAction={registerModal.onClose}
      secondaryActionLabel="Hủy"
      body={body}
    />
  );
}

export default RegisterModal;
