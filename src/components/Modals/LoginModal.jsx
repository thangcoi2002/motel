import Modal from "./Modal";
import useLoginModal from "~/hooks/useLoginModal";
import LogoGoogle from "~/assets/Images/google.svg";
import LogoFacebook from "~/assets/Images/facebook.svg";
import Button from "../Button";

function LoginModal() {
  const loginModal = useLoginModal();

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
      />
      <div className="flex flex-col gap-4 mt-3">
        <Button outline className="border border-gray-300 hover:bg-gray-300 hover:font-semibold h-[48px] text-xl" label="Tiếp tục với Google" icon={LogoGoogle} />
        <Button outline className="border border-gray-300 hover:bg-gray-300 hover:font-semibold h-[48px] text-xl" label="Tiếp tục với Facebook" icon={LogoFacebook} />
      </div>
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
