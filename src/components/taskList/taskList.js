import Task from '../task/task';

const TaskList = () => {
  return (
    <ul className="todo-list">
      <Task regular label="Active task" />
      <Task edit label="Editing task" />
      <Task regular label="Active task" />
    </ul>
  );
};

export default TaskList;
