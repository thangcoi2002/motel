import { useState } from "react";

function ImageDetail() {
  const imageUrl = [
    {
      url: "https://res.cloudinary.com/dd6sxqlso/image/upload/v1697549414/m3pkuhptph6aslxs44hw.jpg",
    },
    {
      url: "https://res.cloudinary.com/dd6sxqlso/image/upload/v1697373449/cafms9med9lbzujhz4w5.webp",
    },
    {
      url: "https://res.cloudinary.com/dd6sxqlso/image/upload/v1697549414/m3pkuhptph6aslxs44hw.jpg",
    },
  ];

  const [url, setUrl] = useState(imageUrl[0].url);

  return (
    <div className="flex flex-col items-center w-full p-4">
      <img
        src={url}
        alt="Main Image"
        className="w-full md:w-3/4  h-[720px] rounded-2xl object-cover "
      />

      <div className="flex w-full md:w-3/4 overflow-x-auto">
        {imageUrl.map((image) => (
          <div key={image.url} className="flex-shrink-0">
            <img
              src={image.url}
              alt="Thumbnail Image"
              className="w-32 h-32 m-2 rounded-2xl cursor-pointer"
              onClick={() => setUrl(image.url)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageDetail;
