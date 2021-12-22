import {createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";



export interface Categories {
   
    id: string;
    name: string;
    description: string;
   
  }
  
  type CategoriesResponse = Categories[];
  
  export interface Products {
    id:string;
    name:string;
    description:string;
    price:number;
    isFavorite:boolean;
   
  }
  
  type ProductsResponse = Products[];

  export interface Favorites {
   
    id: string;
    productID: string;
   
  }
  
  type FavoritesResponse = Favorites[];


  export interface Slider {
   
    id: string;
    image:string;
    productID: string;
   
  }
  
  type SliderResponse = Slider[];

export const categoriesApi = createApi({
  reducerPath: 'categoriesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4005/categories' }),
  endpoints: (builder) => ({
    getCategories: builder.query<CategoriesResponse, void>({
        query: () => ({ url: '/' }),
      
    }),
    
    getCategory: builder.query<Categories, string>({
        query: (id) => `/${id}`,
    }),

    getProductOfCategory: builder.query<ProductsResponse, string>({
        query: (id) => ({ url: `/${id}/products/` }),
    }),

  }),
})

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4005/products' }),
  tagTypes: ['Posts'],
  endpoints: (builder) => ({
   
    getProduct: builder.query<Products, string>({
        query: (id) => `/${id}`,
      }),

      updatePostFav: builder.mutation<Products, Partial<Products>>({
        query: (body) => ({
          url: `/${body.id}/fav`,
          method: 'POST',
          body,
        }),
        invalidatesTags: ['Posts'],
      }),
   
  }),
})


export const favoriteApi = createApi({
  reducerPath: 'favoriteApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4005/favorite' }),
  tagTypes: ['Posts'],
  endpoints: (builder) => ({
   
    getFavorite: builder.query<ProductsResponse, string>({
      query: () => ({ url: '/' }),
      }),
   
  }),
})

export const SliderApi = createApi({
  reducerPath: 'SliderApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4005/sliders' }),
  tagTypes: ['Posts'],
  endpoints: (builder) => ({
   
    getSlider: builder.query<SliderResponse, void>({
      query: () => ({ url: '/' }),
      }),
   
  }),
})

export const {useGetCategoriesQuery,useGetCategoryQuery,useGetProductOfCategoryQuery} = categoriesApi;
export const {useGetProductQuery,useUpdatePostFavMutation} = productsApi;
export const {useGetFavoriteQuery} = favoriteApi;
export const {useGetSliderQuery} = SliderApi;