import { useState } from "react";
import { useDataContext } from "../context/DataContext";

export default function CriteriaForm() {
  const data = useDataContext();
  const [rowCount, setRowCount] = useState(1);
  const localLabels: string[] = [];

  function handleSubmit(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    event.preventDefault();
    localLabels.forEach((row) => data.setCriteriaLabels([...data.criteriaLabels, row]));
    data.setStage(2);
  }

  function addRow(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    event.preventDefault();
    setRowCount(rowCount + 1);
    data.setCriteriaCount(() => data.criteriaCount + 1);
    renderRows();
  }

  // TODO: make the onsubmit thing, because onchange is not working here
  function renderRows() {
    const rows: JSX.Element[] = [];
    for (let i = 0; i < rowCount; i++) {
      rows.push(
        <div key={i} className="flex flex-col items-center justify-center">
          <label>Enter rating criteria name</label>
          <input
            onChange={(e) => (localLabels[i] = e.target.value)}
            className="p-2 border border-black rounded"
            type="text"
            required
          />
        </div>
      );
    }
    return rows;
  }

  return (
    <div className="flex flex-col items-center justify-center my-4">
      {renderRows().map((row) => row)}
      <button onClick={(e) => addRow(e)}>Add criteria</button>
      {data.stage === 1 ? <button onClick={handleSubmit}>Next</button> : null}
    </div>
  );
}
