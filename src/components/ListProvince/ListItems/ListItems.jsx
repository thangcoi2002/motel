import PropTypes from "prop-types";
import { useLocation, useNavigate } from "react-router-dom";

function ListItems({ data, isActive }) {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const province = params.get("province");
  const district = params.get("district");
  const type = params.get("type");

  const isHighlighted = data.name === isActive;

  const handleFilter = () => {
    if (type === data.name) {
      if (!province && !district) {
        navigate("/");
      } else {
        params.delete("type");
        navigate(`?${params.toString()}`);
      }
    } else if (province && district) {
      navigate(`?type=${data.name}&province=${province}&district=${district}`);
    } else if (!province && !district) {
      navigate(`/search?type=${data.name}`);
    }
  };

  return (
    <div
      className={`
      border
      border-gray-300
      m-2
      rounded-3xl
      w-full
    hover:text-neutral-800 
    transition 
    cursor-pointer
    ${isHighlighted && "bg-gray-300"}
    `}
      onClick={handleFilter}
    >
      <div
        className=" 
        h-16
      flex 
      justify-center
      items-center 
      font-medium 
      text-sm"
      >
        {data.name}
      </div>
    </div>
  );
}

ListItems.propTypes = {
  data: PropTypes.object.isRequired,
  isActive: PropTypes.string,
};

export default ListItems;
