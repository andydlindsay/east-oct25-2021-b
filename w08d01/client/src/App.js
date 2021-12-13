import './App.css';
import ToDoList from './components/ToDoList';
import ToDoForm from './components/ToDoForm';
import {useState, useEffect} from 'react';
import axios from 'axios';

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    // const todos = [
    //   {
    //     id: 'abc',
    //     name: 'Pet the cats',
    //     completed: false
    //   },
    //   {
    //     id: 'def',
    //     name: 'Show cats to class',
    //     completed: true
    //   },
    //   {
    //     id: 'ghi',
    //     name: 'Hang out with cats outside',
    //     completed: false
    //   },
    // ];
    axios.get('/todos')
      .then((response) => {
        setTodos(response.data);
      });
    // setTodos(todos);
  }, []);

  const addTodo = (name) => {
    const id = Math.random().toString(36).substring(2, 5);

    const newTodo = {
      id,
      name,
      completed: false
    }

    // setHistory([...history, mode])
    // setTodos([...todos, newTodo]);
    setTodos((prev) => [...prev, newTodo]);
  };

  return (
    <div className="App">
      <h2>Welcome to the To Do List</h2>
      <ToDoList todos={todos} />
      <ToDoForm addTodo={addTodo} />
    </div>
  );
};

export default App;
