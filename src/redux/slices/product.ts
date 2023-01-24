import { createSlice } from '@reduxjs/toolkit';
import { ProductState } from '../../@types/product';
import { ProductApi } from '../../api';
import { dispatch } from '../store';

const initialState: ProductState = {
  products: [],
  //
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

    getAll(state, action) {
      state.products = action.payload;
      state.isLoading = false;
    },
  },
});

export default slice.reducer;

export const getProducts = () => async () => {
  dispatch(slice.actions.startLoading());

  try {
    const products = await ProductApi.getAll();

    dispatch(slice.actions.getAll(products));
  } catch (error) {
    dispatch(slice.actions.hasError(error));
  }
};
