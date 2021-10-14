import TrashTodo from "../components/TrashTodo";
import { useContext } from "react";
import { trashContext, inputContext } from "../helpers/Context";

function Trash() {
  const { trashTodos, setTrashTodos, deleteHandler } = useContext(trashContext);

  return (
    <div>
      <header>
        <h1> Trash page</h1>
      </header>
      <div className="wrapper">
        <div className="wrap">
          <h1>Trash</h1>
          <hr />

          <div className="todo-container">
            <ul className="todo-list">
              {trashTodos.map((todo) => (
                <TrashTodo
                  trashTodos={trashTodos}
                  setTrashTodos={setTrashTodos}
                  id={Math.random() * 1000}
                  todo={todo}
                  key={todo.id}
                  text={todo.text}
                  deleteHandler={deleteHandler}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trash;
