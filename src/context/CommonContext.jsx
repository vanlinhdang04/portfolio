import { createContext, useReducer } from "react";
import { popupTypes, overlayTypes } from "./types/commonTypes";

const INITIAL_STATE = {
  overlay: false,
  popup: false,
  contentPopup: null,
};

export const CommonContext = createContext(INITIAL_STATE);

const CommonReducer = (state, action) => {
  switch (action.type) {
    case popupTypes.OPEN:
      return {
        ...state,
        overlay: true,
        popup: true,
        contentPopup: action.payload,
      };
    case popupTypes.CLOSE:
      return {
        ...state,
        overlay: false,
        popup: false,
        contentPopup: null,
      };
    case overlayTypes.CLOSE:
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
        contentPopup: state.contentPopup,
        dispatch,
      }}
    >
      {children}
    </CommonContext.Provider>
  );
};
