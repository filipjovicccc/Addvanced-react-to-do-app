import "./Home.css";

import { useState, useEffect, useContext } from "react";

import Form from "../components/Form";

import Todo from "../components/Todo";

import { trashContext, todoContext } from "../helpers/Context";

import { List } from "../shared/sharedComponents";

function Home() {
  const [inputText, setInputText] = useState("");
  const { todos, setTodos } = useContext(todoContext);
  const [variableAlert, setVariableAlert] = useState("");
  const { trashTodos, setTrashTodos } = useContext(trashContext);

  const submitTodoHendler = (e) => {
    e.preventDefault();
    if (inputText === "") {
      setVariableAlert('U cannot add empty "to do" ');
      setTimeout(function () {
        window.location = "index";
      }, 2000);
    } else
      setTodos([
        ...todos,
        { text: inputText, id: Math.random() * 1000, list: "DO" },
      ]);
    setInputText("");
  };

  useEffect(() => {
    const getLocalTodos = () => {
      if (localStorage.getItem("todos") === null) {
        localStorage.setItem("todos", JSON.stringify([]));
      } else {
        let todoLocal = JSON.parse(localStorage.getItem("todos"));

        setTodos(todoLocal);
      }
    };
    setTodos();
    getLocalTodos();
  }, []);

  useEffect(() => {
    const saveLocalTodos = () => {
      localStorage.setItem("todos", JSON.stringify(todos));
    };

    saveLocalTodos();
  }, [todos]);

  const filteredList = (list, listName) =>
    list.filter((todo) => todo.list === listName);

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
          {filteredList(todos, "DO").map((todo) => (
            <Todo
              setTodos={setTodos}
              todos={todos}
              key={todo.id}
              todo={todo}
              text={todo.text}
              id={todo.id}
              setInputText={setInputText}
              setTrashTodos={setTrashTodos}
            />
          ))}
        </List>
        <List title="IN PROGRESS">
          {filteredList(todos, "DOING").map((todo) => (
            <Todo
              setInputText={setInputText}
              todos={todos}
              setTodos={setTodos}
              key={todo.id}
              id={todo.id}
              todo={todo}
              text={todo.text}
            />
          ))}
        </List>
        <List title="COMPLETED">
          {filteredList(todos, "DONE").map((todo) => (
            <Todo
              key={todo.id}
              id={todo.id}
              todo={todo}
              todos={todos}
              text={todo.text}
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
