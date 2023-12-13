import { useEffect, useState } from "react";
import CardMotel from "~/components/CardMotel";
import EmptyClient from "~/components/EmptyClient";
import * as favoriteService from "~/services/favoriteService";

function Favorite() {
  const currentUser = localStorage.token;
  const [data, setData] = useState([]);

  useEffect(() => {
    if (currentUser) {
      favoriteService
        .getAllFavorite()
        .then((favorite) => setData(favorite.data))
        .catch((err) => console.log(err));
    }
  }, [currentUser]);

  if (!currentUser) {
    return (
      <EmptyClient title="Chưa đăng nhập" description="Vui lòng đăng nhập" />
    );
  }

  return (
    <div>
      <div className="text-4xl font-normal my-4 mx-10 text-center md:text-left">
        Phòng trọ yêu thích
      </div>
      <CardMotel data={data} />
    </div>
  );
}

export default Favorite;
