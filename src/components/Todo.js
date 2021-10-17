import { useContext } from "react";
import { todoContext, trashContext } from "../helpers/Context";
import { Button } from "../shared/sharedComponents";
import { arrowHandler } from "../helpers/helpers";
import { deleteHandler } from "../helpers/helpers";

const Todo = ({ text, todo, setInputText, id }) => {
  const { todos, setTodos } = useContext(todoContext);
  const { trashTodos, setTrashTodos } = useContext(trashContext);

  return (
    <div className="todo">
      {todo.list !== "DO" ? (
        todo.list === "DOING" ? (
          <Button
            fn={(e) => arrowHandler(e, id, "DO", todos, setInputText, setTodos)}
            customClass="complete-btn"
            arrow="fas fa-arrow-left"
          />
        ) : (
          <Button
            fn={(e) =>
              arrowHandler(e, id, "DOING", todos, setInputText, setTodos)
            }
            customClass="complete-btn"
            arrow="fas fa-arrow-left"
          />
        )
      ) : (
        <Button
          fn={(e) =>
            deleteHandler(
              e,
              id,
              todos,
              todo,
              setTodos,
              setTrashTodos,
              trashTodos,
              text,
              setInputText
            )
          }
          customClass="trash-btn"
          arrow="fas fa-trash"
        />
      )}

      <li> {text}</li>
      {todo.list !== "DONE" ? (
        todo.list === "DOING" ? (
          <Button
            fn={(e) =>
              arrowHandler(e, id, "DONE", todos, setInputText, setTodos)
            }
            customClass="complete-btn"
            arrow="fas fa-arrow-right"
          />
        ) : (
          <Button
            fn={(e) =>
              arrowHandler(e, id, "DOING", todos, setInputText, setTodos)
            }
            customClass="complete-btn"
            arrow="fas fa-arrow-right"
          />
        )
      ) : (
        <Button
          fn={(e) =>
            deleteHandler(
              e,
              id,
              todos,
              todo,
              setTodos,
              setTrashTodos,
              trashTodos,
              text,
              setInputText
            )
          }
          customClass="trash-btn"
          arrow="fas fa-trash"
        />
      )}
    </div>
  );
};

export default Todo;
