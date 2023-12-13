import PropTypes from "prop-types";
import { useState } from "react";

function ImageDetail({ imageUrl = [] }) {
  const [url, setUrl] = useState(imageUrl[0]);
  
  return (
    <div className="flex flex-col items-center w-full p-4">
      <img
        src={url}
        alt="Main Image"
        className="w-full md:w-3/4  h-[400px] md:h-[600px] lg:h-[720px] rounded-2xl object-cover "
      />

      <div className="flex w-full md:w-3/4 overflow-x-auto">
        {imageUrl.map((image) => (
          <div key={image} className="flex-shrink-0">
            <img
              src={image}
              alt="Thumbnail Image"
              className="w-32 h-32 m-2 rounded-2xl cursor-pointer"
              onClick={() => setUrl(image)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

ImageDetail.propTypes = {
  imageUrl: PropTypes.array,
};

export default ImageDetail;
