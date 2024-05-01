// React
import { useState } from "react";
import { DataContext } from "./context/DataContext";

// Components
import SubjectForm from "./components/SubjectForm";
import OptionsForm from "./components/OptionsForm";
import CriteriaForm from "./components/CriteriaForm";
import WeightForm from "./components/WeightForm";
import ResultTable from "./components/ResultTable";
import RatingsForm from "./components/RatingsForm";

//Typescript
import { DataContextInterface, Options } from "./ts/interfaces/DataContextInterface";

function App() {
  // TODO: add onclick enter to change stages
  const [stage, setStage] = useState<number>(0);
  const [subject, setSubject] = useState<string>("");
  const [options, setOptions] = useState<Options[]>([
    {
      option: "init",
      values: [],
    },
  ]);

  const data: DataContextInterface = {
    stage,
    subject,
    options,
    setStage,
    setSubject,
    setOptions,
  };

  return (
    <DataContext.Provider value={data}>
      <div className="w-screen h-screen">
        <SubjectForm />
        {stage >= 1 ? <OptionsForm /> : null}
        {stage >= 2 ? <CriteriaForm /> : null}
        {stage >= 3 ? <WeightForm /> : null}
        {stage >= 4 ? <RatingsForm /> : null}
        {stage === 5 ? <ResultTable /> : null}
      </div>
    </DataContext.Provider>
  );
}

export default App;
