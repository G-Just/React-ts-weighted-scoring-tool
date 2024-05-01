export type Options = {
  option: string;
  values: Values[];
};

export type Values = {
  criteria: string;
  value: number;
};

export interface DataContextInterface {
  stage: number;
  subject: string;
  weights: number[];
  options: Options[];
  setStage: React.Dispatch<React.SetStateAction<number>>;
  setSubject: React.Dispatch<React.SetStateAction<string>>;
  setWeights: React.Dispatch<React.SetStateAction<number[]>>;
  setOptions: React.Dispatch<React.SetStateAction<Options[]>>;
}
