import React, { useState } from 'react';
import './TaskCard.css'
import Badge from '../badge/Badge';
// import DateContainer from '../date-container/DateContainer'

function TaskCard (props) {
    const [counter, setCounter] = useState(0);

    console.log("render " + counter + " " + props.id)

    const increaseClick = () => {
        setCounter(counter + 1)
        console.log("cnt ", counter)
    };

    const decreaseClick = () => {
        setCounter(counter - 1)
        console.log("cnt ", counter)
    }
    return (
    <div className="card-wrapper">
        <div className="card-header">
            <p className="task-id">{props.id}</p>
            <Badge status={props.status}/>
        </div>
        <div className="card-content">
            {/* <p>{props.name}</p> */}
            <p>{counter}</p>
        </div>
        <div className="card-footer">
            <button onClick={increaseClick}>INCREMENT</button>
            <button onClick={decreaseClick}>DECREMENT</button>
            {/* <DateContainer date={props.dueDate}/> */}
        </div>
    </div>
    );
}

export default TaskCard;