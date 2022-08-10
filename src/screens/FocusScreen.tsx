import React from 'react';
import useTaskStore from '../hooks/use-task-store';

type Props = {};

const FocusScreen: React.FC<Props> = () => {
  const {
    focusedTask: task,
    shuffleFocusedTask,
    updateTaskCompletion,
  } = useTaskStore();

  const handleMarkCompleted = () => {
    if (task) {
      updateTaskCompletion(task.id, true);
    }
  };

  const handleNopeClick = () => {
    shuffleFocusedTask();
  };

  return task ? (
    <div>
      <div>{task.label}</div>
      <button onClick={handleMarkCompleted}>Mark Completed!</button>
      <button onClick={handleNopeClick}>Nope!</button>
    </div>
  ) : (
    <div>No incomplete tasks. Yay!</div>
  );
};

export default FocusScreen;
