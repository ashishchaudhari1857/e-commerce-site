import { useContext } from "react";
import { Link ,Outlet} from "react-router-dom";
import Context from "../../../Store/Context";
const Itemlist = (props) => {
const ctx=useContext(Context)

 const add =(item)=>{
 ctx.addItem(item)
 }
 const btn=ctx.btn;
  return (
    <>
       
      <div className="col-12 col-sm-12 col-md-6  " key={props.item.id}>
        {/* <h5 className="text-center"> {props.item.tile} </h5> */}
        
        <img
          src={props.item.ImgURL}
          className="img-fluid mx-auto d-block "
          alt={props.item.title}
          style={{width:"250px" , height:"280px"}}
        />
          <h5 className="text-center"> <Link to={`/store/${props.item.id}`} >{props.item.title}</Link></h5>
        
        <div className="row">
          <div className="col text-center mt-3 mb-3 fs-5">{props.item.price} $</div>
          <div className="col">
            <button className=" cart btn  btn-primary   btm-sm  p-sm-0 p-md-1 mt-3 mb-3" disabled={btn} onClick={add.bind(null,props.item)}>
              <i className="bi bi-cart "></i>
              <b> Add to Cart </b>
            </button>
          </div>
        </div>
      </div>
      <Outlet/>
    </>
  );
};
export default Itemlist;
