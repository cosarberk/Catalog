import { createSlice } from '@reduxjs/toolkit'

interface CategoriesState {
  cid:string
  cdetial: boolean
}


const initialState: CategoriesState = {
  cid:"",
  cdetial: false,
}

export const categoriesSlice = createSlice({
  name: 'categoriesdetial',
  initialState,
  reducers: {
    setid : (state,action) =>{
       state.cid = action.payload
    }
  },
})


export const {setid } = categoriesSlice.actions
export default categoriesSlice.reducer