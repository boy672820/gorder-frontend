import { createSlice } from '@reduxjs/toolkit';
import { OrderState } from '../../@types/order';

const initialState: OrderState = {
  orders: null,
  isLoading: false,
  error: null,
};

const slice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    startLoading(state) {
      state.isLoading = true;
    },

    hasError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    //

    create(state, action) {},
  },
});

export default slice.reducer;

export const createOrder = () => async () => {
  // dispatch(slice.actions.startLoading());

  // try {
  //   const order = await OrderApi.create(data);

  //   dispatch(slice.actions.create(order));
  // } catch (error) {
  //   dispatch(slice.actions.hasError(error));
  // }
};
