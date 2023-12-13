import PropTypes from "prop-types";

import ListItems from "./ListItems";

function ListProvince({ isActive }) {
  const typeMotel = [
    {
      name: "Trọ sinh viên",
    },
    {
      name: "Chung cư mini",
    },
  ];

  return (
    <div
      className="
        pt-4
        pb-4
        m-3
        md:w-2/3
        md:ml-[30px]
        lg:w-4/5
        xl:ml-[30px]
        xl:w-5/6
        flex"
    >
      {typeMotel.map((data) => (
        <ListItems key={data.name} data={data} isActive={isActive} />
      ))}
    </div>
  );
}

ListProvince.propTypes = {
  isActive: PropTypes.string,
};

export default ListProvince;
