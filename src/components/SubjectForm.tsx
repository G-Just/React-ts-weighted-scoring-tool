import { useStageContext } from "../context/StageContext";

export default function SubjectForm() {
  const stageController = useStageContext();

  function handleSubmit(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    event.preventDefault();
    stageController.setStage(1);
  }

  return (
    <div>
      <input required className="" />
      {stageController.stage === 0 ? (
        <button type="submit" onClick={handleSubmit}>
          Next
        </button>
      ) : null}
    </div>
  );
}
