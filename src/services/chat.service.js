import api from "@/api/axios";
import { getToken } from "./token.service";

export const getChats = async () => {
  try {
    const res = await api.get("/chat/my", {
      headers: {
        Authorization: `Bearer ${getToken("accessToken")}`,
      },
    });

    return res.data;
  } catch (error) {
    console.error(error);
    return error;
  }
};
