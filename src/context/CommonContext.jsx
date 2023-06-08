import { createContext, useReducer } from "react";
import { popupTypes } from "./types/commonTypes";

const INITIAL_STATE = {
  overlay: false,
  popup: false,
};

export const CommonContext = createContext(INITIAL_STATE);

const CommonReducer = (state, action) => {
  switch (action.type) {
    case popupTypes.OPEN:
      return {
        ...state,
        overlay: true,
        popup: true,
      };
    case popupTypes.CLOSE:
      return {
        ...state,
        overlay: false,
        popup: false,
      };
    default:
      return state;
  }
};

export const CommonContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CommonReducer, INITIAL_STATE);

  return (
    <CommonContext.Provider
      value={{
        overlay: state.overlay,
        popup: state.popup,
        dispatch,
      }}
    >
      {children}
    </CommonContext.Provider>
  );
};
