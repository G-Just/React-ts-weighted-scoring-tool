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
      </table>
    </div>
  );
}
