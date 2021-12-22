import React from "react";

import "./favorite_btn.css"
export const Favorite_btn = ({id,Fav,onclick}:{id:string,Fav:boolean,onclick?:any})=>{



       return(
    <p  id={id} onClick={onclick} className="PFavorite" >


        {Fav == false ? "☆" : "★"}
        
        
        </p>
       )
    }