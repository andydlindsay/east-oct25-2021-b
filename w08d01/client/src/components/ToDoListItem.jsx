const ToDoListItem = (props) => {
  // const {name, id, completed} = props;

  const name = props.name;
  const id = props.id;
  const completed = props.completed;

  const checkMark = completed ? '✔️' : '❌';

  return (
    <div>
      <h2>{name} ({id}): {checkMark}</h2>
    </div>
  );
};

export default ToDoListItem;
