import { httpRequest } from "~/utils/httprequest";

const token = localStorage.token;

export const booked = async ({ motelId }) => {
  try {
    const res = await httpRequest.get(`booked/${motelId}`, {
      headers: { authorization: "Bearer " + token },
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const myBooked = async () => {
  try {
    const res = await httpRequest.get(`booked/my-booked`, {
      headers: { authorization: "Bearer " + token },
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const cancelBooked = async ({id}) => {
  try {
    const res = await httpRequest.delete(`booked/${id}/cancel`, {
      headers: { authorization: "Bearer " + token },
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};
