import { useContext } from "react";
import { todoContext } from "../helpers/Context";
import { Button } from "../shared/sharedComponents";
import { arrowHandler } from "../helpers/helpers";
import { deleteHandler } from "../helpers/helpers";

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
  id,
}) => {
<<<<<<< HEAD
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
=======
>>>>>>> main

  const { todos, setTodos } = useContext(todoContext);

  // const deleteHandler = () => {
  //   setTrashTodos([...trashTodos, { text: text, id: Math.random() * 1000 }]);
  //   setInputText("");

  //   const result = todos.filter((el) => el.id !== todo.id);

  //   setTodos(result);
  // };

<<<<<<< HEAD
  // const arrowHandler = (e) => {
  //   e.preventDefault();
  //   setSecondTodos([...secondTodos, { text: text, id: Math.random() * 1000 }]);
  //   setInputText("");

  //   setTodos(todos.filter((el) => el.id !== todo.id));
  // };
=======
  const arrowRightHandler = (e) => {
    e.preventDefault();
    setSecondTodos([...secondTodos, { text: text, id: Math.random() * 1000 }]);
    setInputText("");

    setTodos(todos.filter((el) => el.id !== todo.id));
  };
>>>>>>> main


  return (
    <div className="todo">
      {/* // left-icon */}
      {console.log(todos)}
      {todo.list !== "DO" ? (
        <Button
          fn={(e) =>
            arrowHandler(e, id, "DOING", todos, setInputText, setTodos)
          }
          customClass="complete-btn"
          arrow="fas fa-arrow-left"
        />
      ) : (
        <Button
          fn={deleteHandler(id, todos, setTodos, todo)}
          customClass="trash-btn"
          arrow="fas fa-trash"
        />
      )}
      <li> {text}</li>
      {/* //right-icon */}
      {todo.list !== "DOING" ? (
        <Button
          fn={(e) => arrowHandler(e, id, "DO", todos, setInputText, setTodos)}
          customClass="complete-btn"
          arrow="fas fa-arrow-right"
        />
      ) : (
        <Button
          fn={deleteHandler}
          customClass="trash-btn"
          arrow="fas fa-trash"
        />
      )}
    </div>
  );
};

export default Todo;
