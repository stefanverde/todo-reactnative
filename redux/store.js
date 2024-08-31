import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './slices/tasksSlice';

// const rootReducer = combineReducers({
//   task: tasksReducer,
// });

export const store = configureStore({
  reducer:{ tasks: tasksReducer},
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware()
//   .concat(userApi.middleware, mailApi.middleware, authApi.middleware, storeApi.middleware),
});

export default store;
