import React from "react";
const Context =React.createContext(
    {
        items:[],
        totalitem:0,
        addItem: (item) => {},
        removeItem: (id) => {},
        data:[],
        token:'',
        isLogged:false,
        login:(token)=>{},
        logout:()=>{},
    }
)
export default Context;