import { useState } from "react";
import Itemlist from "./Itemlist";
import { useGlobalHook } from "../../../Store/Contex_provider";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Items = () => {
const ctx=useGlobalHook();

 console.log(ctx.data)
 
 
  const loading =ctx.loading;
  
  //  const [items, setitems]=useState(productsArr);
  const itemlist =ctx.data.map((item )=>{
    return(<>
    <Itemlist item={item} key={item.id} ></Itemlist>
    </>
    )
  })
  console.log(itemlist)
  return(
  <>
  <div className="container " >
 
    <div className="row" >
      {itemlist}
    </div>
    </div>'
    <ToastContainer/>
    </>
  );
};

export default Items;