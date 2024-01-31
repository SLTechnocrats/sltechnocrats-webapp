import { configureStore } from "@reduxjs/toolkit";
import portfolioSlice from "./portfolio";

const store = configureStore({
    reducer:{
        "portfolio": portfolioSlice.reducer,
    }
});
export default store;