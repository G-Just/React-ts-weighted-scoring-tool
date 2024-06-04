// React
import { DataContext } from "./context/DataContext";
import { KeyboardEvent, useState } from "react";

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
  const [stage, setStage] = useState<number>(0);
  const [subject, setSubject] = useState<string>("");
  const [options, setOptions] = useState<Options[]>([
    {
      option: "init",
      total: 0,
      values: [],
    },
  ]);

  const handleKeyPress = (event: KeyboardEvent): void => {
    console.log(event.key);
    if (event.key === "Enter" && stage < 5) {
      setStage(stage + 1);
    }
  };

  const data: DataContextInterface = {
    stage,
    subject,
    options,
    setStage,
    setSubject,
    setOptions,
  };

  return (
    <div onKeyPress={handleKeyPress} className="w-screen h-screen">
      <DataContext.Provider value={data}>
        {stage === 0 ? <SubjectForm /> : null}
        {stage === 1 ? <OptionsForm /> : null}
        {stage === 2 ? <CriteriaForm /> : null}
        {stage === 3 ? <WeightForm /> : null}
        {stage === 4 ? <RatingsForm /> : null}
        {stage === 5 ? <ResultTable /> : null}
      </DataContext.Provider>
    </div>
  );
}

export default App;
