import './App.css'
import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Login from '@/component/Login'
import Signup from '@/component/Signup'
import Todo from './component/Todo'

function App() {
  const [data, setData] = useState([])
  const [loggedIn, setLoggedIn] = useState(false)
  const [user, setUser] = useState('');
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5143/get-json-data');
        setUser(response.data);
        console.log(user);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={(loggedIn ? (<Navigate to="/todo" />) : (<Login user={user} setLoggedIn={setLoggedIn} />)
            )}
          />
          <Route
            path="/Signup" element={<Signup />}
          />
          <Route
            path="/todo" element={(loggedIn ? (<Todo data={data} setData={setData} />) : (<Navigate to="/" />))}
          />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>

    </>

  )
}
export default App;
