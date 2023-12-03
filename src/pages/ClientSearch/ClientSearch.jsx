import { useLocation } from "react-router-dom";
import ListProvince from "~/components/ListProvince";

function ClientSearch() {
  const location = useLocation();
  const param = new URLSearchParams(location.search);
  const type = param.get("type");

  return (
    <div>
      <ListProvince isActive={type}/>
      Tim kiếm với dữ liệu thành phố là : {type}
    </div>
  );
}

export default ClientSearch;
