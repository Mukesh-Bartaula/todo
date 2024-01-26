import React, { useState, useEffect, useContext } from 'react';
import  UserContext from '../Context/notes/UserContext'
import { Link } from 'react-router-dom'

function Login({ author, setAuthor, setLoggedIn }) {
    const {user} = useContext(UserContext)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const loginForm = (e) => {
        e.preventDefault();
        
        const isAuthorInArray = user.some((userObj) => {
            return (
              userObj.username === username && userObj.password === password
            );
          });
      
          if (isAuthorInArray) {
            // Successfully logged in
            setLoggedIn(true)
          } else {
            // Invalid login
            console.log('Invalid credentials');
          }
       
    }
    useEffect(() => {
        console.log(author);
    }, [author]);
    useEffect(() => {
        console.log(user);
    }, [user]);

    return (
<form onSubmit={(e) => loginForm(e)}>
              <div>
                  <h2>Login</h2>
                  <div className="mb-3">
      
                      <input
                          type="email"
                          className="form-control"
                          placeholder="Username"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                          required
                      />
                  </div>
                  <div className="mb-3">
      
                      <input
                          type="password"
                          placeholder="Password"
                          className="form-control"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                      />
                  </div>
                  <div className="d-flex justify-content-around">
      
                      <button type="submit" className="btn btn-primary">Login</button>
                      <Link to='/Signup' className="btn btn-primary">Sign Up
                      </Link>
                      
                     
                  </div>
      
      
              </div>
          </form>
       
        
    )

}
export default Login;

// return (

 
// )