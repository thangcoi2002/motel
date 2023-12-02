function Button({ label, onClick, disabled, icon, className,type }) {
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
        <img src={icon} alt="image-error" className="absolute left-4 top-3 w-[30px] h-[30px]" />
      )}
      {label}
    </button>
  );
}

export default Button;
