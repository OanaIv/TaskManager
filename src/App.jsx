import React from 'react';
import './App.css';
import TaskViewer from './components/task-viewer/TaskViewer';
import CreateTaskForm from './components/forms/CreateTaskForm';

function App() {
  const data = [
  {
    id: "T-1",
    name: "1Create a Design System for Enum Workspace.",
    status: "todo",
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
    status: "complete",
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
    status: "complete",
    dueDate: new Date(2022, 6, 13)
  }
];

  return (
    <div className="app-container">
      <div className='app-content'>
        <TaskViewer taskList={data}/>

        <div className='side-bar-right'>
          <div className='card-xl'>
            <h3>Create Task</h3>
            <CreateTaskForm />
          </div>
        </div>
      </div>
    </div>
  );
 }

export default App;