function TodoList() {
    return (
        <>
            <table className=" table table-striped w-100">
                <thead>
                    <tr>
                        <th>SN</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th colSpan="2">Operation</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="my-2 ">
                        <td>1</td>
                        <td>medicine</td>
                        <td>sugar medicine</td>
                        <td>
                            <button type="button py-3" className="btn btn-success" data-bs-target="#editForm" data-bs-toggle="modal">Edit</button>
                            <div className="modal" id="editForm">
                                <div className="modal-dialog " >
                                    <div className="modal-content p-2">
                                        <div className="title">
                                            <h2>
                                                Edit Form
                                            </h2>
                                        </div>
                                        <form>
                                            <div className="m-3">
                                                <input type="text" className="form-control" placeholder="New Title" />

                                            </div>
                                            <div className="m-3">
                                                <input type="text" className="form-control" id="" placeholder="New Description" />
                                            </div>

                                            <button type="submit" className="btn btn-primary">Submit</button>
                                        </form>
                                    </div>
                                </div>

                            </div>
                        </td>
                        <td><button type="button" className="btn btn-danger">Delete</button></td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}
export default TodoList;