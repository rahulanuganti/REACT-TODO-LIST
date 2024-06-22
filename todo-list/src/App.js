import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';
import {useState, useEffect} from 'react';

function App() {
  

  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filterdTodos, setFilteredTodos]  = useState([]);

  //useEffect()
  useEffect(() => {
    const filterHandler = () => {
      switch(status){
        case 'completed':
          setFilteredTodos(todos.filter(todo => todo.completed === true));
          break;
        case  'uncompleted':
          setFilteredTodos(todos.filter( todo => todo.completed === false));
          break;
        default :
          setFilteredTodos(todos);
          break;
      }
    }
    filterHandler();
  }, [todos, status]);
  //functions
  

  return (
    <div className="App">
      <header>
        <h1>Rahul's ToDo-List</h1>
      </header>
      <Form 
        inputText={inputText} 
        todos={todos} 
        setTodos={setTodos} 
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <TodoList  
        setTodos={setTodos} 
        todos={todos} 
        filteredTodos={filterdTodos}
      />
    </div>
  );
}

export default App;