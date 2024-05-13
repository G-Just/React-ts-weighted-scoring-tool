import { useDataContext } from "../context/DataContext";

export default function ResultTable() {
  const data = useDataContext();

  let currentRow = -1;

  function resultRowBuilder() {
    const row: number[][] = [];
    const criteriaCount = data.options[0].values.length;
    for (let i = 0; i < criteriaCount; i++) {
      const local: number[] = [];
      data.options.forEach((option) => {
        local.push(option.values[i].value);
      });
      row.push(local);
    }
    currentRow++;
    return row;
  }

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <h1 className="py-6 text-5xl font-extralight">{data.subject}</h1>
      <div className="flex justify-center w-full pb-20">
        <table className="w-1/2 border border-black">
          <thead>
            <tr>
              <th>Criteria</th>
              <th>Weights</th>
              {data.options.map((option) => {
                return <th>{option.option}</th>;
              })}
            </tr>
          </thead>
          <tbody className="text-center">
            {data.options[0].values.map((value) => (
              <tr>
                <td>{value.criteria}</td>
                <td>{value.weight}</td>
                {resultRowBuilder()[currentRow].map((value) => {
                  return <td>{value}</td>;
                })}
              </tr>
            ))}
            <tr>
              <td className="font-bold">Total</td>
              <td>-</td>
              {data.options.map((option, idx) => {
                return <td key={idx}>{option.total}</td>;
              })}
            </tr>
          </tbody>
        </table>
      </div>
      <button onClick={() => data.setStage(0)}>Reset</button>
    </div>
  );
}
