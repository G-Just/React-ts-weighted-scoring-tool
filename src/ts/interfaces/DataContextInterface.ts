export type Options = {
  option: string;
  values: Values[];
};

export type Values = {
  criteria: string;
  value: number;
  weight: number;
};

export interface DataContextInterface {
  stage: number;
  subject: string;
  options: Options[];
  setStage: React.Dispatch<React.SetStateAction<number>>;
  setSubject: React.Dispatch<React.SetStateAction<string>>;
  setOptions: React.Dispatch<React.SetStateAction<Options[]>>;
}
