import { FaHeart } from "react-icons/fa";
import ImageDetail from "./ImageDetail";

function Detail() {
  return (
    <>
      <ImageDetail />
      <div className="mx-10 md:ml-20">
        <div className="flex items-center justify-end">
          <p>USERNAME</p>
          <img
            src="https://res.cloudinary.com/dd6sxqlso/image/upload/v1699341107/dormitory/cgws4mqrwji923xyc4jm.jpg"
            alt="avatar"
            className="w-[40px] h-[40px] rounded-full ml-4"
          />
        </div>
        <div className="flex justify-between items-center mt-10">
          <div className="text-2xl font-bold ">TITLE</div>
          <div className="flex items-center font-medium text-2xl cursor-pointer px-4 py-3 select-none group">
            Lưu trọ
            <FaHeart size={30} className="mx-3 group-hover:text-rose-500" />
          </div>
        </div>
        <div className="ml-3 text-neutral-500 font-bold">TYPE</div>
        <div className="mt-4 text-2xl text-right font-medium text-neutral-500">
          <p>1.000.000 VNĐ</p>
          <button
            className="
          border
          border-green-600
          bg-neutral-200
          w-[200px]
          h-[42px]
          mt-6
          rounded-2xl
          hover:bg-green-600
          hover:text-white
          "
          >
            Thuê phòng
          </button>
        </div>
        <div className="m-4">DESCRIPTION</div>
        <div className="m-4">ADDRESS</div>
      </div>
    </>
  );
}

export default Detail;
