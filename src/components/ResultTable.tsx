import { useDataContext } from "../context/DataContext";

export default function ResultTable() {
  const data = useDataContext();
  console.log(data);

  return (
    <></>
    // <div>
    //   <h1>{data.subject}</h1>
    //   <table>
    //     <tr>
    //       <th>Criteria</th>
    //       <th>Weights</th>
    //       <th>{data.options.map((option) => option)}</th>
    //     </tr>
    //     <tbody>
    //       {data.criteriaLabels.map((criteria, idx) => (
    //         <tr key={idx}>
    //           <td>{criteria}</td>
    //           <td>{data.weights[idx]}</td>
    //         </tr>
    //       ))}
    //     </tbody>
    //   </table>
    // </div>
  );
}
