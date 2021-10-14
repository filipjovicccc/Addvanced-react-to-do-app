export const Button = ({ fn, customClass, arrow }) => (
  <button onClick={fn} className={customClass}>
    <i className={arrow}></i>
  </button>
);

export const List = ({ title, children, activelist }) => (
  <div className="wrap">
    {activelist}
    <h1>{title}</h1>
    <hr />
    <div className="todo-container">
      <ul className="todo-list">{children}</ul>
    </div>
  </div>
);
// const deleteHandler = (id) =>
// setTrashTodos((trashTodos) =>
//   trashTodos.filter((trashTodos) => trashTodos.id !== id)
// );
// export const deleteHandler = (id, todos, setTrashTodos) =>
//   setTrashTodos((todos) => todos.filter((todos) => todos.id !== id));
