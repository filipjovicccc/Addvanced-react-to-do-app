import './App.css';

import React, {useState, useEffect} from "react"

import Form from "./components/Form";

import TodoList from './components/TodoList';

import SecondTodoList from './components/SecondTodoList';

import ThirdTodoList from './components/ThirdTodoList';

import ReactDOM from 'react-dom';

function App() {

  const [inputText, setInputText] = useState("");
  const [secondInputText,  setSecondText] = useState("");
  const [todos, setTodos] = useState([]);
  const [secondTodos, setSecondTodos] = useState([])
  const [thirdTodos, setThirdTodos] = useState([])
  const [status, setStatus] = useState('all')
  const [variable, variableAlert] = useState('')

// let inputRegex = ""
//  let mYstring = ""
  const submitTodoHendler = (e) => {
    e.preventDefault();
    if (inputText === ""){
      // alert("Cannot have empty to do, or same to do twice in a row")
      variableAlert("Cannot have empty to do, or same to do twice in a row")
      setTimeout(function(){window.location="index";}, 2000)
    } else
    setTodos([ 
      // inputRegex = inputText,
      // mYstring = inputRegex.replace(/^(.{25}[^\s]*).*/, "$1"),
      ...todos, {text: inputText, completed: false, id: Math.random()*1000},
    ])
    setInputText("")
  }

  useEffect(() => {
    getLocalTodos();
  }, [])
  
  useEffect(() => {
    saveLocalTodos()
  }, [todos, status])

  const saveLocalTodos = () => {
   
    localStorage.setItem("todos", JSON.stringify(todos))
        
      }
      const getLocalTodos = () =>{
        if(localStorage.getItem("todos")=== null){
          localStorage.setItem("todos", JSON.stringify([]))
       } else {
        let todoLocal = JSON.parse(localStorage.getItem('todos'))
    
        setTodos(todoLocal)
       }
      }

 return (
    <div className="App">
      <header>
     <h1>Todo List </h1>
     
     </header>
   
    <Form 
    variable = {variable}
    variableAlert={variableAlert}
     inputText={inputText}
     todos={todos}
     setTodos={setTodos}
     setInputText={setInputText}
     setSecondText = {setSecondText}
     secondInputText = {secondInputText}
     submitTodoHendler={submitTodoHendler}
     setStatus= {setStatus}
 
     />
 
 <div className= "variable">
       {variable}
     </div>
<div className="wrapper">
        <div className="wrap">
       
          <TodoList 
          inputText={inputText}
          setInputText={setInputText}
           setTodos={setTodos}
           todos={todos}
           secondTodos={secondTodos}
           setSecondTodos={setSecondTodos}
           setSecondText = {setSecondText}
           secondInputText = {secondInputText}

           />
       </div>
        <div className="wrap">
          <SecondTodoList 
              secondTodos={secondTodos}
               setSecondTodos={setSecondTodos}
               todos={todos}
               setTodos={setTodos}
               thirdTodos={thirdTodos}
               setThirdTodos={setThirdTodos}
                />
     </div>
       <div className="wrap">
        <ThirdTodoList
            thirdTodos={thirdTodos}
            setThirdTodos={setThirdTodos}
            todos={todos}
            setTodos={setTodos}
        />
        </div>
       </div>
  
    </div>
  );
}

export default App;
