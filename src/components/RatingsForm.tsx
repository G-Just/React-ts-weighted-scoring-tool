import { useDataContext } from "../context/DataContext";

export default function RatingsForm() {
  const data = useDataContext();

  function handleSubmit(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    event.preventDefault();
    data.setStage(5);
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>, iterator: number) {
    const localRatings = data.options;
    localRatings[iterator].value = +event.target.value;
    data.setRatings(localRatings);
  }

  function renderRows(j: number) {
    const rows: JSX.Element[] = [];
    for (let i = 0; i < data.options[0].values.length; i++) {
      rows.push(
        <div key={i} className="flex flex-col items-center justify-center">
          <label>Enter a value for {data.options[j].values[i].criteria}</label>
          <input
            onChange={(e) => handleChange(e, i)}
            className="p-2 my-2 border border-black rounded"
            type="number"
          />
        </div>
      );
    }
    return rows;
  }

  function renderCols() {
    const cols: JSX.Element[] = [];
    for (let i = 0; i < data.options.length; i++) {
      cols.push(
        <div>
          <h1 className="text-lg text-center">{data.options[i].option}</h1>
          <div className="flex flex-col items-center justify-center">
            {renderRows(i).map((row) => row)}
          </div>
        </div>
      );
    }
    return cols;
  }

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flex justify-center gap-4">{renderCols()}</div>
      {data.stage === 4 ? (
        <button type="submit" onClick={handleSubmit}>
          Calculate
        </button>
      ) : null}
    </div>
  );
}
