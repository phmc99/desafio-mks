import {
  configureStore,
  ThunkAction,
  Action,
  ThunkDispatch,
  AnyAction,
} from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import { cartSlice } from './cart';

const makeStore = () =>
  configureStore({
    reducer: {
      [cartSlice.name]: cartSlice.reducer,
    },
  });

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppDispatch = ThunkDispatch<AppState, any, AnyAction>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;

export const wrapper = createWrapper<AppStore>(makeStore);
