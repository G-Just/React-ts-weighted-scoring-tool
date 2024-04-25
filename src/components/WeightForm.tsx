import { useContext } from "react";
import { StageContext, useStageContext } from "../context/StageContext";
import InputRow from "./InputRow";

export default function WeightForm() {
  const stageController = useStageContext();

  function handleSubmit(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    event.preventDefault();
    stageController?.setStage(3);
  }

  function renderRows() {
    const rows: JSX.Element[] = [];
    for (let i = 0; i < stageController.criteriaCount; i++) {
      rows.push(<InputRow label="Enter desired weight" />);
    }
    return rows;
  }

  return (
    <div>
      <form>
        {renderRows().map((row) => row)}
        <button type="submit" onClick={handleSubmit}>
          Next
        </button>
      </form>
    </div>
  );
}
