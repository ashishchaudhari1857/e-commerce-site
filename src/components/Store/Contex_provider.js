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
import { upload } from "@testing-library/user-event/dist/upload";
import { useNavigate } from "react-router-dom";
const defaultState = {
  items: [],
  totalItem: 0,
  totalAmount:0,
  data: [],
  btn:false,
};

const ContextProvider = (props) => {
  const API = "https://first-94ac3-default-rtdb.firebaseio.com/"; // base api
  const initialToken = localStorage.getItem("token");
  const initialId = localStorage.getItem("ID");
  const navigate=useNavigate();

  const [token, setToken] = useState(initialToken); // this  check the user  log in or not
  const [userid, setuserid] = useState(initialId);
  console.log("useremail", userid);
  const isLogged = !!token;
  // auto logout
  const checkForInactivity =()=>{
    const expiretime =localStorage.getItem('expiretime')
   if(expiretime <Date.now()){
     toast.info("you have been inactive since 10 minute")
    setuserid(null);
    setToken(null);
     localStorage.removeItem('token')
     localStorage.removeItem('ID')
     navigate('/home')
   }
  }
 const updateExpiretime =()=>{
  const expiretime = Date.now()+3600000;
  localStorage.setItem('expiretime',expiretime);
 }

 useEffect(()=>{
  const interval =setInterval(() => {
        checkForInactivity();
  }, 100000);

  return ()=>{
    clearInterval(interval)
  }
 },[])
 
 useEffect(()=>{
updateExpiretime()
      window.addEventListener("click",updateExpiretime);
      window.addEventListener("keypress",updateExpiretime);
      window.addEventListener("scroll",updateExpiretime);
      window.addEventListener("mouseover",updateExpiretime);


      return ()=>{
        window.addEventListener("click",updateExpiretime);
        window.addEventListener("keypress",updateExpiretime);
        window.addEventListener("scroll",updateExpiretime);
        window.addEventListener("mouseover",updateExpiretime);
  
      }

 },[])

//   reducer
  const [itemState, dispatchState] = useReducer(Reducer, defaultState); // reducer fucntion reducer define into another file

  //  adding itme to cart array

  const addItem = async (item ,check) => {
     dispatchState({type:'disableBtn'})     
    const loading = toast.info("loading........");

    const data = itemState.items; // this was the  old array in which we check if item previous exist or  not
    const isexist = data.findIndex((caartItem) => item.id === caartItem.id);
//  here the  put request comes in picture
console.log(isexist)
    if ( data && isexist !== -1  && check==='+') {
      const key=data[isexist].key
 console.log(data[isexist].key)
     dispatchState({type:'enableBtn'})
     dispatchState({type:'enableBtn'})
      console.log("inside")
      const updateitem={...item , quantity:item.quantity+1}
     console.log(updateitem,"item in additem")

     try {
      const response = await fetch(`${API}${userid}/${key}.json`, {
        method: "PATCH",
        body: JSON.stringify(updateitem),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      if (response.ok) {
        dispatchState({type:'enableBtn'})
        toast.dismiss(loading);
        toast.success("one more time item added successfully");
      } else {
        throw Error(data.error.message);
      }
    } catch (err) {
      toast.error(err.message);
    }
      toast.dismiss(loading);
    
    }else if(check!=="+" && isexist===-1){
   
      //  here we can do  `${API} Cart/${userid} for better management in database
      // but  during the fetching we need have  use to two loop because the structure become
      //like  cart
      //             userid- then data for this
      //             userid-

      // like we don  in main product (fetchproduct)
      // .another way to make it user specific that by getting mail id by  using userid
      //
      try {
      const response = await fetch(`${API}${userid}.json`, {
        method: "POST",
        body: JSON.stringify(item),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      if (response.ok) {
        dispatchState({type:'enableBtn'})
        toast.dismiss(loading);
        toast.success("item added successfully");
      } else {
        throw Error(data.error.message);
      }
    } catch (err) {
      toast.error(err.message);
    }
  }else{
    dispatchState({type:'enableBtn'})
    toast.dismiss(loading);
    toast.warning("item added already if you want to increase quantity then go to cart")
    return;
  }
    fetchcartdata();
  };

  //   query
  const Addquery = useCallback(async (Query) => {
    const loading = toast.info("loading........");

    try {
      const response = await fetch(`${API}Query.json`, {
        method: "POST",
        body: JSON.stringify(Query),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      if (response.ok) {
        toast.info("your query successfuly  we  will   try connect as possible as");
        toast.dismiss(loading);
      } else {
        throw Error(data.error.message);
      }
    } catch (err) {
      toast.error(err.message);
    }
  }, []);

  //   remove item from cart

  const removeItem = useCallback(async (item) => {
   const loading = toast.info("loading.....")
      if(item.quantity >1){
      const updateitem={...item , quantity:item.quantity-1}
      console.log(updateitem,"item in additem")
 
      try {
       const response = await fetch(`${API}${userid}/${item.key}.json`, {
         method: "PATCH",
         body: JSON.stringify(updateitem),
         headers: {
           "Content-Type": "application/json",
         },
       });
       const data = await response.json();
       if (response.ok) {
        
         toast.dismiss(loading);
        toast.success("item deleted successfuly");

       } else {
         throw Error(data.error.message);
       }
     } catch (err) {
       toast.error(err.message);
     }
     }else{
    try {
      const loading = toast.info("loading........");

      const response = await fetch(`${API}${userid}/${item.key}.json`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      if (response.ok) {
        toast.success("item deleted successfuly");
        toast.dismiss(loading);
        dispatchState({ type: "removecart" });
      } else {
        throw Error(data.error.message);
      }
    } catch (err) {
      toast.error(err.message);
    }
  }
    fetchcartdata();
  },[]);

  //   here are we making http request  api call  to get the data on screen which  stored in product block of firebase
  // fetching data to display on store
  const fetchdata = useCallback(async () => {
    const loading = toast.info("loading........");

    try {
      const response = await fetch(`${API}products.json`);
      const data = await response.json();
      console.log("Data fetched:", data);
      if (response.ok) {
        toast.success("data fetch successfuly");
        toast.dismiss(loading);
      } else {
        throw Error(data.error.message);
      }
      const loaddata = [];

      for (let category in data) {

        
        for (let key in data[category]) { 
          const item = data[category][key];
       
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
      toast.error(err.m);
    }
  }, []);

  //  we cant  use one callback function inside another

  // here  we use the  fetch mehtod to addd the cart
  const fetchcartdata = useCallback(async () => {
    const loading = toast.info("loading........");

    try {
      const response = await fetch(`${API}${userid}.json`);
      const data = await response.json();
      if (response.ok) {
        toast.success("data fetch successfuly");
        toast.dismiss(loading);
      } else {
        throw Error(data.error.message);
      }
  console.log(data)

      const cartarray = [];
      for (let key in data) {
        cartarray.push({
          id: data[key].id,
          key: key, // this is sending in cart object  because with the help of we can track on location and then we  have easy to delete
          title: data[key].title,
          ImgURL: data[key].ImgURL,
          price: parseInt(data[key].price),
          quantity:data[key].quantity
        });
      }
      console.log("cartarray", cartarray);
      dispatchState({ type: "add", cartarray: cartarray });
    } catch (err) {
      toast.error(err.message);
    }
  }, [userid]);  // yha pe user id isi liye dependency kyuki usecallback clousure banayage  to id change hoti rehni chahiye user change  hone pe
  useEffect(() => {
    fetchcartdata();
  }, [fetchcartdata, token, userid]);

  //   this called as soon as page reload and any change is happening fetch data and fetchcart data

  useEffect(() => {
    fetchdata();
  }, [fetchdata]);

  //  const retry = setInterval(()=>{
  //   fetchdata()
  //  },2000)
  const login = (token, userid) => {
    setToken(token);
    setuserid(userid);
    localStorage.setItem("token", token);
    localStorage.setItem("ID", userid);
  };
  const logout = (token) => {
    setToken(null);
    setuserid(null);
    localStorage.removeItem("token");
    localStorage.removeItem("ID");
  };


  const contextValue = {
    items: itemState.items,
    totalItem: itemState.totalItem,
    addItem: addItem,
    Addquery: Addquery,
    login: login,
    logout: logout,
    token: token,
    totalAmount:itemState.totalAmount,
    isLogged: isLogged,
    removeItem: removeItem,
    fetchdata: fetchdata,
    data: itemState.data,
    btn: itemState.btn,
    userid:userid
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
