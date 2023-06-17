import { useState } from "react"
import Cart from "./Cart";
import Cartbutton from "./Cartbutton";
const Showcart =()=>{
    const [flag ,setflag]=useState(false);
 const openhandler =()=>{
    setflag(true);
 }
 const closehandler =()=>{
    setflag(false);

 }

 return (
    <>
    <Cartbutton onclose={closehandler} onopen={openhandler}></Cartbutton>
    { flag && <Cart onclose={closehandler}></Cart>}
   
    </>
 )
}

export default Showcart;