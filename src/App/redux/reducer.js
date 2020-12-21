import { createReducer } from "@reduxjs/toolkit";
const initState = {
  contacts: [],
  filter: [],
  userId:'',
  loader: false,
  userName: 'Guest',
};

// const reducer = (state = initState, { type, payload }) => {
//   switch (type) {
//     case "ADD":
//       return { ...state, contacts: [...state.contacts, ...payload.contacts] };
//     case "DEL":
//       return {
//         ...state,
//         contacts: [...payload.contacts],
//         filter: [...payload.filter],
//       };
//     case "FILTER":
//       return {
//         ...state,
//         filter: [...payload.filter],
//       };
//     case "ALERT":
//       return {
//         ...state,
//         isAlert: payload.isAlert,
//         alertMessage: payload.alertMessage,
//       };
//     default:
//       return state;
//   }
// };

const reducer = createReducer(initState, {
  ADD: (state, {payload }) => ({
    ...state,
    contacts: [...state.contacts, ...payload.contacts],
  }),
  DEL: (state, {payload }) => ({
    ...state,
    contacts: [...payload.contacts],
    filter: [...payload.filter],
  }),
  FILTER: (state, {payload }) => ({
    ...state,
    filter: [...payload.filter],
  }),
  ALERT: (state, {payload }) => ({
    ...state,
    isAlert: payload.isAlert,
    alertMessage: payload.alertMessage,
  }),
  LOADER: (state, {payload}) => ({
    ...state,
    loader: payload.loader
  }),
  LOGIN: (state, {payload}) => ({
    ...state,
    userName: payload.userName,
    userId: payload.userId,
    contacts: [...payload.contacts]
  })
});

export default reducer;
