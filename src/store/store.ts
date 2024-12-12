import { configureStore } from '@reduxjs/toolkit'
import productSlice from "../feature/productSlice"

export const store = configureStore({
    reducer: {
        product: productSlice,
      },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

