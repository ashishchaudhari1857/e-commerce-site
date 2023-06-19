import { useContext, useEffect, useReducer } from "react";
import Context from "./Context";
import Reducer from "./Reducer";
const defaultState = {
  items: [],
  totalItem: 0,
  error: null,
  data:[],
  loading:true,
  error:null
};


const ContextProvider = (props) => {
  const [itemState, dispatchState] = useReducer(Reducer, defaultState);

  const addItem = (item) => {
    dispatchState({ type: "add", item: item });
  };

  const removeItem = (id) => {
    dispatchState({ type: "remove", id: id });
  };

  
    
  

//   here are we making http request  api call 
  const API ="https://fakestoreapi.com/products";


  useEffect(()=>{
  const fetchdata = async()=>{

  try{
    dispatchState({type:"loading"})
    const response= await fetch(API);
    
    const data=await response.json()
    if(!response.ok){
      throw Error("something is wrong")
     }
    dispatchState({type:"additem", data:data });
  }catch(err){
   dispatchState({type:"error" ,error:err})
  }
}
fetchdata();
} ,[])


  const contextValue = {
    items: itemState.items,
    totalItem: itemState.totalItem,
    addItem: addItem,
    removeItem: removeItem,
    error: itemState.error,
    data:itemState.data,
    loading:itemState.loading,
    error:itemState.error
  }
  return (
    <Context.Provider value={contextValue}>
      {props.children}
      
    </Context.Provider>
  );
};

export default ContextProvider;
// custom hook 
const useGlobalHook=()=>{

  return useContext (Context)
}

export {useGlobalHook}