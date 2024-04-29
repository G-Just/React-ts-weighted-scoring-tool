import { createContext, useContext } from "react";
import { DataContextInterface } from "../ts/interfaces/DataContextInterface";

export const DataContext = createContext<DataContextInterface | undefined>(undefined);

export function useDataContext() {
  const stage = useContext(DataContext);

  if (stage === undefined) {
    throw new Error("useStageContext must be used with StageContext");
  }
  return stage;
}
