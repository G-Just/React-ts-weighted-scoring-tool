import { useState } from "react";
import { StageContext } from "./context/StageContext";
import SubjectForm from "./components/SubjectForm";
import CriteriaForm from "./components/CriteriaForm";
import WeightForm from "./components/WeightForm";

export interface StageController {
  stage: number;
  criteriaCount: number;
  criteriaLabels: string[];
  weights: number[];
  setStage: React.Dispatch<React.SetStateAction<number>>;
  setCriteriaCount: React.Dispatch<React.SetStateAction<number>>;
  setCriteriaLabels: React.Dispatch<React.SetStateAction<string[]>>;
  setWeights: React.Dispatch<React.SetStateAction<number[]>>;
}

function App() {
  const [stage, setStage] = useState<number>(0);
  const [criteriaCount, setCriteriaCount] = useState<number>(1);
  const [criteriaLabels, setCriteriaLabels] = useState<string[]>([]);
  const [weights, setWeights] = useState<number[]>([]);

  const stageController: StageController = {
    stage,
    criteriaCount,
    criteriaLabels,
    weights,
    setStage,
    setCriteriaCount,
    setCriteriaLabels,
    setWeights,
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
