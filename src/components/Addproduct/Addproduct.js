import { useCallback, useEffect, useState } from "react"
import AddProductform from "./AddProductform"
const AddProduct =()=>{
    const [data ,setdata]=useState(null);
 const Postdata =useCallback(async(data)=>{
    try{

        const response = await fetch("https://http-request-b5a99-default-rtdb.firebaseio.com/products.json",
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
        console(error)
    }          
 } ,[])

/useEffect(() => {
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