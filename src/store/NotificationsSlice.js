import { createSlice } from "@reduxjs/toolkit";

const initialState = { notifications: null };
const NotificationsSlice = createSlice({
  name: "notificationsSlice",
  initialState,
  reducers: {
    sendNotification(state, action) {
      console.log(action.payload)
      state.notifications = {
        status: action.payload.status,
        message: action.payload.message,
        title: action.payload.title,
      };
    }}
});

export const notificationActions = NotificationsSlice.actions;
export default NotificationsSlice.reducer;
