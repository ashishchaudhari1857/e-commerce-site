const Reducer = (state, action) => {
  switch (action.type) {
    case "add":
      const index = state.items.findIndex((item) => item.id === action.item.id);
      if (index !== -1) {
        alert("tem is already available in your list");
        return {
          ...state,
          error: "Item is already available in your list",
        };
      } else {
        return {
          ...state,
          items: [...state.items, action.item],
          totalItem: state.totalItem + 1,
          error: null,
        };
      }
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
        data: [...state.data, ...action.data],
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
