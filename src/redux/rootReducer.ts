import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
// slices
import productSlice from './slices/product';

// ----------------------------------------------------------------------

const rootPersistConfig = {
  key: 'root',
  storage,
  keyPrefix: 'redux-',
  whitelist: [],
};

const rootReducer = combineReducers({
  product: productSlice,
});

export { rootPersistConfig, rootReducer };
