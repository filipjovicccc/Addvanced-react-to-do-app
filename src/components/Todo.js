import React from "react";
import Button from "./shared/Buttons";

const Todo = ({
  text,
  todo,
  todos,
  setTodos,
  setSecondTodos,
  secondTodos,
  setInputText,
  trashTodos,
  setTrashTodos,
  inputText,
}) => {
  const deleteHandler = () => {
    setTrashTodos([...trashTodos, { text: text, id: Math.random() * 1000 }]);
    setInputText("");

    const result = todos.filter((el) => el.id !== todo.id);

    setTodos(result);
  };

  const arrowRightHandler = (e) => {
    e.preventDefault();
    setSecondTodos([...secondTodos, { text: text, id: Math.random() * 1000 }]);
    setInputText("");

    setTodos(todos.filter((el) => el.id !== todo.id));
  };
  return (
    <div className="todo">
      <Button fn={deleteHandler} customClass="trash-btn" arrow="fas fa-trash" />

      <li> {text}</li>
      <Button
        fn={arrowRightHandler}
        customClass="complete-btn"
        arrow="fas fa-arrow-right"
      />
    </div>
  );
};

export default Todo;
