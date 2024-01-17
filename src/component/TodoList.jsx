import React, { useState } from "react"
function TodoList({ data, setData }) {

    const [updateTitle, setupdateTitle] = useState('')
    const [updateDesc, setupdateDesc] = useState('')


    const handleUpdateTitle = (Title) => {
        setupdateTitle(Title)
    }
    const handleUpdateDesc = (desc) => {
        setupdateDesc(desc)
    }
    const completeTask = (e, id) => {
        e.preventDefault();
        const oldData = [...data]
        data.map((item, index) => {
            if (index == id) {
                const upgradeStatus = {
                    ...item,
                    inputStatus: 'true'
                }
                oldData[id] = upgradeStatus
            }
        })
        setData(oldData)


    }
    const editButton = (e, id) => {
        e.preventDefault();
        data.map((item, index) => {
            if (index === id) {
                setupdateTitle(item.inputTitleValue)
                setupdateDesc(item.inputDescValue)
            }
        })
    }

    const handleEdit = (e, id) => {
        e.preventDefault();
        const newData = [...data]
        data.map((item, index) => {
            if (index == id) {
                const updatedData = {
                    ...item,
                    inputTitleValue: updateTitle,
                    inputDescValue: updateDesc
                }
                newData[id] = updatedData
            }
        });
        setupdateTitle('')
        setupdateDesc('')
        setData(newData)
    }


    const deleteData = (id) => {
        const newList = data.filter((_, index) => index !== id)
        setData(newList)
    }
    return (
        <>
            <div className="container">
                <table className=" table    table-hover border  ">
                    <thead>
                        <tr>
                            <th>SN</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th colSpan="3" style={{ width: '150px' }} >Operation</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (

                            < tr key={index} >
                                <td>{index + 1}</td>
                                <td>{item.inputTitleValue}</td>
                                <td>{item.inputDescValue}</td>


                                {item.inputStatus === 'true' && (
                                    <td colSpan='2'>
                                        <label className="badge bg-success rounded-pill d-flex align-items-center justify-content-center">Complete</label>
                                    </td>
                                )}
                                {item.inputStatus === 'false' && (
                                    <td>
                                        <div className="complete_component">

                                            <div style={{ display: 'flex', height: '25px', width: '20px', cursor: 'pointer' }}>

                                                <img src="./completed.png" onClick={(e) => completeTask(e, index)} />
                                            </div>
                                        </div>
                                    </td>
                                )}


                                {item.inputStatus === 'false' && (
                                    <td >
                                        <div style={{ display: 'flex', height: '25px', width: '20px', cursor: 'pointer' }} >
                                            <img src="./edit.png" data-bs-toggle="modal" data-bs-target={`#editForm${index}`} onClick={(e) => editButton(e, index)} />
                                            <div className="modal fade" id={`editForm${index}`}>
                                                <div className="modal-dialog">
                                                    <div className="modal-content">
                                                        <div className="modal-header">
                                                            <h2 className="modal-title" >Edit Form</h2>
                                                            <button type="button" className="btn-close" data-bs-dismiss="modal" ></button>
                                                        </div>
                                                        <div className="modal-body">
                                                            <form onSubmit={(e) => handleEdit(e, index)}>
                                                                <div className="mb-3">
                                                                    <input type="text" className="form-control" value={updateTitle} onChange={(e) => handleUpdateTitle(e.target.value)} />
                                                                </div>
                                                                <div className="mb-3">
                                                                    <input type="text" className="form-control" value={updateDesc} onChange={(e) => handleUpdateDesc(e.target.value)} />
                                                                </div>
                                                                <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">Update</button>
                                                            </form>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                )}


                                <td >
                                    <div style={{ display: 'flex', height: '25px', width: '20px', cursor: 'pointer' }}>
                                        <img src="./delete.png" onClick={() => deleteData(index)} />
                                    </div>
                                </td>
                            </tr>

                        ))}

                    </tbody>

                </table >
            </div >
        </>
    )
}
export default TodoList;