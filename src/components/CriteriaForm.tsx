import { useState } from "react";
import { useStageContext } from "../context/StageContext";
import InputRow from "./InputRow";

export default function CriteriaForm() {
  const stageController = useStageContext();
  const [rowCount, setRowCount] = useState(1);

  function handleSubmit(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    event.preventDefault();
    stageController?.setStage(2);
  }

  function addRow(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    event.preventDefault();
    setRowCount(rowCount + 1);
    stageController?.setCriteriaCount(() => stageController.criteriaCount + 1);
    renderRows();
  }

  function renderRows() {
    const rows: JSX.Element[] = [];
    for (let i = 0; i < rowCount; i++) {
      rows.push(<InputRow label="Enter rating criteria" />);
    }
    return rows;
  }

  return (
    <div className="flex flex-col items-center justify-center my-4">
      {renderRows().map((row) => row)}
      <button onClick={(e) => addRow(e)}>Add criteria</button>
      {stageController.stage === 1 ? <button onClick={handleSubmit}>Next</button> : null}
    </div>
  );
}
