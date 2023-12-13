import { httpRequest } from "~/utils/httprequest";

export const searchMotel = async ({ district, province, type }) => {
  try {
    const res = await httpRequest.get("motel/search-motel", {
      params: {
        district,
        province,
        type,
      },
    });

    return res.data
  } catch (error) {
    console.log(error);
  }
};
