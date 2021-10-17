import Home from "./pages/Home";
import Trash from "./pages/Trash";
import Navbar from "./components/Navbar";
import { useState } from "react";
import { trashContext, todoContext } from "./helpers/Context";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [trashTodos, setTrashTodos] = useState([]);
  const [todos, setTodos] = useState([]);

  const value = {
    trashTodos,
    setTrashTodos,
    todos,
    setTodos,
  };

  return (
    <todoContext.Provider value={value}>
      <trashContext.Provider value={value}>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/trash" exact component={Trash} />
          </Switch>
        </Router>
      </trashContext.Provider>
    </todoContext.Provider>
  );
}

export default App;
