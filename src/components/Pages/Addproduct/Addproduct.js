import { useCallback, useEffect, useState } from "react"
import AddProductform from "./AddProductform"
import { useGlobalHook } from "../Store/Contex_provider";
const AddProduct =()=>{
  const ctx=useGlobalHook();
    const baseAPI="https://first-94ac3-default-rtdb.firebaseio.com/";
    const [data ,setdata]=useState(null);
    const Postdata =useCallback(async(data)=>{
    try{

        const response = await fetch(`${baseAPI}products/${data.Category}.json`,
        {
          method:"POST"  ,
          body:JSON.stringify(data),
          headers:{ 
            "Content-Type":"application/json"
          }
        });
        if (!response.ok) {
            throw new Error("Failed to add product");
          }
    }catch(error){
        console.log(error)
    }     
    
    ctx.fetchdata();
 } ,[])

useEffect(() => {
    if (data) {
        Postdata(data);
      }
    }, [data, Postdata]);


return(
    <>
    <AddProductform add_to_list={setdata}></AddProductform>
    </>
)
}

export { AddProduct};