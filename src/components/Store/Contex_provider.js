import { useReducer } from "react";
import Context from "./Context";

const defaultState = {
  items: [],
  totalItem: 0,
  error: null,
};

const stateReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "add":
      const index = state.items.findIndex((item) => item.id === action.item.id);
      if (index !== -1) {
        alert("tem is already available in your list")
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
    default:
      return state;
  }
};

const ContextProvider = (props) => {
  const [itemState, dispatchState] = useReducer(stateReducer, defaultState);

  const addItem = (item) => {
    dispatchState({ type: "add", item: item });
  };

  const removeItem = (id) => {
    dispatchState({ type: "remove", id: id });
  };

  const contextValue = {
    items: itemState.items,
    totalItem: itemState.totalItem,
    addItem: addItem,
    removeItem: removeItem,
    error: itemState.error,
  };

  return (
    <Context.Provider value={contextValue}>
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;
