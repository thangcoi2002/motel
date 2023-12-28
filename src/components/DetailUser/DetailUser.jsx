import PropTypes from "prop-types";

import CardMotel from "../CardMotel";

function DetailUser({ dataUser, dataMotel }) {
  return (
    <div className="m-10">
      <div
        className="flex
      flex-col
      justify-center
      items-center 
      md:items-start
      md:justify-start
      md:flex-row
      relative 
      border-b 
      border-b-gray-400 
      pb-11 "
      >
        <img
          src={dataUser.imageUrl}
          alt={dataUser.fullName}
          className="
        h-[230px]
        w-[230px]
        sm:h-[500px]
        md:w-[280px]
        md:h-[280px]
        rounded-full
        "
        />
        <div className="flex flex-col ml-10 mt-12">
          <div className="text-5xl font-semibold mb-4">{dataUser.fullName}</div>
          <div className="text-xl font-medium opacity-80">
            {dataUser.address}
          </div>
        </div>
      </div>
      <div className="py-8 px-4">
        <div className="text-xl font-medium">Nhà trọ đã đăng</div>
        <div className="mt-10">
          <CardMotel data={dataMotel} />
        </div>
      </div>
    </div>
  );
}

DetailUser.propTypes = {
  dataUser: PropTypes.object.isRequired,
  dataMotel: PropTypes.array.isRequired,
};

export default DetailUser;
