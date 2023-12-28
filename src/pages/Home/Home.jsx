import { Link, useLocation } from "react-router-dom";

import ListProvince from "~/components/ListProvince";
import CardMotel from "~/components/CardMotel";
import * as motelServicer from "~/services/motelService";
import { useEffect, useState } from "react";

function Home() {
  const location = useLocation();
  const [data, setData] = useState([]);
  const params = new URLSearchParams(location.search);
  const page = params.get("page");

  useEffect(() => {
    motelServicer
      .getAllMotel({ page: page, perPage: 12 })
      .then((motel) => setData(motel))
      .catch((err) => {
        console.log(err);
      });
  }, [page]);

  function pagination() {
    const page = [];
    for (var i = 1; i <= data.totalPages; i++) {
      page.push(i);
    }
    return page;
  }
  
  return (
    <div>
      <ListProvince />
      <CardMotel data={data.data} />
      <div className="text-center py-10 md:py-0">
        {data.hasPreviousPage && (
          <Link
            to={`/home?page=${parseInt(page) - 1}`}
            className="py-6 px-10 text-lg"
          >
            &lt;
          </Link>
        )}
        {pagination().map((pageNumber) => (
          <Link
            to={`/home?page=${pageNumber}`}
            key={pageNumber}
            className={`py-6 px-10 text-lg ${
              page == pageNumber ? "underline" : ""
            }`}
          >
            {pageNumber}
          </Link>
        ))}
        {data.hasNextPage && (
          <Link
            to={`/home?page=${parseInt(page) + 1}`}
            className="py-6 px-10 text-lg"
          >
            &gt;
          </Link>
        )}
      </div>
    </div>
  );
}

export default Home;
