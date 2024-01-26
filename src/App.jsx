import './App.css'
import { useState } from 'react'
import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom'
import UserState from './Context/notes/UserState'
import TodoForm from '@/component/TodoForm'
import TodoList from '@/component/TodoList'
import Login from '@/component/Login'
import Signup from '@/component/Signup'

function App() {
  const [data, setData] = useState([])
  const [loggedIn, setLoggedIn] = useState(false)
  const [author, setAuthor] = useState([])


  return (
    <UserState>
      <BrowserRouter>

        <Routes>
          <Route
            path="/"
            element={(loggedIn ?
              (<Navigate to="/todo" />)
              :
              (<Login author={author} setAuthor={setAuthor} setLoggedIn={setLoggedIn} />)
            )}

          />


          <Route
            path="/Signup"
            element={<Signup />}

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
    </UserState>

  )
}
export default App;
