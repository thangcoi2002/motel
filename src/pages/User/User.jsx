import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import DetailUser from "~/components/DetailUser";
import EmptyClient from "~/components/EmptyClient";
import * as authService from "~/services/authService";
import * as motelService from "~/services/motelService";

function User() {
  const [data, setData] = useState({});
  const [dataMotel, setDataMotel] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    authService
      .getUser({ id: id })
      .then((user) => {
        setData(user.data);
      })
      .catch((err) => console.log(err));

    motelService
      .getMotelUser({ userId: id })
      .then((motel) => {
        setDataMotel(motel.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  if (!data) {
    return (
      <EmptyClient
        title="Không tìm được người dùng"
        description="Vui lòng xem lại người dùng"
      />
    );
  }

  return <DetailUser dataUser={data} dataMotel={dataMotel}/>;
}

export default User;
