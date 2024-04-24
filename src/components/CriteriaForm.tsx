import { useContext, useState } from "react";
import { StageContext } from "../context/StageContext";
import CriteriaRow from "./CriteriaRow";

export default function CriteriaForm() {
  const stageController = useContext(StageContext);
  const [rowCount, setRowCount] = useState(1);

  function handleSubmit(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    event.preventDefault();
    stageController?.setStage(2);
  }

  function addRow(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    event.preventDefault();
    setRowCount(rowCount + 1);
    renderRows();
  }

  function renderRows() {
    const rows: JSX.Element[] = [];
    for (let i = 0; i < rowCount; i++) {
      rows.push(<CriteriaRow />);
    }
    return rows;
  }

  return (
    <div>
      <form>
        {renderRows().map((row) => row)}
        <button onClick={(e) => addRow(e)}>Add criteria</button>
        <button type="submit" onClick={handleSubmit}>
          Next
        </button>
      </form>
    </div>
  );
}
