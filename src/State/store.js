
import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import {resturantquicksearch } from '../Services/apiConfig';
import {postingorders } from '../Services/apiConfig1';
import {loginRegisterApi} from '../Services/apiConfig2';
import menuListReducer from '../Details/MenuListSlice'

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [resturantquicksearch.reducerPath]: resturantquicksearch.reducer,
    [postingorders.reducerPath]: postingorders.reducer,
    [loginRegisterApi.reducerPath]:  loginRegisterApi.reducer,
    menuList: menuListReducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([resturantquicksearch.middleware, postingorders.middleware, loginRegisterApi.middleware])
})

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization

setupListeners(store.dispatch)