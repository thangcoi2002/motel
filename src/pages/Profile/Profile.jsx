import { useEffect, useState } from "react";

import DetailUser from "~/components/DetailUser";
import EmptyClient from "~/components/EmptyClient";
import * as authService from "~/services/authService";
import * as motelService from "~/services/motelService";

function Profile() {
  const [dataUser, setDataUser] = useState({});
  const [dataMotel, setDataMotel] = useState([]);
  const [currentUser, setCurrentUser] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setCurrentUser(true);
      authService
        .getCurrentUser()
        .then((user) => {
          setDataUser(user.data);
        })
        .catch((err) => console.log(err));

      motelService
        .getMyMotel()
        .then((motel) => setDataMotel(motel.data))
        .catch((err) => console.log(err));
    }
  }, []);

  if (!currentUser) {
    return (
      <EmptyClient title="Chưa đăng nhập" description="Vui lòng đăng nhập" />
    );
  }

  return <DetailUser dataUser={dataUser} dataMotel={dataMotel}/>;
}

export default Profile;
