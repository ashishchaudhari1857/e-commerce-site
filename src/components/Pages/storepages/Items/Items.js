import Itemlist from "./Itemlist";
import { useGlobalHook } from "../../../Store/Contex_provider";
const Items = () => {
const ctx=useGlobalHook();

 console.log(ctx.data)
 
 
  
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
    </>
  );
};

export default Items;