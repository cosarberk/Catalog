import { createSlice } from '@reduxjs/toolkit'

interface ProductsState {
  pid:string
  name:string
  description:string
  price:number
  isFavorite:boolean
}


const initialState: ProductsState = {
    pid:"",
    name:"",
    description:"",
    price:0,
    isFavorite:false,
}

export const productsSlice = createSlice({
  name: 'productdetial',
  initialState,
  reducers: {
   
  },
})

export const  s = productsSlice.actions
export default productsSlice.reducer