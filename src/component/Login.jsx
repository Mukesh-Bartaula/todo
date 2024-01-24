import React, { useState } from 'react';
import noteState from '../Context/notes/noteState';

function Login({ author, setAuthor }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const loginForm = (e) => {
        e.preventDefault();
        setAuthor([...author, { username: username, password: password }])
        console.log(username)
        console.log(password)
        console.log(author)
        setUsername('')
        setPassword('')
    }

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
                <div class="d-flex justify-content-around">

                    <button type="submit" className="btn btn-primary">Login</button>
                    <button type="button" className="btn btn-primary">Sign Up</button>
                </div>


            </div>
        </form>
    )

}
export default Login;

// return (

//     <form onSubmit={(e) => loginForm(e)}>
//         <div>
//             <h2>Login</h2>
//             <div className="mb-3">

//                 <input
//                     type="email"
//                     className="form-control"
//                     placeholder="Username"
//                     value={username}
//                     onChange={(e) => setUsername(e.target.value)}
//                     required
//                 />
//             </div>
//             <div className="mb-3">

//                 <input
//                     type="password"
//                     placeholder="Password"
//                     className="form-control"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     required
//                 />
//             </div>
//             <div class="d-flex justify-content-around">

//                 <button type="submit" className="btn btn-primary">Login</button>
//                 <button type="button" className="btn btn-primary">Sign Up</button>
//             </div>


//         </div>
//     </form>
// )