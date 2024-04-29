export interface DataContextInterface {
  stage: number;
  subject: string;
  criteriaCount: number;
  criteriaLabels: string[];
  weights: number[];
  setStage: React.Dispatch<React.SetStateAction<number>>;
  setSubject: React.Dispatch<React.SetStateAction<string>>;
  setCriteriaCount: React.Dispatch<React.SetStateAction<number>>;
  setCriteriaLabels: React.Dispatch<React.SetStateAction<string[]>>;
  setWeights: React.Dispatch<React.SetStateAction<number[]>>;
}
