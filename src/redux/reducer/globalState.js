// globalState.js
import { configureStore } from "@reduxjs/toolkit";
import { accountReducer } from "./accountReducer";

// const rootReducer = {
//   auth: accountReducer, // Tambahkan reducer dari accountReducer
// };

const store = configureStore({
  reducer: {
    auth: accountReducer,
  },
});

export default store;
