export type Task = {
  id: string;
  label: string;
  isCompleted: boolean;
};

export type TasksProps = {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  updateTaskCompletion: (taskId: string, isCompleted: boolean) => void;
};
