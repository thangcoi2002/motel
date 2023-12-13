import PropTypes from "prop-types";

import ListBookedItem from "./ListBookedItem";
import EmptyClient from "~/components/EmptyClient";

function ListBooked({ data = [], cancel }) {

  if (!data || data.length === 0) {
    return (
      <EmptyClient
        title="Chưa có phòng trọ"
        description="Chưa có phòng trọ nào được đặt"
      />
    );
  }
  return (
    <div className="mr-12">
      {data.map((list) => (
        <ListBookedItem key={list._id} data={list} cancel={cancel} />
      ))}
    </div>
  );
}

ListBooked.propTypes = {
  data: PropTypes.array.isRequired,
  cancel: PropTypes.func,
};

export default ListBooked;
