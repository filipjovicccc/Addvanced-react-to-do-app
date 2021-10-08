import React from "react";
import TodoList from "./TodoList";


const Form = ({setInputText, inputText, submitTodoHendler, secondInputText, setSecondText, setStatus,  }) => {
  const inputTextHandler = (e) => {
     setInputText(e.target.value)
     setSecondText(e.target.value)
      setStatus(e.target.value)
  }

return(
  <>
      <form>
        <input value ={inputText} value={secondInputText} onChange={inputTextHandler} type="text" className="todo-input" />
        <button onClick={submitTodoHendler} className="todo-button" type="submit">
          <i className="fas fa-plus-square"></i>
        </button>
    

     </form>
      
  </>
    )
}

export default Form;