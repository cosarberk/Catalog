import React, { useEffect,useState } from "react";
import "./slide.css"

export const SLide = ({title1,title2,imgsrc,count}:{title1:string,title2:string,imgsrc:string,count:number})=>{



    return(
      
        

        
           <div className="SImgArea" >
               <h1 className="STitle" >{title1} <br/> {title2}  </h1>
            <img  className="SImage" src={imgsrc} /> 
            </div>

      
       
    )
}