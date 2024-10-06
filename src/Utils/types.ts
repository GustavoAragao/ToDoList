export type TaskProps = {
  id:number;
  title:string;
  description?: string;
  isFinished?: boolean;
  isFav?: boolean;
  onCheck?: () => void;
  onPress?: () => void;
};