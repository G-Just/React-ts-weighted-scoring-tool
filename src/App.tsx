// React
import { useState } from "react";
import { DataContext } from "./context/DataContext";

// Components
import SubjectForm from "./components/SubjectForm";
import OptionsForm from "./components/OptionsForm";
import CriteriaForm from "./components/CriteriaForm";
import WeightForm from "./components/WeightForm";
import ResultTable from "./components/ResultTable";

//Typescript
import { DataContextInterface } from "./ts/interfaces/DataContextInterface";

function App() {
  const [stage, setStage] = useState<number>(0);
  const [subject, setSubject] = useState<string>("");
  const [options, setOptions] = useState<string[]>([]);
  const [criteriaCount, setCriteriaCount] = useState<number>(1);
  const [criteriaLabels, setCriteriaLabels] = useState<string[]>([]);
  const [weights, setWeights] = useState<number[]>([]);

  const data: DataContextInterface = {
    stage,
    subject,
    options,
    criteriaCount,
    criteriaLabels,
    weights,
    setStage,
    setSubject,
    setOptions,
    setCriteriaCount,
    setCriteriaLabels,
    setWeights,
  };

  return (
    <DataContext.Provider value={data}>
      <div className="w-screen h-screen">
        <SubjectForm />
        {stage >= 1 ? <OptionsForm /> : null}
        {stage >= 2 ? <CriteriaForm /> : null}
        {stage >= 3 ? <WeightForm /> : null}
        {stage === 4 ? <ResultTable /> : null}
      </div>
    </DataContext.Provider>
  );
}

export default App;
