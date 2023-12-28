import PropTypes from "prop-types";

import { Link } from "react-router-dom";

function InfoItem({ data }) {
  return (
    <Link
      to={`/detail/${data._id}`}
      className="
    cursor-pointer
    w-full
    bg-neutral-100
    overflow-hidden
    rounded-xl
    md:w-1/3
    lg:w-1/4
    xl:w-1/5
    md:mx-6
    md:mt-5
    mb-10
    group"
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
            rounded-t-xl"
        >
          <img
            src={data.imageUrl[0]}
            alt="error"
            className="
            object-cover
            w-full
            h-[400px]
            group-hover:scale-110
            transition
            "
          />
        </div>
        <div className="px-4 py-6 overflow-hidden break-words">
          <div className="text-2xl font-semibold h-[40px] overflow-hidden">
            {data.title}
          </div>
          <div className="mt-4 text-xl h-[36px] overflow-hidden">
            {data.description}
          </div>
          <div className="mt-4 text-xl">
            {data.district + " - " + data.province}
          </div>
          <div className="mt-4 text-right text-xl">{data.price} VNĐ</div>
        </div>
      </div>
    </Link>
  );
}

InfoItem.propTypes = {
  data: PropTypes.object.isRequired,
};

export default InfoItem;
