<<<<<<< HEAD
export const arrowHandler = (e, id, listName, list, fn, fn2) => {
  e.preventDefault();
  const changeListProp = list.map((t) => {
    if (t.id === id) {
      t.list = listName;
    }
    return t;
  });
  fn("");

  fn2(changeListProp);
};

export const deleteHandler = (id, list, fn, ex) => {
  // setTrashTodos([...trashTodos, { text: text, id: Math.random() * 1000 }]);
  // setInputText("");
=======

>>>>>>> main

  const result = list.filter((el) => el.id !== ex.id);

  fn(result);
};
