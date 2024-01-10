import { useState } from "react";

function TodoForm({ data, setData }) {
    const [inputTitleValue, setinputTitleValue] = useState('');
    const [inputDescValue, setinputDescValue] = useState('');


    const handleTitleInput = (e) => {
        setinputTitleValue(e.target.value)
    }

    const handleDescInput = (e) => {
        setinputDescValue(e.target.value)
    }
    const handleData = (e) => {
        e.preventDefault();
        setData([...data, { inputTitleValue: inputTitleValue, inputDescValue: inputDescValue }])
        setinputTitleValue('')
        setinputDescValue('')

    }

    return (
        <>
            <form className="mb-4" onSubmit={(e) => handleData(e)} >
                <input className="input px-4 my-2 w-100" type="text" value={inputTitleValue} placeholder="Enter Title" onChange={handleTitleInput} required />
                <br />

                <input className="input px-4 my-2 w-100" type="text" value={inputDescValue} placeholder="Enter Desccription" onChange={handleDescInput} required />
                <br />

                <div className="text-start">
                    <button type="submit" className="btn btn-primary my-1"  >Add Todo</button>
                </div>

            </form>
        </>
    )
}
export default TodoForm;
