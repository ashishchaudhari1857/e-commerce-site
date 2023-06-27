import {
  useCallback,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import Context from "./Context";
import Reducer from "./Reducer";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const defaultState = {
  items: [],
  totalItem: 0,
  data: [],
  btn: true,
};

const ContextProvider = (props) => {
  const API = "https://first-94ac3-default-rtdb.firebaseio.com/"; // base api
  const initialToken = localStorage.getItem("token");
  const [token, setToken] = useState(initialToken); // this  check the user  log in or not
  const isLogged = !!token;
  // auto logout

  useEffect(() => {
    const id = setTimeout(() => {
      setToken(null);
    }, 10000);
    return () => clearTimeout(id);
  }, []);

  const [itemState, dispatchState] = useReducer(Reducer, defaultState); // reducer fucntion reducer define into another file

  //  adding itme to cart array

  const addItem = async (item) => {
    const loading = toast.info("loading........");

    const data = itemState.items; // this was the  old array in which we check if item previous exist or  not
    const isexist = data.findIndex((caartItem) => item.id === caartItem.id);

    if (data && isexist !== -1) {
      toast.error("Item already exists in the main product data");
      toast.dismiss(loading);
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
      if(response.ok){
        toast.dismiss(loading);
        toast.success("item added successfully")
      }else{
        throw   Error(data.error.message)
      }
    } catch (err) {
        toast.error(err.message)
    }
    fetchcartdata();
  };

  //   add user
  const adduser = useCallback(async (user) => {
    const loading = toast.info("loading........");
    
    try {
      const response = await fetch(`${API}User.json`, {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      if (response.ok) {
        toast.success("user added successfuly")
        toast.dismiss(loading)
      }else{
         throw Error(data.error.message)
      }
    } catch (err) {
      toast.error(err.message)
    }
  }, []);

  //   remove item from cart

  const removeItem = useCallback(async (key) => {

    try {
    const loading = toast.info("loading........");

      const response = await fetch(`${API}Cart/${key}.json`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      if (response.ok)
      {
        toast.success("item deleted successfuly")
        toast.dismiss(loading)
        dispatchState({type:"removecart"})
      } 
      else{
        throw Error(data.error.message);
      }
    } catch (err) {
     toast.error(err.message)
    }
    fetchcartdata();
  });

  //   here are we making http request  api call  to get the data on screen which  stored in product block of firebase

  const fetchdata = useCallback(async () => {
    const loading = toast.info("loading........");

    try {
      const response = await fetch(`${API}products.json`);
      const data = await response.json();
      console.log("Data fetched:", data);
      if (response.ok)
      {
        toast.success("data fetch successfuly")
        toast.dismiss(loading)
      } 
      else{
        throw Error(data.error.message);
      }
      const loaddata = [];

      for (let category in data) {
        for (let key in data[category]) {
          const item = data[category][key];
          console.log("the key in the fetch", key);
          loaddata.push({
            id: key, // this is for identification in the  to check  item repeated or no in cart
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
      toast.error(err.m)
    }
  }, []);

  //  we cant  use one callback function inside another

  // here  we use the  fetch mehtod to addd the cart
  const fetchcartdata = useCallback(async () => {
    const loading = toast.info("loading........");

    try {
      const response = await fetch(`${API}Cart.json`);
      const data = await response.json();
      if (response.ok)
      {
        toast.success("data fetch successfuly")
        toast.dismiss(loading)
      } 
      else{
        throw Error(data.error.message);
      }

      const cartarray = [];
      for (let key in data) {
        cartarray.push({
          id: data[key].id,
          key: key, // this is sending in cart object  because with the help of we can track on location and then we  have easy to delete
          title: data[key].title,
          ImgURL: data[key].ImgURL,
          price: data[key].price,
        });
      }
      dispatchState({ type: "add", cartarray: cartarray });
    } catch (err) {
      toast.error(err.message)
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
  const login = (token) => {
    setToken(token);
    localStorage.setItem("token", token);
  };
  const logout = (token) => {
    setToken(null);
    localStorage.removeItem("token");
  };
  
  const contextValue = {
    items: itemState.items,
    totalItem: itemState.totalItem,
    addItem: addItem,
    adduser: adduser,
    login: login,
    logout: logout,
    token: token,
    isLogged: isLogged,
    removeItem: removeItem,
    fetchdata: fetchdata,
    data: itemState.data,
    btn: itemState.btn,
  };
  return (
    <>
      <Context.Provider value={contextValue}>{props.children}</Context.Provider>
      <ToastContainer></ToastContainer>
    </>
  );
};

export default ContextProvider;
// custom hook
const useGlobalHook = () => {
  return useContext(Context);
};

export { useGlobalHook };
