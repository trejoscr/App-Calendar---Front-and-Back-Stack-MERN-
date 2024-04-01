import { configureStore } from "@reduxjs/toolkit"
import { uiSlice, calendarSlice, authSlice } from "./";

export const store = configureStore({
    reducer: {
        auth:     authSlice.reducer,
        calendar: calendarSlice.reducer,
        ui:       uiSlice.reducer
    },
    middleware: (buildGetDefaultMiddleware) => buildGetDefaultMiddleware({
        serializableCheck: false
    })
});