import { useState, useEffect } from "react";
import ListHeader from "./ListHeader";
import ListItem from "./ListItem";
import SortBar from "./SortBar";
import List from "./List";

const localKey = "todos";

function TodoList() {
  //Todolist state
  //Initial state is set to return the localstorage or empty if there is none\\
  const [todoList, setTodoList] = useState(() => {
    return JSON.parse(localStorage.getItem(localKey)) || [];
  });

  useEffect(() => {
    localStorage.setItem(localKey, JSON.stringify(todoList));
  }, [todoList]);

  //Input value state
  const [input, setInput] = useState("");

  //The todo object with a unique id so that it doesnt recieve any bugs
  const todo = {
    name: input,
    id: new Date().getTime(),
  };

  //Function for adding the todo\\
  const addTodo = (todo) => {
    if (todo.name.length < 3) return;

    //Using spread operator to spread out the array and add the new todo
    const newTodos = [todo, ...todoList];

    //Then setting the state to the new todos
    setTodoList(newTodos);
    setInput("");
  };

  //Remove todo function\\
  const removeTodo = (id) => {
    //Filtering the todos to return all todos without the one we clicked\\
    const filteredTodos = [...todoList].filter((todo) => todo.id !== id);

    //And then setting the state to the new one
    setTodoList(filteredTodos);
  };

  //Using props here to pass down functions, states etc that i need in my child components\\
  return (
    <div className="todo-list">
      <ListHeader
        addTodo={addTodo}
        inputState={[input, setInput]}
        todo={todo}
      ></ListHeader>
      <SortBar todoListState={[todoList, setTodoList]}></SortBar>
      <List>
        <ListItem
          todoListState={[todoList, setTodoList]}
          removeTodo={removeTodo}
        ></ListItem>
      </List>
    </div>
  );
}

export default TodoList;
