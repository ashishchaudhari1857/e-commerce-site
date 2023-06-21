const Reducer = (state, action) => {
  switch (action.type) {
    case "add":
        return {
          ...state,
          items: [...action.cartarray],
          totalItem: state.totalItem + 1,
          error: null,  
        };
      
    case "remove":
      const updatedItems = state.items.filter((item) => item.id !== action.id);
      return {
        ...state,
        items: updatedItems,
        totalItem: state.totalItem - 1,
        error: null,
      };
    case "loading":
      return {
        ...state,
        loading: true,
      };

    case "additem":
      return {
        ...state,
        loading: false,
        data: [...action.data],
      };
      case "error":
     return  {
      ...state,
      error:action.error
      }
    default:
      return state;
  }
};
export default Reducer;
