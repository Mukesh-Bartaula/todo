import { react, useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { useEffect } from 'react';
import UserContext from '../Context/notes/UserContext';

function Signup() {
    const { user } = useContext(UserContext)
    const { setUser } = useContext(UserContext)
    const [userName, setUserName] = useState('')
    const [userId, setUserId] = useState('')
    const [password, setPassword] = useState('')

    const Signup = (e) => {
        e.preventDefault()
        const userData = ([...user, {
            username: userId,
            password: password
        }])
        setUser(userData)
        setUserName('')
        setUserId('')
        setPassword('')
    }
    useEffect(() => {
        console.log(user)
    }, [user])



    return (
        <>
            <form onSubmit={(e) => Signup(e)} >
                {/* <div className="mb-3">
                    <label className="form-label">User Full Name</label>
                    <input type="text" className="form-control" value={userName} onChange={(e) => setUserName(e.target.value)} required />
                </div> */}
                <div className="mb-3">
                    <label className="form-label">User Id</label>
                    <input type="email" className="form-control" value={userId} onChange={(e) => setUserId(e.target.value)} required />
                </div>

                <div className="mb-3">
                    <label className="form-label ">Password</label>
                    <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>

                <button type="submit" className="btn btn-primary w-100">Create User</button>
                <br />
                <Link to='/' className="btn btn-primary mt-3 w-100 ">
                    Log in
                </Link>

            </form >

        </>
    )
}
export default Signup;