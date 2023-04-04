import React, { useState } from 'react';
import './App.css';
import TaskViewer from './components/task-viewer/TaskViewer';
/* import CreateTaskForm from './components/forms/CreateTaskForm';
import Modal from "./components/modal/Modal" */

const data = [
  {
    id: "T-1",
    name: "1Create a Design System for Enum Workspace.",
    status: "pending",
    dueDate: new Date(2022, 5, 23)
  },
  {
    id: "T-2",
    name: "2Create a Design System for Enum Workspace.",
    status: "in progress",
    dueDate: new Date(2022, 7, 24)
  },
  {
    id: "T-3",
    name: "3Create a Design System for Enum Workspace.",
    status: "completed",
    dueDate: new Date(2022, 6, 13)
  },
  {
    id: "T-4",
    name: "1Create a Design System for Enum Workspace.",
    status: "todo",
    dueDate: new Date(2022, 5, 23)
  },
  {
    id: "T-5",
    name: "2Create a Design System for Enum Workspace.",
    status: "in progress",
    dueDate: new Date(2022, 7, 24)
  },
  {
    id: "T-6",
    name: "3Create a Design System for Enum Workspace.",
    status: "completed",
    dueDate: new Date(2022, 6, 13)
  }
];

function App() {

  const [taskList, setTaskList] = useState(data);
  

  const onNewTaskAdd = (newTask) => {
    setTaskList((prevState) => [
      ...prevState,
      {
        ...newTask,
        dueDate: new Date(newTask.dueDate),
        id: "T-" + (prevState.length + 1),
      },
    ]);
  };


  return (
    <div className="app-container">
      <div className='app-content'>
        <TaskViewer 
          onNewTaskAdd={onNewTaskAdd} 
          taskList={taskList}
        />

        {/* <div className='side-bar-right'>
          <div className='card-xl'>
            <h3>Create Task</h3>
            <CreateTaskForm addNewTask={onNewTaskAdd}/>
          </div>
        </div> */}
      </div>
      
    </div>
  );
 }

export default App;