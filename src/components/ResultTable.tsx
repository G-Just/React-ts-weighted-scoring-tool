import { useDataContext } from "../context/DataContext";

export default function ResultTable() {
  const data = useDataContext();

  return (
    <div>
      <h1>{data.subject}</h1>
      <table className="w-1/2 border border-black">
        <thead>
          <tr>
            <th>Criteria</th>
            <th>Weights</th>
            {data.options.map((option) => {
              return <th>{option.option}</th>;
            })}
            <th>Total</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {data.options.map((option, idx) => {
            return (
              <tr>
                <td>{option.values[idx].criteria}</td>
                <td>{option.values[idx].weight}</td>
                {option.values.map((value) => {
                  return <td>{value.value}</td>;
                })}
                <td>{option.total}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
