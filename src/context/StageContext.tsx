import { createContext } from "react";
import { StageController } from "../App";

export const StageContext = createContext<StageController | undefined>(undefined);
