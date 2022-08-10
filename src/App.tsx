import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import TaskContext from './contexts/task-store';
import useLocalStorage from './hooks/use-local-storage';
import FocusScreen from './screens/FocusScreen';
import ListScreen from './screens/ListScreen';
import { Task } from './types';

function App() {
  const [tasks, setTasks] = useLocalStorage<Task[]>('tasks', []);

  return (
    <BrowserRouter>
      <TaskContext.Provider value={[tasks, setTasks]}>
        <nav>
          <NavLink to="/">List</NavLink> - <NavLink to="/focus">Focus</NavLink>
        </nav>
        <br></br>
        <Routes>
          <Route path="/" element={<ListScreen />}></Route>
          <Route path="/focus" element={<FocusScreen />}></Route>
        </Routes>
      </TaskContext.Provider>
    </BrowserRouter>
  );
}

export default App;
