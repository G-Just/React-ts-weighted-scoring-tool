import { useEffect, useState } from "react";
import { useDataContext } from "../context/DataContext";

export default function CriteriaForm() {
  const data = useDataContext();

  const [rowCount, setLocalRowCount] = useState(1);

  useEffect(() => {
    const localCriteria = data.options;
    localCriteria.forEach((option) => option.values.push({ criteria: "init", value: 0 }));
    data.setOptions(localCriteria);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rowCount]);

  function handleSubmit(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    event.preventDefault();
    data.setStage(3);
  }

  function addRow(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    event.preventDefault();
    setLocalRowCount(rowCount + 1);
    renderRows();
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>, iterator: number) {
    const localCriteria = data.options;
    localCriteria.forEach(
      (option) => (option.values[iterator].criteria = event.target.value)
    );
    data.setOptions(localCriteria);
  }

  function renderRows() {
    const rows: JSX.Element[] = [];
    for (let i = 0; i < rowCount; i++) {
      rows.push(
        <div key={i} className="flex flex-col items-center justify-center">
          <label>Enter rating criteria</label>
          <input
            onChange={(e) => handleChange(e, i)}
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
      {data.stage === 2 ? <button onClick={handleSubmit}>Next</button> : null}
    </div>
  );
}
