import React, { useState } from "react";

import "./favorites.css"
import { useAppDispatch } from '../../states/hooks'
import { setSkip} from "./favoritesSlice"

export const Favorites = ()=>{
   
    const dispatch = useAppDispatch()


    //..setskip to let fetching favlist 

    return(
        <div onClick={()=>{dispatch(setSkip(false))}} className="FavBtn" >
            <h1>
            ☆
            </h1>
            <p className="Favp" >Favorites</p>
        </div>
    )
}

