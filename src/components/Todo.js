import React from "react";

const Button = ({ fn, customClass, arrow }) => (
  <button onClick={fn} className={customClass}>
    <i className={arrow}></i>
  </button>
);

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
      <button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
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
