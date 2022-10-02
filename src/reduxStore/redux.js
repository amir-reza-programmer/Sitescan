import { configureStore, createSlice } from "@reduxjs/toolkit";

const minDeskWidth = 768;
const initialMobileState = {
  mobileView: window.innerWidth < minDeskWidth,
};

const mobileSlice = createSlice({
  name: "mobile",
  initialState: initialMobileState,
  reducers: {
    checkMobileView(state) {
      state.mobileView = window.innerWidth < minDeskWidth;
    },
  },
});

const store = configureStore({
  reducer: { mobile: mobileSlice.reducer },
});

export const mobileActions = mobileSlice.actions;

export default store;
