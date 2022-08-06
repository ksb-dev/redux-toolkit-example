import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './features/cart/cartSlice'
import modalReducer from './features/modal/modalSlice'

//console.log(cartReducer)

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: modalReducer
  }
})
