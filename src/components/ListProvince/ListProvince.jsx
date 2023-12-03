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
    {
      name: "Chung cư",
    },
  ];

  return (
    <div
      className="
        pt-4
        pb-4
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
