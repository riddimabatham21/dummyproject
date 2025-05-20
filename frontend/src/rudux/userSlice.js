import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "userState",
  initialState: {
    user: null,
    allUser: [],
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    allUser: (state, action) => {
      state.allUser = action.payload;
    },
    clearUser: (state) => {
      state.user = null;
    },
  },
});

export const { setUser, clearUser, allUser } = userSlice.actions;
export default userSlice.reducer;
