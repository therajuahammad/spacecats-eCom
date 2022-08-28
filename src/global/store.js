import {rootReducer} from "./rootReducer";
import storage from "redux-persist/lib/storage";
import {persistReducer, persistStore} from "redux-persist";
import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";

const persistConfig = {
  key: "spacecats",
  storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: ['persist/PERSIST'],
    },
  }),
  devTools: process.env.NODE_ENV !== 'production'
})

export const persistor = persistStore(store);