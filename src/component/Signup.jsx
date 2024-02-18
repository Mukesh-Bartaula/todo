import { react, useState } from 'react'

function Signup() {

    const [userName, setUserName] = useState('')
    const [userId, setUserId] = useState('')
    const [password, setPassword] = useState('')

    const Signup = (e) => {
        e.preventDefault()


    }

    return (
        <>
            <form onSubmit={(e) => Signup(e)}>
                <div className="mb-3">
                    <label className="form-label">User Full Name</label>
                    <input type="text" className="form-control" value={userName} onChange={(e) => setUserName(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label className="form-label">User Id</label>
                    <input type="text" className="form-control" value={userId} onChange={(e) => setUserId(e.target.value)} />
                </div>

                <div className="mb-3">
                    <label className="form-label ">Password</label>
                    <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>

                <button type="submit" className="btn btn-primary">Create User</button>
            </form>

        </>
    )
}
export default Signup;