import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

function ListBar({ data }) {
  return (
    <NavLink
      to={data.to}
      //     className={`
      //`}
      className={({ isActive, isPending }) =>
        `${isPending ? "pending" : isActive ? "text-red-500" : ""} flex
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
        z-10`
      }
    >
      {data.icon}
      <div className="hidden sm:block">{data.name}</div>
    </NavLink>
  );
}

ListBar.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ListBar;
