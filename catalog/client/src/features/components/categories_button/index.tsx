
import React from "react"
import "./category_btn.css"

export const CategoriesButton =({text,alt,onclick}:{text:string,alt:any,onclick?:any})=>{
    return(
      
        <div  onClick={onclick} className="CategoriesButton">
          {text}
          {alt}
        </div>
       
    )
}