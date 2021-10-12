import React from "react";
import Button from "./shared/Buttons";

const SecondTodo = ({
  text,
  todo,
  todos,
  setTodos,
  secondTodos,
  setSecondTodos,
  thirdTodos,
  setThirdTodos,
  setInputText,
}) => {
  const arrowLeftHandler = () => {
    setTodos([...todos, { text: text, id: Math.random() * 1000 }]);
    setInputText("");

    setSecondTodos(secondTodos.filter((zl) => zl.id !== todo.id));
  };
  const arrowRightHandler = (e) => {
    e.preventDefault();
    setThirdTodos([...thirdTodos, { text: text, id: Math.random() * 1000 }]);
    setSecondTodos(secondTodos.filter((zl) => zl.id !== todo.id));
  };
  return (
    <div className="todo">
      <Button
        fn={arrowLeftHandler}
        customClass="complete-btn"
        arrow="fas fa-arrow-left"
      />

      <li> {text}</li>

      <Button
        fn={arrowRightHandler}
        customClass="complete-btn"
        arrow="fas fa-arrow-right"
      />
    </div>
  );
};

export default SecondTodo;
