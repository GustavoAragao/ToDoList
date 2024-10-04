export type TaskProps = {
  id?:number;
  title:string;
  description?: string;
  isFinished?: boolean;
  onCheck?: () => void;
};