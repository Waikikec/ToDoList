import { useState } from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import FocusScreen from './screens/FocusScreen';
import ListScreen from './screens/ListScreen';
import { Task } from './types';

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const tasksProps = { tasks, setTasks };

  return (
    <BrowserRouter>
      <nav>
        <NavLink to="/">List</NavLink> - <NavLink to="/focus">Focus</NavLink>
      </nav>
      <br></br>
      <Routes>
        <Route path="/" element={<ListScreen {...tasksProps} />}></Route>
        <Route path="/focus" element={<FocusScreen {...tasksProps} />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
