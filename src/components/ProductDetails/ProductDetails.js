import { Link, Outlet, Route, Routes, useParams } from "react-router-dom";
import React, { useState ,useEffect} from "react";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useGlobalHook } from "../Store/Contex_provider";
import { useNavigate } from "react-router-dom";
const ProductDetails = () => {
    
  const API = "https://first-94ac3-default-rtdb.firebaseio.com/"; // base api
  const [data, setdata] = useState(null);
  const ctx= useGlobalHook();
  const navigate=useNavigate();
  // we also have to convert the price into integer because it  is in string
  //  after fetching
  
  const add = (item) => {
    const price=parseInt(item.Price)
    console.log(price)
     const updatitem={
      ...item,
      id:params.id,
      quantity:1,
      price:price,
     }
   ctx.addItem(updatitem)
    console.log("item in detail" ,updatitem)
  };
const backdrop =()=>{
    navigate('/store')
}
  const params = useParams();
  useEffect(() => {
    const detail = async () => {
      try {
        const res = await fetch(
          `${API}products/${params.category}/${params.id}.json`
        );
        const data = await res.json();

        if (res.ok) {
          setdata(data);
        }else{
             throw(data.error.message)
        }
      } catch (err) {
         toast.error(err.message)
      }

    };
    detail();
  }, [params.category, params.id]);

  return (
    <>
      <h1 className="text-center">
    Explore the product details 
     
      </h1>

      
       {  data && <div className="container mt-5 mb-5">
  <div className="row d-flex justify-content-center">
    <div className="col-md-10">
      <div className="card">
        <div className="row">
          <div className=" col-md-6">
            <div className="images p-3">
              <div className="text-center p-4">
                <img id="main-image" src={data.ImgURL} width="250" />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="product p-4">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <i className="fa fa-long-arrow-left"></i>
                  <span className="ml-1">Back</span>
                </div>
                <i className="bi bi-cart"></i>
              </div>
              <div className="mt-4 mb-3">
                <span className="text-uppercase text-muted brand">Orianz</span>
                <h5 className="text-uppercase">{data.title}</h5>
                <div className="price d-flex flex-row align-items-center">
                  <span className="act-price">{data.price}</span>
                  <div className="ml-2">
                    <small className="dis-price">$59</small>
                    <span>40% OFF</span>
                  </div>
                </div>
              </div>
              <p className="about">{data.Description}</p>
              <div className="sizes mt-5">
                <h6 className="text-uppercase">Size</h6>
                <label className="radio">
                  <input type="radio" name="size" value="S"  />
                  <span>S</span>
                </label>
                <label className="radio">
                  <input type="radio" name="size" value="M" />
                  <span>M</span>
                </label>
                <label className="radio">
                  <input type="radio" name="size" value="L" />
                  <span>L</span>
                </label>
                <label className="radio">
                  <input type="radio" name="size" value="XL" />
                  <span>XL</span>
                </label>
                <label className="radio">
                  <input type="radio" name="size" value="XXL" />
                  <span>XXL</span>
                </label>
              </div>
              <div className="cart mt-4 align-items-center">
                <button className="btn btn-danger text-uppercase mr-2 px-4"  onClick={add.bind(null, data)}>
                  Add to cart
                </button>
                <i className="fa fa-heart text-muted"></i>
                <i className="fa fa-share-alt text-muted"></i>
              </div>
              <div>
                <button className="bg-info cart mt-4 align-items-center" onClick={backdrop}> BACK</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>  }

<div className="container" >
      <nav>
      
        <Link to={`/store/${params.id}/${params.category}/review/${params.id}`}>
          <h3 className="text-decoration-none  d mx-auto"> Review</h3>
        </Link>
        <Link to="comment">
          <h4>Q & A</h4>
        </Link>
      </nav>
      <Outlet></Outlet>
      <ToastContainer />
      </div>
    </>
  );
};

export default ProductDetails;
