import { createSlice } from "@reduxjs/toolkit";

const initialState = { notifications: null };
const NotificationsSlice = createSlice({
  name: "notificationsSlice",
  initialState,
  reducers: {
    sendNotification(state, action) {
      state.notifications = {
        status: action.payload.status,
        message: action.payload.message,
        title: action.payload.title,
      };
    },
  reset(state) {
    state.notifications = null;
  }}
});

export const notificationActions = NotificationsSlice.actions;
export default NotificationsSlice.reducer;
