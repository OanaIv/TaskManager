import React from "react";
import './EmptyListMessage.css';
import taskIcon from '../../assets/icons/task-icon.png';

const EmptyListMessage = (props) => {
    return (
        <div className="empty-list-container">
            <div className="empty-list-message">
                <img className="task-logo" src={taskIcon} alt="icon" />
                <h3 className="view-title">No Tasks Yet</h3>
                <p className="subtitle">Get productive. Create a task now!</p>
                <button onClick={() => props.onCreateTaskClick(true)} className="button-primary btn-xl">Create Task!</button>
            </div>
        </div>
    );
};

export default EmptyListMessage;