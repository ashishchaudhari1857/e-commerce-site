const Reducer = (state, action) => {
  switch (action.type) {
    case "add":
        return {
          ...state,
          items: [...action.cartarray],
            totalAmount: action.cartarray.reduce(
            (total, item) => total + item.quantity * item.price,0),
            totalItem: action.cartarray.reduce((total, item) => total + item.quantity, 0),
        };

        case "enableBtn":
          return{
            ...state,
            btn:false,
          }
          case "disableBtn":
            return{
              ...state,
              btn:true
          }

      
      case "removecart":
        return{
          ...state,
          totalItem: state.totalItem -1,
        }
      
    case "additem":
      return {

        ...state,
        btn:false,
        data: [...action.data],
      };
      case "error":
     return  {
      ...state,
      }
    default:
      return state;
  }
};
export default Reducer;
