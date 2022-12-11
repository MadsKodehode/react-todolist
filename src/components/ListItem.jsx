import { MdEdit, MdRemoveCircle } from "react-icons/md";
import { useState } from "react";
function ListItem({ todoListState, removeTodo }) {
  const [todoList, setTodoList] = todoListState;

  //State for determaning whether or not we are trying to edit the todo
  const [edit, setEdit] = useState(null);

  //State for the input while editing todo
  const [editInput, setEditInput] = useState("");

  //Function for editing the todo text\\
  const editTodo = (id) => {
    const editedTodo = todoList.map((todo) => {
      //Makes sure its the todo we are editing before changing the name\\
      if (todo.id === id) {
        todo.name = editInput;
      }

      return todo;
    });

    setTodoList(editedTodo);

    setEdit(null);

    setEditInput("");
  };

  //Function for discarding the edit\\
  const discardEdit = () => {
    setEdit(null);
    setEditInput("");
  };

  //Returns different list based on the edit state\\
  return todoList.map((todo) =>
    edit === todo.id ? (
      <li className="list-item" key={todo.id}>
        <div className="edit-wrap">
          <input
            type="text"
            value={editInput}
            onChange={(event) => setEditInput(event.target.value)}
          ></input>
          <button className="update" onClick={() => editTodo(todo.id)}>
            Set
          </button>
          <button className="discard" onClick={discardEdit}>
            X
          </button>
        </div>
        <div className="btns">
          <MdEdit className="edit" onClick={() => setEdit(todo.id)}></MdEdit>
          <MdRemoveCircle
            className="remove"
            onClick={() => removeTodo(todo.id)}
          ></MdRemoveCircle>
        </div>
      </li>
    ) : (
      <li className="list-item" key={todo.id}>
        {todo.name}
        <div className="btns">
          <MdEdit className="edit" onClick={() => setEdit(todo.id)}></MdEdit>
          <MdRemoveCircle
            className="remove"
            onClick={() => removeTodo(todo.id)}
          ></MdRemoveCircle>
        </div>
      </li>
    )
  );
}

export default ListItem;
