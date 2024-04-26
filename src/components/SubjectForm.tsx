import { useStageContext } from "../context/StageContext";
import InputRow from "./InputRow";

export default function SubjectForm() {
  const stageController = useStageContext();

  function handleSubmit(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    event.preventDefault();
    stageController.setStage(1);
  }

  return (
    <div>
      <InputRow label="Enter the subject" />
      {stageController.stage === 0 ? (
        <button type="submit" onClick={handleSubmit}>
          Next
        </button>
      ) : null}
    </div>
  );
}
