import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListScreen from "./screens/ListScreen";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListScreen />}></Route>
        <Route path="/focus" element={<div>Focus View</div>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
