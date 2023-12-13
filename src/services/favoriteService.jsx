import { httpRequest } from "~/utils/httprequest";

const token = localStorage.token;

export const getAllFavorite = async () => {
  try {
    const res = await httpRequest.get("favorite/motel-my-liked", {
      headers: { Authorization: "Bearer " + token },
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const addFavorite = ({ motelId }) => {
  const res = httpRequest.post(
    "favorite/liked",
    { motelId },
    {
      headers: { Authorization: "Bearer " + token },
    }
  );
  return res;
};

export const deleteFavorite = ({ id }) => {
  const res = httpRequest.delete(
    `favorite/unLiked/${id}`,
    {
      headers: { Authorization: "Bearer " + token },
    }
  );
  return res;
};

