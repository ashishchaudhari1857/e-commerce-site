import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import Context from "../../../Store/Context";

const Itemlist = (props) => {
  const ctx = useContext(Context);

  const add = (item) => {
    ctx.addItem({...item ,quantity:1});
  };

  const btn = ctx.btn;
  console.log("btn",btn)

  return (
    <>
      <div className="col-12 col-sm-12 col-md-6" key={props.item.id}>
        <div className="d-flex flex-column align-items-center">
          <img
            src={props.item.ImgURL}
            className="img-fluid mx-auto d-block"
            alt={props.item.title}
            style={{ width: "200px", height: "28vh" }}
          />
          <h5 className="text-center mt-3">
            <Link to={`/store/${props.item.id}/${props.item.Category}`}>{props.item.title}</Link>
          </h5>
        </div>

        <div className="row mt-3 mb-3">

        <div className="col-5 text-center fs-5" style={{ fontSize: "1rem" }}>
        $ {props.item.price} 
          </div>
          <div className="col-7">
            <button
              className="cart btn btn-primary btn-sm btn-block p-sm-0 p-md-1"
              style={{ fontSize: "1rem" }}
              disabled={btn}
              onClick={add.bind(null, props.item)}
            >
              <i className="bi bi-cart"></i>
              <b> Add to Cart </b>
            </button>
          </div>
        </div>
      </div>

      <Outlet />
    </>
  );
};

export default Itemlist;
