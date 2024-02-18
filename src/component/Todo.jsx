import TodoForm from '@/component/TodoForm'
import TodoList from '@/component/TodoList'

function Todo({ data, setData }) {
    return (
        <>
            <div>
                <h1>Todo List</h1>
                <TodoForm data={data} setData={setData} />
                <TodoList data={data} setData={setData} />
            </div>
        </>
    )
}
export default Todo;