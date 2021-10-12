import react from "react";
import { trashContext } from "./helpers/Context";
import { useContext } from "react";

function TrashTodo({ todo, id, index }) {
  const { trashTodos, setTrashTodos } = useContext(trashContext);

  const deleteRamp = () => {
    let filtered = trashTodos.filter((t) => t.id !== todo.id);

    setTrashTodos(filtered);
  };

  return (
    <div className="todo">
      <li>{todo.text}</li>
      <button onClick={() => deleteRamp(index)} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
}

export default TrashTodo;
