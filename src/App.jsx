import './App.css'
import TodoForm from '@/component/TodoForm'
import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom'
import TodoList from '@/component/TodoList'
import { useState } from 'react'
import Login from '@/component/Login'

function App() {
  const [data, setData] = useState([])
  const [loggedIn, setLoggedIn] = useState(false)
  const [author, setAuthor] = useState([])


  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route
            exact
            path="/"
            element={(loggedIn ?
              (<Navigate to="/todo" />)
              :
              (<Login author={author} setAuthor={setAuthor} />)
            )}
          />

         

          <Route
            path="/todo"
            element={(loggedIn ? (
              <div>

                <h1>Todo List</h1>
                <TodoForm data={data} setData={setData} />
                <TodoList data={data} setData={setData} />
              </div>
            ) : (<Navigate to="/" />))}
          />

        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App;
