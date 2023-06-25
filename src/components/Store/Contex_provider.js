import { useCallback, useContext, useEffect, useReducer, useState } from "react";
import Context from "./Context";
import Reducer from "./Reducer";
const defaultState = {
  items: [],
  totalItem: 0,
  error: null,
  data: [],
  loading: true,
  btn: true,
};

const ContextProvider = (props) => {
  const API = "https://first-94ac3-default-rtdb.firebaseio.com/"; // base api
  const [token , setToken]=useState(null); // this  check the user  log in or not 
  const isLogged=!!token;

  const [itemState, dispatchState] = useReducer(Reducer, defaultState); // reducer fucntion reducer define into another file

  //  adding itme to cart array

  const addItem = async (item) => {
     
    dispatchState({ type: "loading" });  // this  is going to make loading true

    const data = itemState.items;  // this was the  old array in which we check if item previous exist or  not
    const isexist = data.findIndex((caartItem) => item.id === caartItem.id);

    if (data && isexist !== -1) {
      console.log("Item already exists in the main product data");
      dispatchState({ type: "loadingdisable" }); // this make loading   false as we reach to result  for add item if we dont make then loading loop 
      return;                                    //continuously execute
    }
    try {
        const response = await fetch(`${API}Cart.json`, {
        method: "POST",
        body: JSON.stringify(item),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      console.log(" thish is respons", data);
      if (!response.ok) {
        throw Error("something is wrong in add itme in cart");
      }
    } catch (err) {
     dispatchState({type:"error" ,error:err})
    }
    fetchcartdata();
  };

  //   add user
  const adduser = useCallback(async (user) => {
    try {
      const response = await fetch(`${API}User.json`, {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
    } catch (errr) {
      console.log(errr);
    }
  }, []);
  

  //   remove item from cart 

  const removeItem = useCallback(async (key) => {
  
    try {
      dispatchState({ type: "loading" });
      const response = await fetch(`${API}Cart/${key}.json`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      if (!response.ok) {
        throw Error("something is wrong")
      }
    } catch (err) {
      console.log(err);
    }
    fetchcartdata();
  });

  //   here are we making http request  api call  to get the data on screen which  stored in product block of firebase

  const fetchdata = useCallback(async () => {
    try {
      dispatchState({ type: "loading" });
      const response = await fetch(`${API}products.json`);
      const data = await response.json();
      console.log("Data fetched:", data);
      if (!response.ok) {
        throw Error("Something went wrong");
      }
      const loaddata = [];

      for (let category in data) {
        for (let key in data[category]) {
          const item = data[category][key];
          console.log("the key in the fetch", key);
          loaddata.push({
            id: key,   // this is for identification in the  to check  item repeated or no in cart
            Category: category,
            Description: item.Description,
            ImgURL: item.ImgURL,
            price: item.Price,
            title: item.title,
          });
        }
      }
      dispatchState({ type: "additem", data: loaddata });
    } catch (err) {
      dispatchState({ type: "error", error: err });
    }
  }, []);


  //  we cant  use one callback function inside another

  // here  we use the  fetch mehtod to addd the cart
  const fetchcartdata = useCallback(async () => {
    try {
      const response = await fetch(`${API}Cart.json`);
      const data = await response.json();
      if (!response.ok) {
        throw Error("error in  fetching cart data ");
      }

     const cartarray = [];
      for (let key in data) {
        cartarray.push({
          id: data[key].id,
          key: key,   // this is sending in cart object  because with the help of we can track on location and then we  have easy to delete
          title: data[key].title,
          ImgURL: data[key].ImgURL,
          price: data[key].price,
        });
      }
      dispatchState({ type: "add", cartarray: cartarray });
    } catch (err) {
      dispatchState({ type: "error", error: err });
    }
  }, []);

  //   this called as soon as page reload and any change is happening fetch data and fetchcart data

  useEffect(() => {
    fetchdata();
    fetchcartdata();
  }, [fetchdata, fetchcartdata]);

  //  const retry = setInterval(()=>{
  //   fetchdata()
  //  },2000)
const login =(token)=>{
  setToken(token)

}
const logout =(token)=>{
  setToken(null);
};
  const contextValue = {
    items: itemState.items,
    totalItem: itemState.totalItem,
    addItem: addItem,
    adduser: adduser,
    login:login,
    logout:logout,
    token:token,
    isLogged:isLogged,
    removeItem: removeItem,
    fetchdata: fetchdata,
    data: itemState.data,
    loading: itemState.loading,
    error: itemState.error,
    btn: itemState.btn,
  };
  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
// custom hook
const useGlobalHook = () => {
  return useContext(Context);
};

export { useGlobalHook };
