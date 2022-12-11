import { useState } from "react";

function SortBar({ todoListState }) {
  const [todoList, setTodoList] = todoListState;

  //State for changing classname with different styling\\
  const [isActiveName, setIsActiveName] = useState(false);
  const [isActiveDate, setIsActiveDate] = useState(false);

  //Sorting functions\\
  const sortByName = () => {
    //Makes it so that once active you cannot uncheck it by clicking again\\
    if (isActiveName) return;

    //Is active is false for the other sort btn
    setIsActiveDate(false);

    //Setting the isActive boolean to be true when this function is run\\
    setIsActiveName(true);
    //Sorting todolist in alphabetical order
    const sorted = [...todoList].sort((a, b) => (a.name > b.name ? 1 : -1));

    setTodoList(sorted);
  };

  const sortByDate = () => {
    if (isActiveDate) return;

    setIsActiveName(false);

    setIsActiveDate(true);
    //Sorts todolist from oldest to newest
    const sorted = [...todoList].sort((a, b) => (a.id > b.id ? 1 : -1));

    setTodoList(sorted);
  };

  return (
    <nav>
      <div className="sort-wrap">
        <h4 className="sort-headline">Sortby</h4>
        <div className="sorts">
          <button
            className={isActiveName ? "sort-name-active" : "sort-name"}
            onClick={sortByName}
          >
            Name
          </button>
          <button
            className={isActiveDate ? "sort-date-active" : "sort-date"}
            onClick={sortByDate}
          >
            Date
          </button>
        </div>
      </div>
    </nav>
  );
}
export default SortBar;
