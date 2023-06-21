import { useCallback, useContext, useEffect, useReducer } from "react";
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
  const API = "https://first-94ac3-default-rtdb.firebaseio.com/";

  //

  const [itemState, dispatchState] = useReducer(Reducer, defaultState);
  //
  const addItem = async (item) => {
    // console.log(itemState.items, "thish is our tite,");
    // this && is used to prevent position take undefine
    dispatchState({ type: "loading" });
    const data = itemState.items;
    const isexist = data.findIndex((caartItem) => item.id === caartItem.id);
    console.log(isexist);
    if (data && isexist !== -1) {
      console.log("Item already exists in the main product data");
      dispatchState({ type: "loadingdisable" });
      console.log("dispatchcalled");
      return;
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
      console.log(err);
    }
    fetchcartdata();
  };

  //   add user
  const adduser = useCallback(
    async (user) => {
      try {
        const response = await fetch(`${API}User.json`, {
          method: "POST",
          body: JSON.stringify(user),
          headers: {
            "Content-Type": "application/json",
          },
        });

         const data =await response.json();
      } catch (errr) {
        console.log(errr);
      }
    },
    []  );


  const removeItem = useCallback(async (key) => {
    //  console.log(id);

    try {
      dispatchState({ type: "loading" });
      const response = await fetch(`${API}Cart/${key}.json`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      if (response.ok) {
        console.log("success");
        // throw Error("something is wrong")
      }
    } catch (err) {
      console.log(err);
    }
    fetchcartdata();
  });

  //   here are we making http request  api call

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
            id: key,
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
  //  ew cant  use one callback function inside another

  // here  we use the  fetch mehtod to addd the cart
  const fetchcartdata = useCallback(async () => {
    try {
      const response = await fetch(`${API}Cart.json`);
      const data = await response.json();
      if (!response.ok) {
        throw Error("something is wrong");
      }

      const cartarray = [];
      for (let key in data) {
        cartarray.push({
          id: data[key].id,
          key: key,
          title: data[key].title,
          ImgURL: data[key].ImgURL,
          price: data[key].price,
        });
      }
      dispatchState({ type: "add", cartarray: cartarray });
    } catch (err) {
      console.log(err);
    }
  }, []);
  useEffect(() => {
    fetchdata();
    fetchcartdata();
  }, [fetchdata, fetchcartdata]);

  //  const retry = setInterval(()=>{
  //   fetchdata()
  //  },2000)

  const contextValue = {
    items: itemState.items,
    totalItem: itemState.totalItem,
    addItem: addItem,
    adduser:adduser,
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
