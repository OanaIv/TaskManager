import TaskCard from '../task-card/TaskCard'
import './TaskViewer.css'

function TaskViewer(props) {
    return (
    <div className='task-wrapper'>
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
    )
}

export default TaskViewer;