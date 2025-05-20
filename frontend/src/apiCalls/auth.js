import { axiosInstance } from "./index";

export const signUpUser = async (user) => {
  try {
    const response = await axiosInstance.post("/api/auth/signup", user);
    return response.data;
  } catch (e) {}
};

export const loginUpUser = async (user) => {
  try {
    const response = await axiosInstance.post("/api/auth/login", user);
    return response.data;
  } catch (e) {}
};
