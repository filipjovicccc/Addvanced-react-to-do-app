import Home from "./pages/Home";
import Trash from "./pages/Trash";
import Navbar from "./components/Navbar";
import { useState } from "react";
import { trashContext } from "./helpers/Context";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [trashTodos, setTrashTodos] = useState([]);

  const deleteHandler = (id) =>
    setTrashTodos((trashTodos) =>
      trashTodos.filter((trashTodos) => trashTodos.id !== id)
    );

  const value = {
    trashTodos,
    setTrashTodos,
    deleteHandler,
  };

  return (
    <trashContext.Provider value={value}>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/trash" exact component={Trash} />
        </Switch>
      </Router>
    </trashContext.Provider>
  );
}

export default App;
