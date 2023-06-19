import React from "react";
const Context =React.createContext(
    {
        items:[],
        totalitem:0,
        addItem: (item) => {},
        removeItem: (id) => {},
        data:[]
    }
)
export default Context;