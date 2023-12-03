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
        <div className="text-2xl font-bold flex justify-between items-center mt-10">
          <div>TITLE</div>
          <FaHeart size={30} className="cursor-pointer"/>
        </div>
        <div className="ml-3 text-neutral-500 font-bold">TYPE</div>
        <div className="mt-4 text-2xl text-right font-medium text-neutral-500">1.000.000 VNĐ</div>
        <div className="m-4">DESCRIPTION</div>
        <div className="m-4">ADDRESS</div>
      </div>
    </>
  );
}

export default Detail;
