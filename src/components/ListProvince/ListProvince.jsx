import { useEffect, useState } from "react";
import ListItems from "./ListItems";
import * as provinceService from "~/services/provinceService";

function ListProvince() {
  const [province, setProvince] = useState([]);

  useEffect(() => {
    provinceService
      .getProvince()
      .then((province) => {
        setProvince(province);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div
      className="
        pt-4
        pb-4
        flex
        overflow-x-auto"
    >
      {province.map((data) => (
        <ListItems key={data.name} data={data} />
      ))}
    </div>
  );
}

export default ListProvince;
