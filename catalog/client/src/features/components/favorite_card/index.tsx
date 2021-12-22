import React from "react";

import {ProductCard} from '../../components/product_card/';
import { useGetFavoriteQuery } from "../../../states/services";
import { useAppSelector } from '../../../states/hooks'

export const Favcard = ()=>{
    const {skip} = useAppSelector(state=>state.favoritesdetial)
            const {data,isSuccess} = useGetFavoriteQuery( "",{ skip, });
        
       
        
        return(
            <div  >
                <h2 style={{"marginLeft":"20px"}} >My Favorites</h2>
                {isSuccess && data && data.map((produts) =>
                <ProductCard CID = {""} ID={produts.id} key={produts.id} title={produts.name} price={produts.price} fav={produts.isFavorite} />
      
                ) }
    
            </div>
           
        )
    } 
    
    
    