import { useGlobalHook } from "../Store/Contex_provider";
import { NavLink } from "react-router-dom";
const Cartbutton=(props)=>{
    const ctx=useGlobalHook();
    console.log(ctx.totalItem)

    
return (
    <>{
      ctx.isLogged &&
      <NavLink >
           <button className="btn btn-primary  btn-sm"  onClick={props.onopen}>Cart {ctx.totalItem}</button>
      </NavLink>}
    </>
)
}

export default Cartbutton;