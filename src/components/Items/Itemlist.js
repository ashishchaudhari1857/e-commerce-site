import { useContext } from "react";
import { Link } from "react-router-dom";
import Context from "../Store/Context";
const Itemlist = (props) => {
const ctx=useContext(Context)

 const add =(item)=>{
 ctx.addItem(item)
 }
  return (
    <>
       
      <div className="col-12 col-sm-12 col-md-6  " key={props.item.id}>
        {/* <h5 className="text-center"> {props.item.title} </h5> */}
        
        <img
          src={props.item.image}
          className="img-fluid mx-auto d-block "
          alt={props.item.title}
          style={{width:"250px" , height:"280px"}}
        />
          <h5 className="text-center"> <Link to={`/store/${props.item.id}`} >{props.item.title}</Link></h5>
        
        <div className="row">
          <div className="col text-center mt-3 mb-3 fs-5">{props.item.price} $</div>
          <div className="col">
            <button className=" cart btn  btn-primary   btm-sm  p-sm-0 p-md-1 mt-3 mb-3" onClick={add.bind(null,props.item)}>
              <i className="bi bi-cart "></i>
              <b> Add to Cart </b>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Itemlist;
