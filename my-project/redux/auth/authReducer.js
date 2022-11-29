import { createSlice } from "@reduxjs/toolkit";

const state = {
  userId: null,
  nickName: null,
  stateChange: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState: state,
  reducers: {
    updateUserProfile: (state, { payload }) => ({
      ...state,
      userId: payload.userId,
      nickName: payload.nickName,
    }),
    authStateChange: (state, { payload }) => ({
      ...state,
      stateChange: payload.stateChange,
    }),
    authSignOut: () => state,
  },
});
// const actions = {
// 	 updateUserProfile: (state, { payload }) => ({
//       ...state,
//       userId: payload.userId,
//       nickName: payload.nickName,
//     }),
//     authStateChange: (state, { payload }) => ({
//       ...state,
//       stateChange: payload.stateChange,
//     }),

// 	  authSignOut: ()=>
// };

// export const authSlice = createSlice({
//   name: "auth",
//   initialState: {
//     userId: null,
//     nickName: null,
//     stateChange: false,
//   },
//   reducers: {
//     updateUserProfile: (state, { payload }) => ({
//       ...state,
//       userId: payload.userId,
//       nickName: payload.nickName,
//     }),
//     authStateChange: (state, { payload }) => ({
//       ...state,
//       stateChange: payload.stateChange,
//     }),

// 	  authSignOut: ()=>
//   },
// });
