import { createContext, useContext } from "react";
import { StageController } from "../App";

export const StageContext = createContext<StageController | undefined>(undefined);

export function useStageContext() {
  const stage = useContext(StageContext);

  if (stage === undefined) {
    throw new Error("useStageContext must be used with StageContext");
  }
  return stage;
}
