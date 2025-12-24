// Register

import api from "@/api/axios";
import toast from "react-hot-toast";

export const registerUser = async (data, router, setLoading) => {
  setLoading(true);
  console.log(process.env.NEXT_PUBLIC_BACKEND_URL);
  try {
    const res = await api.post("/auth/register", data);
    console.log(res);
    router.push("/login");
    return res.data;
  } catch (error) {
    const err = error?.response?.data?.message;
    toast.error(err || "Server Error");

    return error?.response?.data?.message;
  } finally {
    setLoading(false);
  }
};

export const loginUser = async (data, router, setLoading, setUser) => {
  setLoading(true);
  try {
    const res = await api.post("/auth/login", data);
    const msg = res.data?.message;
    toast.success(msg);

    setUser(res.data?.user);
    localStorage.setItem("User", JSON.stringify(res.data?.user));
    localStorage.setItem("accsessToken", res.data?.user?.accessToken);
    router.push("/chats");
    console.log(error);
    
    return res.data;
  } catch (error) {
    const err = error?.response?.data?.message;
    toast.error(err || "Server Error");
    console.log(error);
    
    return error?.response?.data?.message;
  } finally {
    setLoading(false);
  }
};
