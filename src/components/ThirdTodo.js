import React from "react"

const ThirdTodo = ({text, todo, thirdTodos, setThirdTodos, setSecondTodos, secondTodos, setInputText}) => {


const thirdDeleteHandler = () => {
       

        setThirdTodos(thirdTodos.filter((el) => el.id !== todo.id))
     
};

const arrowLeftHandler = () => {
        setSecondTodos([ 
                ...secondTodos, {text: text , completed: false, id: Math.random()*1000},
              ])
              setInputText("")
          
         
        setThirdTodos(thirdTodos.filter((el) => el.id !== todo.id))
         
    
        };


return(
       <div className= "todo"> 
            <button onClick={arrowLeftHandler} className="complete-btn">
                    <i  className="fas fa-arrow-left"></i>

                    </button>
            <li > {text}</li>
                <button onClick= {thirdDeleteHandler} className="trash-btn">
                    <i className="fas fa-trash"></i>
                    </button>
               
             </div>
    );
}

export default ThirdTodo;