import { useState } from "react";
import { StageContext } from "./context/StageContext";
import SubjectForm from "./components/SubjectForm";
import CriteriaForm from "./components/CriteriaForm";
import WeightForm from "./components/WeightForm";

export interface StageController {
  stage: number;
  criteriaCount: number;
  setStage: React.Dispatch<React.SetStateAction<number>>;
  setCriteriaCount: React.Dispatch<React.SetStateAction<number>>;
}

function App() {
  const [stage, setStage] = useState<number>(0);
  const [criteriaCount, setCriteriaCount] = useState<number>(1);

  const stageController: StageController = {
    stage: stage,
    criteriaCount,
    setStage,
    setCriteriaCount,
  };

  return (
    <StageContext.Provider value={stageController}>
      <div className="w-screen h-screen">
        <SubjectForm />
        {stage >= 1 ? <CriteriaForm /> : null}
        {stage >= 2 ? <WeightForm /> : null}
      </div>
    </StageContext.Provider>
  );
}

export default App;
