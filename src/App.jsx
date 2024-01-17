import './App.css'
import TodoForm from '@/component/TodoForm';
import TodoList from '@/component/TodoList';
import { useState } from 'react';

function App() {
  const [data, setData] = useState([]);
  return (
    <>
      <h1>Todo List</h1>
      <TodoForm data={data} setData={setData} />
      <TodoList data={data} setData={setData} />
    </>
  )
}
export default App;
