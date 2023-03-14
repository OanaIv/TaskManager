import TaskCard from '../task-card/TaskCard'
import './TaskViewer.css'

function TaskViewer(props) {
    return (
    <div className='task-wrapper'>
        <TaskCard 
            id={props.data[0].id}
            status={props.data[0].status}
            name={props.data[0].name}
            dueDate = {props.data[0].dueDate}
        />
        <TaskCard 
            id={props.data[1].id}
            status={props.data[1].status}
            name={props.data[1].name}
            dueDate = {props.data[1].dueDate}
        />
        <TaskCard 
            id={props.data[2].id}
            status={props.data[2].status}
            name={props.data[2].name}
            dueDate = {props.data[2].dueDate}
        />
        <TaskCard 
            id={props.data[3].id}
            status={props.data[3].status}
            name={props.data[3].name}
            dueDate = {props.data[3].dueDate}
        />
        <TaskCard 
            id={props.data[4].id}
            status={props.data[4].status}
            name={props.data[4].name}
            dueDate = {props.data[4].dueDate}
        />
        <TaskCard 
            id={props.data[5].id}
            status={props.data[5].status}
            name={props.data[5].name}
            dueDate = {props.data[5].dueDate}
        />
    </div>
    )
}

export default TaskViewer;