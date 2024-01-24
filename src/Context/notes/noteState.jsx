import react from "react"
import noteContext from "./noteContex"

const noteState = (props) => {
    const state = {
        "username": "mukesh@gmail.com",

        "password": "123456"
    }
    return (
        <noteContext.provider value={state}>
            {props.children}
        </noteContext.provider>
    )

}
export default noteState