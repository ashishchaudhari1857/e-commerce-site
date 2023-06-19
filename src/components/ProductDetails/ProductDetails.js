import { useParams } from "react-router-dom"

const ProductDetails =()=>{
    
    const params=useParams();

    return(
        <>
     <h>the detail of  {params.id} </h>
        </>
    )
}


export default ProductDetails;