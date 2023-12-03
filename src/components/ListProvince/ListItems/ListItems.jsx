import { useNavigate } from 'react-router-dom';

function ListItems({data}) {
  const navigate = useNavigate();

  const handleFilter = () => {
    navigate(`/search?province=${data.name}`)
  };

  return (
    <div
      className="
      border
      border-gray-300
      m-2
      rounded-3xl
    hover:text-neutral-800 
    transition 
    cursor-pointer"
      onClick={handleFilter}
    >
      <div
        className=" 
        h-16
        w-[140px]
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

export default ListItems;
