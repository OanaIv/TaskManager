import React from 'react';
import TaskCard from '../task-card/TaskCard';
import './TaskViewer.css';
import ControlPanel from "../control-panel/ControlPanel";

function TaskViewer(props) {

    return (
    <div className="task-viewer-container">
       <ControlPanel onNewTaskAdd={props.onNewTaskAdd}/>

        <div className='task-list-container'>
            {props.taskList.map((item, index) => (
                <TaskCard 
                    key={index}
                    id={item.id}
                    status={item.status}
                    name={item.name}
                    dueDate = {item.dueDate}
            />
            ))
            }
        </div>
    </div>
    )
}

export default TaskViewer;