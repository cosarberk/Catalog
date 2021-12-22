import React from "react";

import { ProductCard } from '../components/product_card'
import { useGetProductOfCategoryQuery } from "../../states/services"


//get product of  category detial
export const ProductOfCategory  = ({id}:{id:string})=>{

    const {data ,isSuccess} =useGetProductOfCategoryQuery(id);
    return (
           <div>
            {isSuccess && data && data.map((produts) =>
            <ProductCard CID = {id} ID={produts.id} key={produts.id} title={produts.name} price={produts.price} fav={produts.isFavorite} />
  
            ) }
           </div>
       )
    
  }