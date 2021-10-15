import TrashTodo from "../components/TrashTodo";
import { useContext, lazy, Suspense } from "react";
import { trashContext, inputContext } from "../helpers/Context";
import LazyLoad from "react-lazyload";
import myComp from "../components/myComp";

const MyComp = lazy(() => import("../components/myComp"))
function Trash() {
const { trashTodos, setTrashTodos, deleteHandler } = useContext(trashContext);


  return (
    <div>
      <header>
        <h1> Trash page</h1>
      </header>
      <Suspense fallback={<div>Loading...</div>}> 
      <MyComp />

      </Suspense>
      
     
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
