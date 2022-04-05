import './App.css';
import {Routes, Route, Link, BrowserRouter} from "react-router-dom";

import TodoList from "./pages/ToDoList";
import SpeedDial from "./components/SpeedDial";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/todo" element={<TodoList/>}/>
        </Routes>
        <SpeedDial/>
      </BrowserRouter>
    </div>
  );
}

export default App;
