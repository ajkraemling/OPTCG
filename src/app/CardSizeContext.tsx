import { createContext, useContext } from "react";

export const CardSizeContext = createContext<number>(1);

export const useCardSize = () => useContext(CardSizeContext);
