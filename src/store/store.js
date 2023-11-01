import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"
import calendarReducer from "./calendarSlice"

export const store = configureStore({
    reducer: calendarReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    })
})