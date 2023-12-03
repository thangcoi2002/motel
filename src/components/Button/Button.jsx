import PropTypes from "prop-types";

function Button({ label, onClick, disabled, icon, className }) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`${className}
      w-full
      h-full
      pt-5
      pb-6
        relative
        disabled:opacity-70
        disabled:cursor-not-allowed
        rounded-lg
        hover:opacity-80
        transition
        `}
    >
      {icon && (
        <img
          src={icon}
          alt="image-error"
          className="absolute left-4 top-3 w-[30px] h-[30px]"
        />
      )}
      {label}
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  icon: PropTypes.string,
  className: PropTypes.string,
};
export default Button;
