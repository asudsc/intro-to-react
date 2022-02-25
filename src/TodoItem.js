import { useState } from "react";

function TodoItem(props) {
    
    const [completed, setCompleted] = useState(false)

    return (
        <li 
            className={"list-group-item " + (completed === true ? 'active' : '')}
            onClick={() => {
                if (completed == true) {
                    setCompleted(false)
                } else {
                    setCompleted(true)
                }
            }}
        >
            <span>
                {props.value}
            </span>
        </li>
    )
}

export default TodoItem;