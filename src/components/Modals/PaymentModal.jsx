import { useEffect, useState } from "react";
import { CiBank } from "react-icons/ci";

import Modal from "./Modal";
import usePaymentModal from "~/hooks/usePaymentModal";
import * as paymentService from "~/services/paymentService";

function PaymentModal() {
  const PaymentModal = usePaymentModal();
  const [data, setData] = useState({});

  useEffect(() => {
    setData({
      amount: PaymentModal.amount,
      language: "vn",
      BookedID: PaymentModal.BookedID
    });
  }, [PaymentModal]);

  const handleData = (e) => {
    const newData = { ...data };
    newData[e.target.name] = e.target.value;
    setData(newData);
  };

  const onSubmit = () => {
    paymentService
      .createUrlVnPay({ data: data })
      .then((url) => {
        if (url.status == 200) {
          window.location.href = url.data;
        }
      })
      .catch((err) => console.log(err));
  };

  const body = (
    <div className="text-2xl">
      <div className="flex h-[52px] px-6">
        <input
          type="radio"
          name="bankCode"
          value=""
          onChange={(e) => handleData(e)}
          id="vnpay"
        />
        <label
          htmlFor="vnpay"
          className="
          w-full 
          flex 
          items-center
          cursor-pointer
          hover:bg-neutral-100 "
        >
          <CiBank size={30} className="mx-5" />
          Thanh toán bằng VNPAY
        </label>
      </div>
    </div>
  );

  return (
    <Modal
      title="Thanh toán"
      isOpen={PaymentModal.isOpen}
      onClose={PaymentModal.onClose}
      actionLabel="Thanh toán"
      onSubmit={onSubmit}
      secondaryAction={PaymentModal.onClose}
      secondaryActionLabel="Hủy"
      body={body}
    />
  );
}

export default PaymentModal;
