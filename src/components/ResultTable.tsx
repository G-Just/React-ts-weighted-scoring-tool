import { useDataContext } from "../context/DataContext";

export default function ResultTable() {
  const data = useDataContext();
  console.log(data);

  return (
    <div>
      <h1>{data.subject}</h1>
      <table>
        <thead>
          <td>Criteria</td>
          <td>Weights</td>
          {data.criteriaLabels.map((criteria) => (
            <td>{criteria}</td>
          ))}
        </thead>
        <tbody>{/* TODO: add the body of the table here */}</tbody>
      </table>
    </div>
  );
}