import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { postApi } from "./myApi";
import postReducer from './postSlice';

const rootReducer= combineReducers({
  [postApi.reducerPath]:postApi.reducer,
  posts: postReducer,
})

export const store = configureStore({
      reducer:rootReducer,
      middleware:(getDefaultMidleware)=> getDefaultMidleware().concat(postApi.middleware)
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;