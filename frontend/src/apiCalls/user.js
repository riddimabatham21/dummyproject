import { axiosInstance } from "./index";

export const getUserLoggedUser = async () => {
  try {
    let response = await axiosInstance.get("api/user/LoginUser");
    return response.data;
  } catch (e) {
    return e;
  }
};

export const getAllUser = async () => {
  try {
    let response = await axiosInstance.get("api/user/getAllUsers");
    return response.data;
  } catch (e) {
    return e;
  }
};
