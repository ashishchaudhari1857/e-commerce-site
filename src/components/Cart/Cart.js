
import Modal from "../Modal/Modal";
import CartItem from "./Cartitem";
const Cart = (props) => {
  const cartElements = [
    {
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
      quantity: 2,
    },

    {
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
      quantity: 3,
    },
    {
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
      quantity: 1,
    },
  ];


  const cartlist = cartElements.map((item, i) => {
    return <CartItem item={item} key={i}></CartItem>
  });
  console.log(cartlist)
  return (
    <div>
     
      <Modal onclose={props.onclose}>
        <div className="row my-2 p-1 d-flex ">
          <div className="col-5 bg-danger fs-3" >ITEM</div>
          <div className="col-2 bg-info fs-3" >PRICE</div>
          <div className="col-5 bg-danger fs-3">QUANTITY</div>
        </div>
        {cartlist}
        </Modal>
    </div>
  );
};

export default Cart;
