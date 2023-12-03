import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

function ListBar({ data }) {
  return (
    <Link
    to={data.to}
      className="
  flex
  flex-col
  justify-center
  items-center
  w-full
  md:justify-start
  md:flex-row
  cursor-pointer
  p-5
  text-xl
  select-none
  hover:bg-red-100
  "
    >
      {data.icon}
      <div className="hidden sm:block">{data.name}</div>
    </Link>
  );
}

ListBar.propTypes = {
  data: PropTypes.object.isRequired,
}

export default ListBar;
