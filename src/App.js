import './App.css';

import React, {useState, useEffect} from "react"

import Form from "./components/Form";

import ReactDOM from 'react-dom';

import Todo from './components/Todo'

import SecondTodo from './components/SecondTodo';

import ThirdTodo from './components/ThirdTodo';

function App() {

  const [inputText, setInputText] = useState("");
  const [secondInputText,  setSecondText] = useState("");
  const [todos, setTodos] = useState([]);
  const [secondTodos, setSecondTodos] = useState([])
  const [thirdTodos, setThirdTodos] = useState([])
   const [variable, variableAlert] = useState('')

  const submitTodoHendler = (e) => {
    e.preventDefault();
    if (inputText === ""){
     
      variableAlert("Cannot have empty to do, or same to do twice in a row")
      setTimeout(function(){window.location="index";}, 2000)
    } else
    setTodos([ 
    
      ...todos, {text: inputText, completed: false, id: Math.random()*1000},
    ])
    setInputText("")
  }

  useEffect(() => {
    getLocalTodos();
  }, [])
  
  useEffect(() => {
    saveLocalTodos()
  }, [todos,])

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
    inputText={inputText}
     setInputText={setInputText}
     submitTodoHendler={submitTodoHendler}
     />
 
 <div className= "variable">
       {variable}
     </div>
<div className="wrapper">
        <div className="wrap">
       
 <div className="todo-container" >
            <ul className="todo-list">
                {todos.map(todo => (
                    <Todo
                     setTodos={setTodos}
                     todos={todos}
                     key={todo.id}
                     todo={todo}
                     text={todo.text} 
                     secondTodos={secondTodos}
                     setSecondTodos = {setSecondTodos}
                     setSecondText= {setSecondText}
                      />
                  
                     ))}
                </ul>
         </div>
 </div>
        <div className="wrap">

        <div className="todo-container" >
            <ul className="todo-list">
                {secondTodos.map(todo => (
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
                   </ul>
       </div>
</div>
       <div className="wrap">
   <div className="todo-container" >
            <ul className="todo-list">
                {thirdTodos.map(todo => (
                    <ThirdTodo
                     thirdTodos={thirdTodos}
                     setThirdTodos={setThirdTodos}
                     key={todo.id}
                     todo={todo}
                     text={todo.text} 
                 />
                  
                      ))}
     
             </ul>
            
    </div>


        </div>
       </div>
  
    </div>
  );
}

export default App;
