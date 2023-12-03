import PropTypes from "prop-types";

function MenuItem({ onClick, label, icon }) {
  return (
    <div
      onClick={onClick}
      className="
      flex
      items-center
      px-4 
      py-3 
      hover:bg-orange-100 
      transition
      font-semibold
      text-xl
      "
    >
      {icon}
      {label}
    </div>
  );
}

MenuItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  icon: PropTypes.node,
};

export default MenuItem;
