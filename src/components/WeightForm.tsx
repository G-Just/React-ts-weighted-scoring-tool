import { useStageContext } from "../context/StageContext";
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
    <div className="flex flex-col items-center justify-center my-4">
      {renderRows().map((row) => row)}
      {stageController.stage === 2 ? (
        <button type="submit" onClick={handleSubmit}>
          Calculate
        </button>
      ) : null}
    </div>
  );
}
