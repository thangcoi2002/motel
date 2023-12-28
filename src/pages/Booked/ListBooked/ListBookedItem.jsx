import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import usePaymentModal from "~/hooks/usePaymentModal";

function ListBookedItem({ data, cancel }) {
  const paymentModal = usePaymentModal();
  
  return (
    <div className=" flex w-full bg-slate-100  rounded-xl overflow-hidden mb-6 group">
      <Link to={`/detail/${data.motelId._id}`}>
        <img
          src={data.motelId.imageUrl[0]}
          alt="image"
          className="
          w-[100px] h-[100px] group-hover:scale-105 transition
          "
        />
      </Link>
      <div className="flex justify-between w-full">
        <div className="m-4 relative w-full">
          <p>{data.motelId.title}</p>
          <p className="hidden sm:block">
            {data.motelId.district + " - " + data.motelId.province}
          </p>
          <p className="font-bold absolute bottom-0">
            Giá : {data.motelId.price}
          </p>
        </div>
        <div className="flex justify-center">
          <button
            onClick={() => {
              paymentModal.onOpen();
              paymentModal.changeAmount(data.motelId.price);
              paymentModal.changeBookedID(data._id);
            }}
            className=" bg-green-600 w-[112px] md:w-[64px] font-semibold text-lg hover:font-bold hover:opacity-40"
          >
            Thanh toán
          </button>

          <button
            onClick={() => cancel(data._id)}
            className=" bg-red-400 w-[112px] md:w-[64px] font-semibold text-lg hover:font-bold hover:bg-red-500"
          >
            Hủy
          </button>
        </div>
      </div>
    </div>
  );
}

ListBookedItem.propTypes = {
  data: PropTypes.object.isRequired,
  cancel: PropTypes.func,
};

export default ListBookedItem;
