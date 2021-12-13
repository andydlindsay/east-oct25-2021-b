import ToDoListItem from "./ToDoListItem";

const ToDoList = (props) => {
  const arrOfToDos = props.todos.map((todo) => {
    return <ToDoListItem
      key={todo.id}
      // id={todo.id} 
      // name={todo.name} 
      // completed={todo.completed}
      {...todo}
    />
  });

  return (
    <div>
      <h2>The To Do list</h2>
      { arrOfToDos }
    </div>
  );
};

export default ToDoList;
