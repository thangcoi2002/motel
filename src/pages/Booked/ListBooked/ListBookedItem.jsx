function ListBookedItem() {
  return (
    <div className=" flex w-full bg-slate-400  rounded-xl overflow-hidden mb-6 group">
      <img
        src="https://res.cloudinary.com/dd6sxqlso/image/upload/v1697373597/m6hrqaliqx79olwbmsul.webp"
        alt="image"
        className="
        w-[100px] h-[100px] group-hover:scale-105 transition
        "
      />
      <div className="flex justify-between w-full">
        <div className="m-4 relative w-full">
          <p>TITLE</p>
          <p>ADDRESS</p>
          <p className="font-bold absolute bottom-0">Giá : 1.000.000VNĐ</p>
        </div>
        <div className="flex justify-center">
          <button className=" bg-red-400 w-[112px] md:w-[64px] font-semibold text-lg hover:font-bold hover:bg-red-500">
            Hủy
          </button>
        </div>
      </div>
    </div>
  );
}

export default ListBookedItem;
