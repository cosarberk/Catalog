import React, { useEffect, useState } from "react";
import { useGetSliderQuery } from "../../states/services";
import { Loading } from "../components/loading";
import { SLide } from "../components/slider/slide";

import './sliderer.css'

export const SLider = ()=>{




 //....my simple slider


    const [index, Funci] = useState(0);

    useEffect(() => {
        indexZero();
       
      },[]);
    useEffect(() => {
        const interval = setInterval(() => {
            index >=3 ?  indexZero() : indexPlus()
           
        }, 3000);
        return () => clearInterval(interval);
      });
  



    //..index and scroll reset
 const indexZero = ()=>{
    window.scroll({top: 0, left:0, behavior: 'smooth' })
    Funci(0)
   
 }

 const indexPlus = ()=>{
    window.scrollBy({top: 0, left: window.innerWidth, behavior: 'smooth' }) 
    Funci(index=>index+1)
 }
 
 


    const {data,error,isLoading,isSuccess,isError} = useGetSliderQuery();


    const Stitle:Array<string>=[
        "Bu Senenin Modası","Levi. T-shirt ile",
        "Gray Mağzalarından Trousers","%30 indirim",
        "COATS","Adı Markasında",
        "Bu Bahar Sezonu","MRZ Marka ile giyilir."
    
      ]

    return(
        <div  className="SLiderer">
 
          {isLoading && <Loading/>}
          {isError && error}
   
          { isSuccess && data && data.map((slides,i) =>
            
                 <SLide count={data.length-1} key={i} title1={Stitle[2*i]} title2={Stitle[2*i+1]} imgsrc={"http://localhost:4005/images/"+slides.image} />
           
             
           )}
          
        </div>
    )
}