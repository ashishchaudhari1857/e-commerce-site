import { useState } from "react";
import Itemlist from "./Itemlist";

const Items = () => {
   
  const productsArr = [
    {
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },
    {
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },
     {
      title: "Yellow and Black Colors",
      price: 70,
     imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },

    {
      title: "Blue Color",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];
   const [items, setitems]=useState(productsArr);
  const itemlist =items.map((item ,i)=>{
    return<Itemlist item={item } key ={i} ></Itemlist>
  })
  return <>
  
  <div className="container " >
    <div className="row" >
    {itemlist}
    </div>
    </div>
  </>; 
};

export default Items;