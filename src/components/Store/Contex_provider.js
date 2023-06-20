import { useCallback, useContext, useEffect, useReducer } from "react";
import Context from "./Context";
import Reducer from "./Reducer";
const defaultState = {
  items: [],
  totalItem: 0,
  error: null,
  data:[],
  loading:true,
 
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
  const API ="https://api.escuelajs.co/api/v1/products"



  const fetchdata = useCallback(async () => {
    try {
      dispatchState({ type: "loading" });
      const response = await fetch(API);
      const data = await response.json();
      if (!response.ok) {
        throw Error("Something went wrong");
      }
      dispatchState({ type: "additem", data: data });
    } catch (err) {
      dispatchState({ type: "error", error: err });
    }
  }, []);
  //  ew cant  use one callback function inside another

  useEffect(() => {
    fetchdata();
  }, [fetchdata]);



  //  const retry = setInterval(()=>{
  //   fetchdata()
  //  },2000)

  const contextValue = {
    items: itemState.items,
    totalItem: itemState.totalItem,
    addItem: addItem,
    removeItem: removeItem,
  
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