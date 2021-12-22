import React from "react";
import "./product_card.css"
import { useUpdatePostFavMutation,useGetProductOfCategoryQuery } from "../../../states/services"


import {Favorite_btn} from "../favorite_button"




export const ProductCard =({CID,ID,title,price,fav}:{CID:string,ID:string,title:string,price:number,fav:boolean})=>{

   
   const [updatePostFav] = useUpdatePostFavMutation();
   const {refetch} = useGetProductOfCategoryQuery(CID) // refresh product card // CID = category id


   const tfav = {
      "id":ID
   }

   const handlerfav =async()=>{

      await updatePostFav(tfav)
      refetch()
   }

   return(
    <div className="PCard" >

    <div className="ColorArea" ></div>
    <h1 className="PTitle" >{title} <Favorite_btn onclick={handlerfav} id={ID} Fav={fav} />  </h1>
   <div className="PInfo" >
       <p className="PPrice" >{price} TL</p>
       <a href={"http://localhost:4005/products/"+ID} > <p  className="PMore">Ürün JSON Detayı</p> </a>
   </div>

</div>
   )
}



