import React from "react";
import { useContext } from "react";
import { inputContext } from "./helpers/Context";

const Form = ({ submitTodoHendler, inputText, setInputText }) => {

  // const {inputText, setInputText} = useContext(inputContext);

  const inputTextHandler = (e) => {
     setInputText(e.target.value)
  
  }
return(
  <>
      <form>
        <input value ={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
        <button onClick={submitTodoHendler} className="todo-button" type="submit">
          <i className="fas fa-plus-square"></i>
        </button>
    

     </form>
      
  </>
    )
}

export default Form;