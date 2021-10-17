import { trashContext } from "../helpers/Context";
import { useContext } from "react";
import { Button } from "../shared/sharedComponents";

function TrashTodo({ todo, id }) {
  const { trashTodos, setTrashTodos } = useContext(trashContext);

  const deleteRamp = () => {
    let filtered = trashTodos.filter((t) => t.id !== todo.id);

    setTrashTodos(filtered);
  };

  return (
    <div className="todo">
      <li>{todo.ex3}</li>
      <Button fn={deleteRamp} customClass="trash-btn" arrow="fas fa-trash" />
    </div>
  );
}

export default TrashTodo;
