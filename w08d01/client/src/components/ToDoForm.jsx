import {useState} from 'react';

const ToDoForm = (props) => {
  const [todoName, setTodoName] = useState('');

  const handleSubmit = () => {
    if (!todoName) {
      return;
    }
    props.addTodo(todoName);
    setTodoName('');
  };

  return (
    <div>
      <h2>Create a new To Do</h2>
      <div>
        <label>New To Do:</label>
        <input 
          value={todoName}
          onChange={(event) => setTodoName(event.target.value)}
        />
        <button
          onClick={handleSubmit}
        >Submit</button>
      </div>
    </div>
  );
};

export default ToDoForm;
