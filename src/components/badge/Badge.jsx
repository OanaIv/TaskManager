import React from 'react';
import './Badge.css'

const Badge = (props) => {

    const getBadgeStyle = () => {
        switch (props.status) {
            case "todo":
                return "badge-todo";
            case "in progress":
                return "badge-in-progress";
            case "completed":
                return "badge-completed";
            case "pending":
                return "badge-pending";
            default: 
                return "todo"; 
        } 
    }

    return (
        <div className={`badge ${getBadgeStyle()}`}>
            <p>{props.status}</p>
        </div>
    )
    }

export default Badge