import { nanoid } from 'nanoid';
import React, { ChangeEvent, KeyboardEvent, useState } from 'react';
import { Task, TasksProps } from '../types';

type Props = TasksProps & {};

const ListScreen: React.FC<Props> = ({ tasks, setTasks }) => {
  const [newTaskLabel, setNewTaskLabel] = useState('');

  const handleNewTaskLabelChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTaskLabel(e.target.value);
  };

  const handleNewTaskKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && newTaskLabel !== '') {
      setTasks((tasks) => [
        ...tasks,
        { id: nanoid(), label: newTaskLabel, isCompleted: false },
      ]);
      setNewTaskLabel('');
    }
  };

  //Higher Order Functions - simple returns another function
  const handleTaskCompleteChange =
    (handledTask: Task) => (e: ChangeEvent<HTMLInputElement>) => {
      setTasks((tasks) =>
        tasks.map((task) => {
          if (task.id === handledTask.id) {
            return { ...task, isCompleted: e.target.checked };
          }
          return task;
        })
      );
    };

  const handleClearClick = () => {
    setTasks((tasks) => tasks.filter((task) => !task.isCompleted));
  };

  const handleTaskDeleteClick = (handledTask: Task) => () => {
    setTasks((tasks) => tasks.filter((task) => task.id !== handledTask.id));
  };

  return (
    <div>
      <div>
        {tasks.map((task) => (
          <div key={task.id}>
            <input
              type="checkbox"
              checked={task.isCompleted}
              onChange={handleTaskCompleteChange(task)}
            />
            {task.label}
            <button onClick={handleTaskDeleteClick(task)}>delete</button>
          </div>
        ))}
      </div>
      <input
        value={newTaskLabel}
        onChange={handleNewTaskLabelChange}
        onKeyPress={handleNewTaskKeyPress}
      />
      <div>
        <button onClick={handleClearClick}>Clear Tasks</button>
      </div>
    </div>
  );
};

export default ListScreen;
