import React from "react"

import SecondTodo from "./SecondTodo"

const SecondTodoList = ({ secondTodos, setSecondTodos, todos, setTodos, thirdTodos, setThirdTodos,}) => {
 
      return(
        <div className="todo-container" >
            <ul className="todo-list">
                {secondTodos.map(todo => (

                    <SecondTodo
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
    )
};

export default SecondTodoList