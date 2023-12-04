import PropTypes from "prop-types";

function EmptyClient({ title, description }) {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <div className="text-7xl font-semibold text-red-500">{title}</div>
      <div className="text-4xl font-medium text-gray-400 m-4">{description}</div>
    </div>
  );
}

EmptyClient.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default EmptyClient;
