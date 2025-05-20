import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../rudux/userSlice";

export const store = configureStore({
  reducer: {
    userState: userReducer, // matches useSelector((state) => state.userState)
  },
});
