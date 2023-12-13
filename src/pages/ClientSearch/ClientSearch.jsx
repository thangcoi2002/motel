import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import * as searchService from "~/services/searchService";
import ListProvince from "~/components/ListProvince";
import CardMotel from "~/components/CardMotel";

function ClientSearch() {
  const location = useLocation();
  const [data, setData] = useState();

  const param = new URLSearchParams(location.search);
  const district = param.get("district");
  const province = param.get("province");
  const type = param.get("type");

  useEffect(() => {
    searchService
      .searchMotel({ district, province, type })
      .then((search) => {
        setData(search);
      })
      .catch((error) => console.log(error));
  }, [district, province, type]);
  
  return (
    <div>
      <ListProvince isActive={type} />
      <CardMotel data={data} />
    </div>
  );
}

export default ClientSearch;
