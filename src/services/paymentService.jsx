import { httpRequest } from "~/utils/httprequest";

const token = localStorage.token;

export const createUrlVnPay = async ({ data }) => {
  try {
    const res = httpRequest.post(`payment/create_payment_vnpay`, data, {
      headers: { authorization: "Bearer " + token },
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const callbackVnPay = async ({ param }) => {
  try {
    const res = httpRequest.post(`payment/vnpay_callback`, param, {
      headers: { authorization: "Bearer " + token },
    });
    return res;
  } catch (error) {
    return error;
  }
};

export const successVnPay = async ({ id }) => {
  try {
    const res = httpRequest.get(`booked/success-payment/${id}`, {
      headers: { authorization: "Bearer " + token },
    });
    return res;
  } catch (error) {
    return error;
  }
};
