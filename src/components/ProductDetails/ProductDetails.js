import { Link, Outlet, Route, Routes, useParams } from "react-router-dom"

const ProductDetails =()=>{
    
    const params=useParams();

    return(
        <>
     <h>the detail of  {params.id} </h>
     
     <nav>
        <Link  to="comment">   <h1>Comments</h1></Link>
        <Link to="review"><h1>Review</h1></Link>
     </nav>
<Outlet></Outlet>
        </>  
    )
}


export default ProductDetails;