
import React  from 'react'

import { useAppSelector, useAppDispatch } from '../../states/hooks'
import "./categories.css"
import {setid } from './categoriesSlice'
import { useGetCategoriesQuery,useGetCategoryQuery, useGetFavoriteQuery} from "../../states/services"
import { CategoriesButton } from '../components/categories_button'
import { Loading } from '../components/loading'

import {ProductOfCategory} from "../products/productOfCategory"
import { Favcard } from '../components/favorite_card'


export function Categories() {



  const {data,error,isLoading,isSuccess,isError} = useGetCategoriesQuery();// get categories
  const {cid} = useAppSelector(state=>state.categoriesdetial)
  const dispatch = useAppDispatch()
  const {refetch} = useGetFavoriteQuery( "",{ skip:false });

  const HanslerCBtn =(categoryid:string)=>{
    dispatch(setid(categoryid))
    refetch();
    }

  return (
    <div >
    {isLoading && <Loading/>}
    {isError && error}
   
   { isSuccess && data && data.map((category) =>
   <CategoriesButton key={category.id} 
     onclick={()=>{HanslerCBtn(category.id)}} 
     text={category.name} alt={<CategoryDetial 
     id={category.id}  />}/>
   )}
  
    
    {<ProductOfCategory id={cid}  />  }
    {  <Favcard  />}
    </div>
  )
}

// get category detial
export const CategoryDetial  = ({id}:{id:string})=>{
  const {data } =useGetCategoryQuery(id);
  return (
       <p key={id} >{data?.description}</p> 
     )
  
}

