import { createSlice } from '@reduxjs/toolkit';
import { ICartProduct } from '../../types';

interface CartState {
  cart: ICartProduct[];
  total: number;
}

const initialState: CartState = {
  cart: [],
  total: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    getLocalStorageData: state => {
      state.cart = JSON.parse(localStorage.getItem('@mks:cart') || '[]');
    },
    addToCart: (state, action) => {
      const itemInCart = state.cart.find(item => item.id === action.payload.id);
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
      localStorage.setItem('@mks:cart', JSON.stringify(state.cart));
    },
    incrementQuantity: (state, action) => {
      const item = state.cart.find(item => item.id === action.payload);
      if (item) item.quantity++;
      localStorage.setItem('@mks:cart', JSON.stringify(state.cart));
    },
    decrementQuantity: (state, action) => {
      const item = state.cart.find(item => item.id === action.payload);
      if (item) {
        if (item.quantity === 1) {
          item.quantity = 1;
        } else {
          item.quantity--;
        }
      }
      localStorage.setItem('@mks:cart', JSON.stringify(state.cart));
    },
    removeItem: (state, action) => {
      const removeItem = state.cart.filter(item => item.id !== action.payload);
      state.cart = removeItem;
      localStorage.setItem('@mks:cart', JSON.stringify(state.cart));
    },
    updateTotal: state => {
      const total = state.cart.reduce((acc, item) => {
        return acc + Number(item.price) * item.quantity;
      }, 0);

      state.total = total;
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const {
  getLocalStorageData,
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeItem,
  updateTotal,
} = cartSlice.actions;
