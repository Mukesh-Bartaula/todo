import React from 'react';
import { TodoForm } from './TodoForm';
import { TodoList } from './TodoList';
function TodoTable() {

    return (
        <>
            <div className="container" >
                <TodoForm />
                <TodoList />

            </div >
        </>
    )
}

export default TodoTable;