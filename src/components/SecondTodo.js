import React from "react";

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
      <button onClick={arrowLeftHandler} className="complete-btn">
        <i className="fas fa-arrow-left"></i>
      </button>
      <li> {text}</li>
      <button onClick={arrowRightHandler} className="complete-btn">
        <i className="fas fa-arrow-right"></i>
      </button>
    </div>
  );
};

export default SecondTodo;
