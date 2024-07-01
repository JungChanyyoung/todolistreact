import "./App.scss";
import TodolistHeader from "./Components/TodolistHeader/TodolistHeader";
import TodolistContent from "./Components/TodolistContent/TodolistContent";
import { CreateItem } from "./Components/CreateItem/CreateItem";
import TodolistItem from "./Components/TodolistItem/TodolistItem";

function App() {
  return (
    <div className="section">
      <TodolistHeader />
      <TodolistContent />
      <CreateItem />
    </div>
  );
}

export default App;
