import { PropsWithLabel } from "../ts/interfaces/LabelProp";

export default function InputRow({ label }: PropsWithLabel) {
  return (
    <div className="flex flex-col items-center justify-center">
      <label>{label}</label>
      <input className="border border-black" type="text" name="subject[]" />
    </div>
  );
}
