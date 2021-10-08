import React from "react"

const Todo = ({text, todo, todos, setTodos, setSecondTodos, secondTodos, setSecondText }) => {
    
    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id))
      
    };
const secondSubmitHandler = (e) => {
    e.preventDefault();
    setSecondTodos([ 
      ...secondTodos, {text: text , completed: false, id: Math.random()*1000},
    ])
    setSecondText("")
    
    setTodos(todos.filter((el) => el.id !== todo.id))
    
}
return(
       <div className= "todo"> 
            <button onClick={deleteHandler} className="trash-btn">
                    <i  className="fas fa-trash"></i>

                    </button>
                 <li > {text}</li>
                <button onClick={secondSubmitHandler}  className="complete-btn">
                    <i className="fas fa-arrow-right"></i>
                    </button>
               
             </div>
    );
}

export default Todo;