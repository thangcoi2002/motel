import { MdError } from "react-icons/md";

function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center w-full  h-[100vh]">
      <MdError size={200} className="text-red-700" />
      <h1 className="text-7xl  p-10 text-red-700">404 - Page Not Found</h1>
      <p className="text-5xl p-4">
        Oops! The page you are looking for does not exist.
      </p>
      {/* Thêm các yếu tố khác tùy chỉnh giao diện, ví dụ: hình ảnh, nút quay lại trang chủ, vv. */}
    </div>
  );
}

export default NotFound;
