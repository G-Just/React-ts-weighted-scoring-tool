import { useContext } from "react";
import { StageContext } from "../context/StageContext";

export default function WeightForm() {
  const stageController = useContext(StageContext);

  function handleSubmit(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    event.preventDefault();
    stageController?.setStage(3);
  }

  return (
    <div>
      <form>
        <label htmlFor="subject">Enter the weight</label>
        <input type="text" name="subject" id="subject" />
        <button type="submit" onClick={handleSubmit}>
          Next
        </button>
      </form>
    </div>
  );
}
