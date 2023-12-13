import EmptyClient from "~/components/EmptyClient";
import ListBooked from "./ListBooked";
import * as bookedService from "~/services/BookedService";
import { useEffect, useState } from "react";
import PaymentModal from "~/components/Modals/PaymentModal";

function Booked() {
  const currentUser = localStorage.token;
  const [data, setData] = useState([]);

  const fetchData = () => {
    bookedService
      .myBooked()
      .then((booked) => setData(booked.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (currentUser) {
      fetchData();
    }
  }, [currentUser]);

  const cancel = (id) => {
    bookedService
      .cancelBooked({ id: id })
      .then((data) => {
        if (data.status === 200) {
          fetchData();
        }
      })
      .catch((err) => console.log(err));
  };

  if (!currentUser) {
    return (
      <EmptyClient title="Chưa đăng nhập" description="Vui lòng đăng nhập" />
    );
  }

  return (
    <div className="mx-4 mt-10">
      <p className="text-2xl mb-10">Phòng trọ đã đặt</p>
      <ListBooked data={data} cancel={cancel} />
      <PaymentModal />
    </div>
  );
}

export default Booked;
