import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { productsReducer } from "./features/ProductListing/productsSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const reducers = combineReducers({ products: productsReducer });

const persistentConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistentConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
