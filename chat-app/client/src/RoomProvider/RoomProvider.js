import { createContext, useContext } from "react";
import { useReducer } from "react";

export const RoomContext = createContext();

export const RoomProvider = ({ children }) => {
  const roomReducer = (state, action) => {
    switch (action.type) {
      case "SET_NAME":
        return { ...state, name: action.payload };
      case "SET_ROOM":
        return { ...state, room: action.payload };
      default:
        console.log("Something went wrong");
        break;
    }
    return state;
  };

  const [state, dispatch] = useReducer(roomReducer, { name: "", room: "" });

  return (
    <RoomContext.Provider value={{ state, dispatch }}>
      {children}
    </RoomContext.Provider>
  );
};

export const useRoom = () => {
  return useContext(RoomContext);
};
