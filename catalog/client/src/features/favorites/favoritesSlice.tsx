import { createSlice } from '@reduxjs/toolkit'

interface FavoritesState {
  fid:string
  productId: string
  skip:boolean
}


const initialState: FavoritesState = {
    fid:"",
    productId:"",
    skip:true,
}

export const favoritesSlice = createSlice({
  name: 'favoritesdetial',
  initialState,
  reducers: {
    setSkip : (state,action) =>{
      state.skip = action.payload
   }
  },
})


export const {setSkip}= favoritesSlice.actions
export default favoritesSlice.reducer