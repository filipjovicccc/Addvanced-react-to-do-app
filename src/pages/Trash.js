import TrashTodo from "../components/TrashTodo";
import React, { useContext, Suspense } from "react";
import { trashContext } from "../helpers/Context";

const LazyLoader = React.lazy(() => import("../components/LazyLoading"));
function Trash() {
  const { trashTodos, setTrashTodos } = useContext(trashContext);

  return (
    <div>
      <header>
        <h1> Trash page</h1>
        <Suspense fallback={<p>Loading...</p>}>
          <LazyLoader />
        </Suspense>
      </header>
      <div className="wrapper">
        <div className="wrap">
          <div>another component</div>
          <h1>Trash</h1>
          <hr />

          <div className="todo-container">
            <Suspense fallback={<p>Loading...</p>}>
              <LazyLoader />
              <ul className="todo-list">
                {trashTodos.map((todo) => (
                  <TrashTodo
                    trashTodos={trashTodos}
                    setTrashTodos={setTrashTodos}
                    id={Math.random() * 1000}
                    todo={todo}
                    key={todo.id}
                    text={todo.text}
                  />
                ))}
              </ul>
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trash;
