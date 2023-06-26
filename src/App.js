import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Header/Footer";
import Items from "./components/Pages/storepages/Items/Items";
import About from "./components/Pages/About";
import Error from "./components/Error/Error";
import Home from "./components/Pages/Home";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AddProduct } from "./components/Pages/Addproduct/Addproduct";
import Contact from "./components/Pages/Contact";
import Comment from "./components/ProductDetails/Comment";
import { Review } from "./components/ProductDetails/Review";
import Authform from "./components/Auth/Authform";
import Profile from "./components/Pages/Profile";
import { useContext } from "react";
import Context from "./components/Store/Context";
import { Outlet } from "react-router-dom";
function App() {
  const ctx = useContext(Context);
  const isLogged = ctx.isLogged;

  return (
    <>
      <Header />

      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/store/:id" element={<ProductDetails />}>
          <Route path="comment" element={<Comment />} />
          <Route path="review" element={<Review />} />
        </Route>

        <Route path="/login" element={<Authform />}></Route>
        <Route path="*" element={<Error />} />
        <Route path="/logout" element={<Authform />} />


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
    </>
  );
}

export default App;
