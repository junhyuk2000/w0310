function TodoApp({ task, deletes }) {
  return (
    <ul className="list-group">
      {task.map((task, idx) => {
        return (
          <li
            key={idx}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <span className="me-3">{task}</span>
            <button
              className="btn btn-danger btn-sm equal_height equal_width"
              onClick={() => deletes(idx)}
            >
              삭제
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default TodoApp;
