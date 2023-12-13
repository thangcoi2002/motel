import { useState } from "react";

import Modal from "./Modal";
import useLoginModal from "~/hooks/useLoginModal";
import * as authService from "~/services/authService";
import { toast } from "react-toastify";

function LoginModal() {
  const loginModal = useLoginModal();
  const [data, setData] = useState({});

  const handleData = (e) => {
    const newData = { ...data };
    newData[e.target.name] = e.target.value;
    setData(newData);
  };

  const onSubmit = () => {
    authService
      .login(data)
      .then((data) => {
        window.localStorage.setItem("token", data.data.token);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);

        toast.error(
          err.response.status === 404
            ? "Tài khoản không tồn tại"
            : "Mật khẩu không chính xác",
          {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          }
        );
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
        placeholder="Nhập mật khẩu"
        className="
      h-[32px]
      px-6
      py-10
      my-6
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
        autoComplete="current-password"
      />
    </div>
  );

  return (
    <Modal
      title="Đăng nhập"
      isOpen={loginModal.isOpen}
      onClose={loginModal.onClose}
      actionLabel="Đăng Nhập"
      onSubmit={onSubmit}
      secondaryAction={loginModal.onClose}
      secondaryActionLabel="Hủy"
      body={body}
    />
  );
}

export default LoginModal;
