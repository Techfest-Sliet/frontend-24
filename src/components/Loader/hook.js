import {useContext} from "react";
import {LoaderContext} from "./context";

export const useLoader = () => useContext(LoaderContext);