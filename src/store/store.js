import { configureStore } from "@reduxjs/toolkit";
import fish from "./fish/FishSlice";

const store = configureStore({
    reducer: {
        fish
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware()
})

export default store;