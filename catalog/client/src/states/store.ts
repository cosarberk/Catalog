import { configureStore, ConfigureStoreOptions } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { categoriesApi,productsApi,favoriteApi,SliderApi } from './services';
import categoriesReducer from "../features/categories/categoriesSlice"
import productsReducer from "../features/products/productsSlice"
import FavoritesReducer from '../features/favorites/favoritesSlice';

export const createStore = (options?: ConfigureStoreOptions['preloadedState'] | undefined) =>
  configureStore({
    reducer: {
      [categoriesApi.reducerPath]: categoriesApi.reducer,
      categoriesdetial:categoriesReducer,
      [productsApi.reducerPath]: productsApi.reducer,
      productdetial:productsReducer,
      [favoriteApi.reducerPath]:favoriteApi.reducer,
      favoritesdetial:FavoritesReducer,
      [SliderApi.reducerPath]:SliderApi.reducer,
     
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(
        categoriesApi.middleware,
        productsApi.middleware,
        favoriteApi.middleware,
        SliderApi.middleware,
         ),
    ...options,
  });

export const store = createStore();

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export type RootState = ReturnType<typeof store.getState>;
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
