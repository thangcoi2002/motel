import { httpRequest } from "~/utils/httprequest";

const token = localStorage.token;

export const getAllMotel = async () => {
  try {
    const res = await httpRequest.get("motel/get-all");
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getDetailMotel = async (id) => {
  try {
    const res = await httpRequest.get(`motel/get-motel/${id}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getMyMotel = async () => {
  try {
    const res = await httpRequest.get("motel/my-motel", {
      headers: { Authorization: "Bearer " + token },
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getMotelUser = async ({ userId }) => {
  try {
    const res = await httpRequest.get(`motel/motel-user/${userId}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const postMotel = async ({ data }) => {
  try {
    const res = await httpRequest.post(`motel/create-motel`, data, {
      headers: { Authorization: "Bearer " + token },
    });
    return res;
  } catch (error) {
    return error.response;
  }
};

export const deleteMotel = async ({ id }) => {
  try {
    const res = await httpRequest.delete(`motel/delete-motel/${id}`, {
      headers: { Authorization: "Bearer " + token },
    });

    return res;
  } catch (error) {
    return error.response;
  }
};
