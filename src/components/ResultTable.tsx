import { useDataContext } from "../context/DataContext";

export default function ResultTable() {
  const data = useDataContext();
  console.log(data);

  return (
    <div>
      <h1>{data.subject}</h1>
      <table>
        <tr>
          <th>Criteria</th>
          <th>Weights</th>
          {data.options.map((criteria, idx) => (
            <th key={idx}>{criteria}</th>
          ))}
        </tr>
        <tbody>{/* TODO: add the body of the table here */}</tbody>
      </table>
    </div>
  );
}
