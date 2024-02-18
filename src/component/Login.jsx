import React, {  useState } from 'react';
import { Link } from 'react-router-dom';


function Login({ user, setLoggedIn }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');   

    function loginForm(e) {
        e.preventDefault();
        // const isAuthorInArray = user.some((userObj) => {
        //     return (
        //       userObj.username === username && userObj.password === password
        //     );
        //   });
      
        if (user.password==password && user.username==username) {
            // Successfully logged in
            setLoggedIn(true)
          } else {
            // Invalid login
            console.log('Invalid credentials');
          }
        console.log(user);
        console.log(username);
        console.log(password);
        setUsername('');
        setPassword('');
    }

    return (
        <>
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
                <Link to='/Signup'  className="btn btn-primary">
               Sign Up
                </Link>
               
            </div>


        </div>
    </form>
        
            {/* <noteContext.Consumer>
                {(auth) => {

                    return (<h1>hi, name is  {auth} .....</h1>)
                    //  <form onSubmit={(e) => loginForm(e)}>
                    //     <div>
                    //         <h1>{auth[0]}</h1>
                    //         <h2>Login</h2>
                    //         <div className="mb-3">

                    //             <input
                    //                 type="email"
                    //                 className="form-control"
                    //                 placeholder="Username"
                    //                 value={username}
                    //                 onChange={(e) => setUsername(e.target.value)}
                    //                 required
                    //             />
                    //         </div>
                    //         <div className="mb-3">

                    //             <input
                    //                 type="password"
                    //                 placeholder="Password"
                    //                 className="form-control"
                    //                 value={password}
                    //                 onChange={(e) => setPassword(e.target.value)}
                    //                 required
                    //             />
                    //         </div>
                    //         <div class="d-flex justify-content-around">

                    //             <button type="submit" className="btn btn-primary">Login</button>
                    //             <a href='/Signup'>
                    //                 <button type="button" className="btn btn-primary">Sign Up</button>
                    //             </a>
                    //         </div>


                    //     </div>
                    // </form>
                }}
            </noteContext.Consumer> */}

        </>
    )

}
export default Login;

// return (

 
// )