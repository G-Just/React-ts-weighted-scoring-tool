import { useDataContext } from "../context/DataContext";

export default function RatingsForm() {
  const data = useDataContext();

  function handleSubmit(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    event.preventDefault();
    data.setStage(5);
  }

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement>,
    option: number,
    criteria: number
  ) {
    const localRatings = data.options;
    localRatings[criteria].values[option].value = +event.target.value;
    localRatings.forEach((option) => {
      option.total = option.values.reduce(
        (acc, cur) => (acc += cur.value * cur.weight),
        0
      );
    });
    data.setOptions(localRatings);
  }

  function renderRows(j: number) {
    const rows: JSX.Element[] = [];
    for (let i = 0; i < data.options[0].values.length; i++) {
      rows.push(
        <div key={i} className="flex flex-col items-center justify-center">
          <label>Enter a value for {data.options[j].values[i].criteria}</label>
          <input
            onChange={(e) => handleChange(e, i, j)}
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
        <div key={i}>
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
