import TodoApp from "./component/TodoApp";
import TodoHeader from "./component/TodoHeader";
import { useState } from "react";
function App() {
  const [task, setTask] = useState([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (input.trim() === "") return;
    setTask([...task, input.trim()]);
    setInput("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") addTask();
  };

  const deleteTask = (index) => {
    setTask(task.filter((_, i) => i !== index));
  };
  return (
    <div className="todo_container container">
      <TodoHeader />
      <div className="row g-2 mb-4">
        <div className="col-sm-9 col-12">
          <input
            type="text"
            placeholder="할 일을 입력하세요"
            value={input}
            className="form-control equal_height"
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </div>
        <div className="col-sm-3 col-12 d-grid">
          <button
            className="btn btn-primary equar_height equal_width"
            onClick={addTask}
          >
            추가
          </button>
        </div>
      </div>
      <TodoApp task={task} deletes={deleteTask} />
    </div>
  );
}

export default App;
