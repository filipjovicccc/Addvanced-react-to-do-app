import React from "react";
import Button from "./shared/Buttons";

const ThirdTodo = ({
  text,
  todo,
  thirdTodos,
  setThirdTodos,
  setSecondTodos,
  secondTodos,
  setInputText,
  trashTodos,
  setTrashTodos,
}) => {
  const deleteHandler = () => {
    setTrashTodos([...trashTodos, { text: text, id: Math.random() * 1000 }]);
    setInputText("");

    setThirdTodos(thirdTodos.filter((el) => el.id !== todo.id));
  };

  const arrowLeftHandler = () => {
    setSecondTodos([...secondTodos, { text: text, id: Math.random() * 1000 }]);
    setInputText("");

    setThirdTodos(thirdTodos.filter((el) => el.id !== todo.id));
  };

  return (
    <div className="todo">
      <Button
        fn={arrowLeftHandler}
        customClass="complete-btn"
        arrow="fas fa-arrow-left"
      />

      <li> {text}</li>
      <Button fn={deleteHandler} customClass="trash-btn" arrow="fas fa-trash" />
    </div>
  );
};

export default ThirdTodo;
