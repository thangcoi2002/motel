import { Link } from "react-router-dom";

function InfoItem() {
  return (
    <Link
      to={`/detail/1`}
      className="
    cursor-pointer
    w-full
    md:w-1/3
    lg:w-1/4
    xl:w-1/5
    mt-2
    mx-6
    mb-5"
    >
      <div
        className="
      flex
      flex-col
      w-full"
      >
        <div
          className="
            w-full
            overflow-hidden
            rounded-xl"
        >
          <img
            src="https://res.cloudinary.com/dd6sxqlso/image/upload/v1697549414/m3pkuhptph6aslxs44hw.jpg"
            alt="motel"
            className="
            object-cover
            w-full
            h-[400px]"
          />
        </div>
        <div className="px-4 py-6">
          <div className="text-2xl font-semibold">TITLE</div>
          <div className="mt-4 text-xl">DESCRIPTION</div>
          <div className="mt-4 text-xl">ADDRESS : Province - District</div>
          <div className="mt-4 text-right text-xl">1.000.000 VNĐ</div>
        </div>
      </div>
    </Link>
  );
}

export default InfoItem;
