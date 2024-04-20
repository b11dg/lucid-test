import { configureStore } from "@reduxjs/toolkit";
import { autocompleteApi } from "../services/autocomplete";
import { setupListeners } from "@reduxjs/toolkit/query";

const store = configureStore({
    reducer: {
        [autocompleteApi.reducerPath]: autocompleteApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(autocompleteApi.middleware),
});

setupListeners(store.dispatch);


export default store;
