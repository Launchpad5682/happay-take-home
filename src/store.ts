import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { productsReducer } from "./features/ProductListing/productsSlice";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import persistStore from "redux-persist/lib/persistStore";
import { cartReducer } from "./features/Cart/cartSlice";

const reducers = combineReducers({
  products: productsReducer,
  cart: cartReducer,
});

const persistentConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistentConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
