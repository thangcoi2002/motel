import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";

function ListItems({ data, isActive }) {
  const navigate = useNavigate();
  const isHighlighted = data.name === isActive;

  const handleFilter = () => {
    navigate(`/search?type=${data.name}`);
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
  isActive: PropTypes.string
}

export default ListItems;
