import { useState } from "react";

function TodoForm({ data, setData }) {
    const [inputTitleValue, setinputTitleValue] = useState('');
    const [inputDescValue, setinputDescValue] = useState('');
    const [error, setError] = useState('')

    const handleTitleInput = (e) => {
        setinputTitleValue(e.target.value)
    }

    const handleDescInput = (e) => {
        setinputDescValue(e.target.value)
    }
    const handleData = () => {
        if (inputTitleValue === '' || inputDescValue === '') {
            setError("Both of the field is required")
            return false
        }
        setError('')
        setData([...data, { inputTitleValue: inputTitleValue, inputDescValue: inputDescValue }]);
        setinputTitleValue('');
        setinputDescValue('');

    }

    return (
        <>
            <form>
                <input className="input px-4 my-2 w-100" type="text" value={inputTitleValue} placeholder="Enter Title" onChange={handleTitleInput} />
                <br />

                <input className="input px-4 my-2 w-100" type="text" value={inputDescValue} placeholder="Enter Desccription" onChange={handleDescInput} />
                <br />

                <div className="text-start">
                    <button type="button" className="btn btn-dark my-1" onClick={handleData} >Add Todo</button>
                </div>
                <div>
                    {error}
                </div>
            </form>
        </>
    )
}
export default TodoForm;
