import "./Home.css";

import { useState, useEffect, useContext } from "react";

import Form from "../components/Form";

import Todo from "../components/Todo";

import SecondTodo from "../components/SecondTodo";

import ThirdTodo from "../components/ThirdTodo";

import { trashContext } from "../helpers/Context";

import { List } from "../shared/sharedComponents";

function Home() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [secondTodos, setSecondTodos] = useState([]);
  const [thirdTodos, setThirdTodos] = useState([]);
  const [variableAlert, setVariableAlert] = useState("");
  const { trashTodos, setTrashTodos } = useContext(trashContext);

  const submitTodoHendler = (e) => {
    e.preventDefault();
    if (inputText === "") {
      setVariableAlert('U cannot add empty "to do" ');
      setTimeout(function () {
        window.location = "index";
      }, 2000);
    } else setTodos([...todos, { text: inputText, id: Math.random() * 1000 }]);
    setInputText("");
  };

  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    saveLocalTodos();
  }, [todos]);

  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));

      setTodos(todoLocal);
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Todo List </h1>
      </header>

      <Form
        inputText={inputText}
        setInputText={setInputText}
        submitTodoHendler={submitTodoHendler}
      />

      <div className="variable">{variableAlert}</div>
      <div className="wrapper">
        <List title="TO DO">
          {todos.map((todo) => (
            <Todo
              setTodos={setTodos}
              todos={todos}
              key={todo.id}
              todo={todo}
              text={todo.text}
              secondTodos={secondTodos}
              setSecondTodos={setSecondTodos}
              setInputText={setInputText}
              trashTodos={trashTodos}
              setTrashTodos={setTrashTodos}
            />
          ))}
        </List>
        <List title="IN PROGRESS">
          {secondTodos.map((todo) => (
            <SecondTodo
              setInputText={setInputText}
              setSecondTodos={setSecondTodos}
              secondTodos={secondTodos}
              todos={todos}
              setTodos={setTodos}
              key={todo.id}
              todo={todo}
              text={todo.text}
              thirdTodos={thirdTodos}
              setThirdTodos={setThirdTodos}
            />
          ))}
        </List>
        <List title="COMPLETED">
          {thirdTodos.map((todo) => (
            <ThirdTodo
              thirdTodos={thirdTodos}
              setThirdTodos={setThirdTodos}
              key={todo.id}
              todo={todo}
              text={todo.text}
              setSecondTodos={setSecondTodos}
              secondTodos={secondTodos}
              setInputText={setInputText}
              trashTodos={trashTodos}
              setTrashTodos={setTrashTodos}
            />
          ))}
        </List>
      </div>
    </div>
  );
}

export default Home;
