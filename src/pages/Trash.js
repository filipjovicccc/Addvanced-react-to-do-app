import TrashTodo from "../components/TrashTodo";
import React, { useContext, Suspense } from "react";
import { trashContext, inputContext } from "../helpers/Context";

const LazyLoader = React.lazy(() => import("../components/LazyLoading"));
function Trash() {
  const { trashTodos, setTrashTodos, deleteHandler } = useContext(trashContext);

  return (
    <div>
      <header>
        <Suspense fallback={<p>Loading...</p>}>
          <h1> Trash page</h1>
          <LazyLoader />
        </Suspense>
      </header>
      <div className="wrapper">
        <div className="wrap">
          <div>another component</div>
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
