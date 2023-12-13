import ListProvince from "~/components/ListProvince";
import CardMotel from "~/components/CardMotel";
import * as motelServicer from "~/services/motelService";
import { useEffect, useState } from "react";

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    motelServicer
      .getAllMotel()
      .then((motel) => setData(motel.data))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <ListProvince />
      <CardMotel data={data} />
    </div>
  );
}

export default Home;
