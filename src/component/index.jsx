function Todo_table() {
    return (

        <>
            <h1>TODO LIST</h1>
            <input className="input px-4" type="text" placeholder="Enter name" />
            <br />
            <div className="text-start">
                <button type="button" className="btn btn-dark my-1">Add Name</button>
            </div>
            <table classNameName="table">

                <tr className="my-1">
                    <td>1</td>
                    <td>Mark</td>
                    <td><button type="button" className="btn btn-success">Edit</button></td>
                    <td><button type="button" className="btn btn-danger">Delete</button></td>
                </tr>
                <tr className="my-1">
                    <td>2</td>
                    <td>Jacob</td>
                    <td><button type="button" className="btn btn-success">Edit</button></td>
                    <td><button type="button" className="btn btn-danger">Delete</button></td>
                </tr>
                <tr className="my-1">
                    <td>3</td>
                    <td>Larry</td>
                    <td><button type="button" className="btn btn-success">Edit</button></td>
                    <td><button type="button" className="btn btn-danger">Delete</button></td>
                </tr>
            </table>
        </>
    )
}

export default Todo_table;