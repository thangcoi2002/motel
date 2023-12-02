import Modal from "./Modal";
import useRegisterModal from "~/hooks/useRegisterModal";
import LogoGoogle from "~/assets/Images/google.svg";
import LogoFacebook from "~/assets/Images/facebook.svg";
import Button from "../Button";

function RegisterModal() {
  const registerModal = useRegisterModal();

  const onSubmit = () => {};

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
      />

      <div className="flex flex-col gap-4 mt-3">
        <Button
          outline
          className="border border-gray-300 hover:bg-gray-300 hover:font-semibold h-[48px] text-xl"
          label="Đăng ký với Google"
          icon={LogoGoogle}
        />
        <Button
          outline
          className="border border-gray-300 hover:bg-gray-300 hover:font-semibold h-[48px] text-xl"
          label="Đăng ký với Facebook"
          icon={LogoFacebook}
        />
      </div>
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
