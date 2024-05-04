import { useState } from "react";
import { useDataContext } from "../context/DataContext";

export default function OptionsForm() {
  const data = useDataContext();
  const [localRowCount, setLocalRowCount] = useState(1);

  function handleSubmit(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    event.preventDefault();
    const localCriteria = data.options;
    localCriteria.forEach((option) =>
      option.values.push({ criteria: "init", value: 0, weight: 0 })
    );
    data.setOptions(localCriteria);
    data.setStage(2);
  }

  function addRow(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    event.preventDefault();

    const localOptions = data.options;
    localOptions.push({
      option: "init",
      total: 0,
      values: [],
    });

    data.setOptions(localOptions);
    setLocalRowCount(localRowCount + 1);
    renderRows();
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>, iterator: number) {
    const localOptions = data.options;
    localOptions[iterator].option = event.target.value;
    data.setOptions(localOptions);
  }

  function renderRows() {
    const rows: JSX.Element[] = [];
    for (let i = 0; i < localRowCount; i++) {
      rows.push(
        <div key={i} className="flex flex-col items-center justify-center">
          <label>Enter options</label>
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
    <div className="flex flex-col items-center justify-center my-4 slideIn">
      {renderRows().map((row) => row)}
      <button onClick={(e) => addRow(e)}>Add another option</button>
      {data.stage === 1 ? <button onClick={handleSubmit}>Next</button> : null}
    </div>
  );
}
