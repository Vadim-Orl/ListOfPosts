import { combineReducers, configureStore } from "@reduxjs/toolkit"
import postReducer from '../widgets/PostsList/api/postSlice';
import { baseApi } from "../shared/api/baseApi";

const rootReducer= combineReducers({
  [baseApi.reducerPath]:baseApi.reducer,
  data: postReducer,
})

export const store = configureStore({
      reducer:rootReducer,
      middleware:(getDefaultMidleware)=> getDefaultMidleware().concat(baseApi.middleware)
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;