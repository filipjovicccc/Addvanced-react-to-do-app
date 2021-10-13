import React from "react";
import { Button } from "../shared/sharedComponents";

const Form = ({ submitTodoHendler, inputText, setInputText }) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };
  return (
    <>
      <form>
        <input
          value={inputText}
          onChange={inputTextHandler}
          type="text"
          className="todo-input"
        />
        <Button
          fn={submitTodoHendler}
          customClass="todo-button"
          arrow="fas fa-plus-square"
          type="submit"
        />
      </form>
    </>
  );
};

export default Form;
