const Reducer = (state, action) => {
  switch (action.type) {
    case "add":
        return {
          ...state,
          btn:false,
          items: [...action.cartarray],
          totalItem: state.totalItem + 1,
        };
      
      case "removecart":
        return{
          ...state,
          totalItem: state.totalItem -1,
        }
      
    case "additem":
      return {
        ...state,
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
