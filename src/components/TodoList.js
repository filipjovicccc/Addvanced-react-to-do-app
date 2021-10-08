import React from "react"

import Todo from "./Todo"

const TodoList = ({ todos, setTodos,secondTodos, setSecondTodos, setSecondText} ) => {
 
      return(
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
    )
};

export default TodoList