function Button({ label, onClick, disabled }) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`
      w-full
      h-9
        relative
        disabled:opacity-70
        disabled:cursor-not-allowed
        rounded-lg
        hover:opacity-80
        transition
        `}
    >
      {label}
    </button>
  );
}

export default Button;
