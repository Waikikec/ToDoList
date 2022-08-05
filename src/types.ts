export type Task = {
  id: string;
  label: string;
  isCompleted: boolean;
};

export type TasksProps = {
  addTask: (task: Pick<Task, 'label'>) => void;
  focusedTask?: Task;
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  shuffleFocusedTask: () => void;
  updateTaskCompletion: (taskId: string, isCompleted: boolean) => void;
};
