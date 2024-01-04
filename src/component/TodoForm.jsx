function TodoForm() {
    return (
        <>
            <form>
                <input className="input px-4 my-2 w-100" type="text" placeholder="Enter Title" />
                <br />

                <div className="text-start">
                    <button type="button" className="btn btn-dark my-1" >Add Todo</button>
                </div>
            </form>
        </>
    )
}
export default TodoForm;