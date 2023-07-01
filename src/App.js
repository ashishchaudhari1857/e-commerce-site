import "./App.css";
import React, { Suspense } from "react";
import Context from "./components/Store/Context";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Header/Footer";
import Home from "./components/Pages/Home";
// import Items from "./components/Pages/storepages/Items/Items";
// import About from "./components/Pages/About";
// import Contact from "./components/Pages/Contact";
//  import Error from "./components/Error/Error";
// import Profile from "./components/Pages/Profile";
// import Authform from "./components/Auth/Authform";
// import ProductDetails from "./components/ProductDetails/ProductDetails";
// import { AddProduct } from "./components/Pages/Addproduct/Addproduct";
// import Comment from "./components/ProductDetails/Comment";
// import { Review } from "./components/ProductDetails/Review";

const  Contact =React.lazy(()=> import("./components/Pages/Contact"))
const   About =React.lazy(()=>import("./components/Pages/About"))
const   Items=React.lazy(()=>import("./components/Pages/storepages/Items/Items"))
const  Error=React.lazy(()=>import("./components/Error/Error"))
const Profile=React.lazy(()=>import( "./components/Pages/Profile"))
const Authform=React.lazy(()=>import("./components/Auth/Authform"))
const ProductDetails=React.lazy(()=>import("./components/ProductDetails/ProductDetails"))
const AddProduct =React.lazy(()=>import("./components/Pages/Addproduct/Addproduct"))
const Comment =React.lazy(()=>import("./components/ProductDetails/Comment"))
const Review =React.lazy(()=>import("./components/ProductDetails/Review"))
function App() {
  const ctx = useContext(Context);
  const isLogged = ctx.isLogged;

  
  return (
    <>
      <div>
        <Suspense fallback="">
        <Header />

        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/store/:id/:category" element={<ProductDetails />}>
            <Route path="comment" element={<Comment />} />
            <Route path="review/:ProductID" element={<Review />} />
          </Route>

          <Route path="/login" element={<Authform />} />
          <Route path="*" element={<Error />} />

          {isLogged && (
            <>
              <Route path="/store" element={<Items />} />
              <Route path="/addproduct" element={<AddProduct />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/profile" element={<Profile />} />
            </>
          )}
        </Routes>
        <Footer />
        </Suspense>
      </div>
    </>
  );
}

export default App;
