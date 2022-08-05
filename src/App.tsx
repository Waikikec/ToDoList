import { useState } from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import FocusScreen from './screens/FocusScreen';
import ListScreen from './screens/ListScreen';
import { Task } from './types';

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const updateTaskCompletion = (taskId: string, isCompleted: boolean) => {
    setTasks((tasks) =>
      tasks.map((task) => {
        if (task.id === taskId) return { ...task, isCompleted };
        return task;
      })
    );
  };

  const tasksApi = { tasks, setTasks, updateTaskCompletion };

  return (
    <BrowserRouter>
      <nav>
        <NavLink to="/">List</NavLink> - <NavLink to="/focus">Focus</NavLink>
      </nav>
      <br></br>
      <Routes>
        <Route path="/" element={<ListScreen {...tasksApi} />}></Route>
        <Route path="/focus" element={<FocusScreen {...tasksApi} />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
