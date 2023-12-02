function MenuItem({ onClick, label }) {
  return (
    <div
      onClick={onClick}
      className="
      px-4 
      py-3 
      hover:bg-orange-100 
      transition
      font-semibold
      text-xl
      ">
      {label}
    </div>
  );
}

export default MenuItem;
