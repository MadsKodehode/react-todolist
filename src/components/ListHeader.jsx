import { IoIosAddCircle } from "react-icons/io";

function ListHeader({ inputState, todo, addTodo }) {
  const [input, setInput] = inputState;

  return (
    <header>
      <div className="header-wrap">
        <h1 className="headline">I NEED TO:</h1>
        <div className="add-wrap">
          <input
            type="text"
            placeholder="Add todo"
            className="input"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            autoFocus={true}
          ></input>
          <button className="add-btn" onClick={() => addTodo(todo)}>
            <IoIosAddCircle></IoIosAddCircle>
          </button>
        </div>
      </div>
    </header>
  );
}
export default ListHeader;
