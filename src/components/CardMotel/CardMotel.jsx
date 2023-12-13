import PropTypes from "prop-types";

import InfoItem from "./InfoItem";
import EmptyClient from "~/components/EmptyClient";

function CardMotel({ data }) {
  
  if (!data || data.length === 0) {
    return (
      <EmptyClient
        title="Không có dữ liệu"
        description="chưa có nhà trọ nào "
      />
    );
  }

  return (
    <div
      className="
      flex 
      flex-wrap "
    >
      {data.map((item) => (
        <InfoItem key={item._id} data={item} />
      ))}
    </div>
  );
}

CardMotel.propTypes = {
  data: PropTypes.array,
};

export default CardMotel;
