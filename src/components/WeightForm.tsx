import { useDataContext } from "../context/DataContext";

export default function WeightForm() {
  const data = useDataContext();

  function handleSubmit(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    event.preventDefault();
    data.setStage(3);
  }

  function renderRows() {
    const rows: JSX.Element[] = [];
    for (let i = 0; i < data.criteriaCount; i++) {
      rows.push(
        <div key={i} className="flex flex-col items-center justify-center">
          <label>Enter a desired weight</label>
          <input
            onChange={(e) => data.setWeights([...data.weights, +e.target.value])}
            className="p-2 border border-black rounded"
            type="number"
          />
        </div>
      );
    }
    return rows;
  }

  return (
    <div className="flex flex-col items-center justify-center my-4">
      {renderRows().map((row) => row)}
      {data.stage === 2 ? (
        <button type="submit" onClick={handleSubmit}>
          Calculate
        </button>
      ) : null}
    </div>
  );
}
