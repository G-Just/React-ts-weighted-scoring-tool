import { useDataContext } from "../context/DataContext";

export default function SubjectForm() {
  const data = useDataContext();

  function handleSubmit(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    event.preventDefault();
    data.setStage(1);
  }

  return (
    <div className="flex flex-col items-center justify-center p-4 slideIn">
      <div className="flex flex-col items-center justify-center gap-2">
        <label>Enter the subject</label>
        <input
          onChange={(e) => data.setSubject(e.target.value)}
          className="p-2 border border-black rounded"
          type="text"
          required
        />
      </div>
      {data.stage === 0 ? (
        <button type="submit" onClick={handleSubmit}>
          Next
        </button>
      ) : null}
    </div>
  );
}
