import { useDataContext } from "../context/DataContext";

export default function WeightForm() {
  const data = useDataContext();

  function handleSubmit(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    event.preventDefault();
    data.setStage(4);
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>, iterator: number) {
    const localWeights = data.weights;
    localWeights[iterator] = +event.target.value;
    data.setWeights(localWeights);
  }

  function renderRows() {
    const rows: JSX.Element[] = [];
    for (let i = 0; i < data.options.length; i++) {
      rows.push(
        <div key={i} className="flex flex-col items-center justify-center">
          <label>Enter a desired weight</label>
          <input
            onChange={(e) => handleChange(e, i)}
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
      {data.stage === 3 ? (
        <button type="submit" onClick={handleSubmit}>
          Next
        </button>
      ) : null}
    </div>
  );
}
