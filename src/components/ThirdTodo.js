import React from "react"


const ThirdTodo = ({text, todo, thirdTodos, setThirdTodos,}) => {


const thirdDeleteHandler = () => {
       

        setThirdTodos(thirdTodos.filter((el) => el.id !== todo.id))
     
};
return(
       <div className= "todo"> 
            <button onClick={thirdDeleteHandler} className="trash-btn">
                    <i  className="fas fa-trash"></i>

                    </button>
            <li > {text}</li>
                <button  className="complete-btn">
                    <i className="fas fa-arrow-right"></i>
                    </button>
               
             </div>
    );
}

export default ThirdTodo;