import './App.css';
import TaskViewer from './components/task-viewer/TaskViewer';

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
  }
];

  return (
    <div className="app-container">
      <h2>Task Manager</h2>
      <TaskViewer data={data}/>
    </div>
  );
}

export default App;
