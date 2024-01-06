function TodoList({ data, setData }) {
    const deleteData = (id) => {
        const newList = data.filter((_, index) => index !== id)
        setData(newList)
    }

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
                    {data.map((item, index) => (
                        <tr>
                            <td>{index + 1}</td>
                            <td>{item.inputTitleValue}</td>
                            <td>{item.inputDescValue}</td>
                            <td><button type="button" className="btn btn-danger" onClick={() => deleteData(index)}>Delete</button></td>
                        </tr>

                    ))}

                </tbody>

            </table>
        </>
    )
}
export default TodoList;