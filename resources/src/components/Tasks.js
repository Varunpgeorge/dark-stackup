import Task from "./Task";
function Tasks({ tasks, onTglStatus }) {
  
  return (
    <div className="taskContainer">
      
      {tasks.map((task) => (
        <Task task={task} key={task.id} onTglStatus={onTglStatus} />
      ))}
      <div className="col-12"></div>
    </div>
  );
}

export default Tasks;
