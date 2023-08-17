import { config } from "@config/config";
import { configStore } from "@config/config.store";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

export const coreStore = configureStore({
  devTools: {
    name: config.APP_NAME,
  },
  reducer: combineReducers(configStore),
});
