import {
   Action,
   Middleware,
   ThunkAction,
   configureStore,
   isRejectedWithValue,
} from '@reduxjs/toolkit';
import reducer from './reducer';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

const rtkErrorLogger: Middleware = () => next => action => {
   if (isRejectedWithValue(action)) {
      console.error('action :>> ', action);
   }

   return next(action);
};

export const store = configureStore({
   reducer,
   middleware: getDefaultMiddleware =>
      getDefaultMiddleware({ immutableCheck: false, serializableCheck: false }).concat(
         rtkErrorLogger
      ),
   devTools: process.env.NODE_ENV === 'development',
});

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
   ReturnType,
   RootState,
   unknown,
   Action<string>
>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export * from './modules';
