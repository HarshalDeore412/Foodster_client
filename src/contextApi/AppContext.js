import { createContext, useContext, useReducer } from "react";

const cartStateContext = createContext();
const cartDispatchContext = createContext();
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      //   [...state , {id:action.id , name:action.name , image:action.image , price:action.price}]
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
          image: action.image,
          price: action.price,
        },
      ];

    case "REMOVE":
      let newArr = [...state];
      newArr.splice(action.index, 1);
      return newArr;

    case "DROP":
      let arr = [];
      return arr;


    default:
      console.log("....ERROR IN REDUCER");
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, []);

  return (
    <cartDispatchContext.Provider value={dispatch}>
      <cartStateContext.Provider value={state}>
        {children}
      </cartStateContext.Provider>
    </cartDispatchContext.Provider>
  );
};

export const useCart = () => useContext(cartStateContext);
export const useDispatchCart = () => useContext(cartDispatchContext);
