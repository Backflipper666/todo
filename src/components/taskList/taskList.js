import Task from '../task/task';

const TaskList = () => {
  return (
    <ul className="todo-list">
      <Task compl />
      <Task edit />
      <Task regular />
    </ul>
  );
};

export default TaskList;
