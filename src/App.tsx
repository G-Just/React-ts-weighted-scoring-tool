import { useState } from "react";
import { StageContext } from "./context/StageContext";
import SubjectForm from "./components/SubjectForm";
import CriteriaForm from "./components/CriteriaForm";
import WeightForm from "./components/WeightForm";

export interface StageController {
  stage: number;
  setStage: React.Dispatch<React.SetStateAction<number>>;
}

function App() {
  const [stage, setStage] = useState<number>(0);

  const stageController: StageController = {
    stage: stage,
    setStage,
  };

  return (
    <StageContext.Provider value={stageController}>
      <SubjectForm />
      {stage >= 1 ? <CriteriaForm /> : null}
      {stage >= 2 ? <WeightForm /> : null}
    </StageContext.Provider>
  );
}

export default App;
