// React
import { useState } from "react";
import { DataContext } from "./context/DataContext";

// Components
import SubjectForm from "./components/SubjectForm";
import CriteriaForm from "./components/CriteriaForm";
import WeightForm from "./components/WeightForm";
import ResultTable from "./components/ResultTable";

//Typescript
import { DataContextInterface } from "./ts/interfaces/DataContextInterface";

function App() {
  const [stage, setStage] = useState<number>(0);
  const [subject, setSubject] = useState<string>("");
  const [criteriaCount, setCriteriaCount] = useState<number>(1);
  const [criteriaLabels, setCriteriaLabels] = useState<string[]>([]);
  const [weights, setWeights] = useState<number[]>([]);

  const data: DataContextInterface = {
    stage,
    subject,
    criteriaCount,
    criteriaLabels,
    weights,
    setStage,
    setSubject,
    setCriteriaCount,
    setCriteriaLabels,
    setWeights,
  };

  return (
    <DataContext.Provider value={data}>
      <div className="w-screen h-screen">
        <SubjectForm />
        {stage >= 1 ? <CriteriaForm /> : null}
        {stage >= 2 ? <WeightForm /> : null}
        {stage === 3 ? <ResultTable /> : null}
      </div>
    </DataContext.Provider>
  );
}

export default App;
