import { useLocation } from "react-router-dom";
import ListProvince from "~/components/ListProvince";

function ClientSearch() {
  const location = useLocation();
  const param = new URLSearchParams(location.search);
  const province = param.get("province");

  return (
    <div>
      <ListProvince />
      Tim kiếm với dữ liệu thành phố là : {province}
    </div>
  );
}

export default ClientSearch;
