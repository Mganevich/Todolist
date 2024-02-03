import './styles.css';

const todos = [{
  id: 1,
  title: 'Make money',
  completed: false
},{
  id: 1,
  title: 'Make money',
  completed: false
}]

function App() {
  return (
    <div className="todo-list">
      <h1>Todo List</h1>
      <ul>
        {todos.map(todo => (<li><input type='checkbox' />{todo.title}</li>))}
      </ul>

    </div>
  );
}

export default App;
