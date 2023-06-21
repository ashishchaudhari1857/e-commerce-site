const Reducer = (state, action) => {
  switch (action.type) {
    case "add":
        return {
          ...state,
          loading:false,
          btn:false,
          items: [...action.cartarray],
          totalItem: state.totalItem + 1,
          error: null,  
        };
      
    case "loading":
      return {
        ...state,
        loading: true,
        btn:true
      };
      case "loadingdisable":
        return {
          ...state,
          loading: false,
          btn:false
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
