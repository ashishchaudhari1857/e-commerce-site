import { useState } from "react";
import Itemlist from "../Pages/storepages/Itemlist";
import { useGlobalHook } from "../Store/Contex_provider";
const Items = () => {
    const ctx=useGlobalHook();

  
 console.log(ctx.data)
 console.log(ctx.error)
 
 
  const loading =ctx.loading;
  const error=ctx.error;
  //  const [items, setitems]=useState(productsArr);
  const itemlist =ctx.data.map((item )=>{
    return(<>
    <Itemlist item={item} key={item.id} ></Itemlist>
    </>
    )
  })
  console.log(itemlist)
  return(
  
  <div className="container " >
 
    <div className="row" >

      {!loading &&  itemlist.length >0 && itemlist} 
      {!loading && itemlist.length===0 &&<p>No Data found</p>}
      {error    && <p>something is wromg </p>}
      {loading &&  !error &&<p>Loading.......</p> } 
   
    </div>
    </div>
  );
};

export default Items;