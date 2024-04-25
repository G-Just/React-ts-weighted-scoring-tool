import { useStageContext } from "../context/StageContext";

export default function SubjectForm() {
  const stageController = useStageContext();

  function handleSubmit(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    event.preventDefault();
    stageController.setStage(1);
  }

  return (
    <div>
      <form>
        <label htmlFor="subject">Enter the subject</label>
        <input type="text" name="subject" id="subject" />
        <button type="submit" onClick={handleSubmit}>
          Next
        </button>
      </form>
    </div>
  );
}
