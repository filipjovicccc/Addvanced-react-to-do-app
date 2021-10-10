import React from "react"


const Todo = ({text, todo, todos, setTodos, setSecondTodos, secondTodos, setInputText  }) => {
    
    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id))
        
      };

const arrowRightHandler = (e) => {
    e.preventDefault();
    setSecondTodos([ 
      ...secondTodos, {text: text , id: Math.random()*1000},
    ])
    setInputText("")

    
    setTodos(todos.filter((el) => el.id !== todo.id))
    
}
return(
       <div className= "todo"> 
            <button onClick={deleteHandler} className="trash-btn">
                    <i  className="fas fa-trash"></i>

                    </button>
                 <li > {text}</li>
                <button onClick={arrowRightHandler}  className="complete-btn">
                    <i className="fas fa-arrow-right"></i>
                    </button>
               
             </div>
    );
}

export default Todo;