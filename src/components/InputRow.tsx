interface PropsWithLabel {
  label: string;
}

export default function InputRow({ label }: PropsWithLabel) {
  return (
    <div>
      <label>{label}</label>
      <input type="text" name="subject[]" />
    </div>
  );
}
