import "./Home.css"

import {useState, useEffect} from "react"

import Form from "../Form"

import Todo from "../Todo"

import SecondTodo from "../SecondTodo"

import ThirdTodo from "../ThirdTodo"


import Trash from "./Trash"



// import { trashTodos, setTrashTodos } from "../../helpers/deleteTrash"

function Home(){

    const [inputText, setInputText] = useState("");
    const [todos, setTodos] = useState([]);
    const [secondTodos, setSecondTodos] = useState([])
    const [thirdTodos, setThirdTodos] = useState([])
     const [variableAlert, setVariableAlert] = useState('')
     
     
    const submitTodoHendler = (e) => {
      e.preventDefault();
      if (inputText === ""){
       
        setVariableAlert('U cannot add empty "to do" ')
        setTimeout(function(){window.location="index";}, 2000)
      } else
      setTodos([ 
      
        ...todos, {text: inputText,  id: Math.random()*1000},
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
       {/* <Trash
       setInputText={setInputText}
       trashTodos={trashTodos}
       setTrashTodos={setTrashTodos}
       todos={todos}
       /> */}
     
      <Form 
      inputText={inputText}
       setInputText={setInputText}
       submitTodoHendler={submitTodoHendler}
       />
   
   <div className= "variable">
         {variableAlert}
       </div>
  <div className="wrapper">
          <div className="wrap">
            <h1>TO DO </h1>
           <hr />
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
                       setInputText={setInputText}
                        />
                    
                       ))}
                  </ul>
           </div>
   </div>
          <div className="wrap">
            <h1>IN PROGRESS</h1>
          <hr />
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
         <h1>COMPLETED</h1>
           <hr />
     <div className="todo-container" >
              <ul className="todo-list">
                  {thirdTodos.map(todo => (
                      <ThirdTodo
                       thirdTodos={thirdTodos}
                       setThirdTodos={setThirdTodos}
                       key={todo.id}
                       todo={todo}
                       text={todo.text} 
                       setSecondTodos={setSecondTodos}
                       secondTodos={secondTodos}
                       setInputText={setInputText}
                   />
                    
                        ))}
       
               </ul>
              
      </div>
  
  
          </div>
         </div>
    
      </div>

   )
}

export default Home