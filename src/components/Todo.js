import { useContext } from "react";
import { todoContext } from "../helpers/Context";
import { Button } from "../shared/sharedComponents";

const Todo = ({
  text,
  todo,
  // todos,
  // setTodos,
  setSecondTodos,
  secondTodos,
  setInputText,
  trashTodos,
  setTrashTodos,
}) => {
  // const componentDidMount = () => {
  // const todos = localStorage.getItem('todos') === 'true';
  // const user = rememberMe ? localStorage.getItem('') : '';
  //   let todos = JSON.parse(localStorage.getItem("todos"));
  //   setTodos(todos);
  //   console.log(todos);
  // };
  // const getLocalItems = () => {
  //   let todos = localStorage.getItem("todos")
  //   console.log(todos)
  // }
  const { todos, setTodos } = useContext(todoContext);
  // const getLocalTodos = () => {
  //   if (localStorage.getItem("todos") === null) {
  //     localStorage.setItem("todos", JSON.stringify([]));
  //   } else {
  //     let todoLocal = JSON.parse(localStorage.getItem("todos"));

  //     setTodos(todoLocal);
  //   }
  // };

  const deleteHandler = () => {
    setTrashTodos([...trashTodos, { text: text, id: Math.random() * 1000 }]);
    setInputText("");

    const result = todos.filter((el) => el.id !== todo.id);

    setTodos(result);
  };

  // const arrowRightHandler = (e) => {
  //   e.preventDefault();
  //   setSecondTodos([...secondTodos, { text: text, id: Math.random() * 1000 }]);
  //   setInputText("");

  //   setTodos(todos.filter((el) => el.id !== todo.id));
  // };
  const arrowRightHandler = (e) => {
    e.preventDefault();
    setTodos([...todos, { text: text, id: Math.random() * 1000 }]);
    setInputText("");

    // setTodos(todos.filter((el) => el.id !== todo.id));
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
