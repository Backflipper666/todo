import Task from '../task/task';

const TaskList = ({ todos, onDeleted }) => {
  const elements = todos.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <li key={item.id}>
        <Task regular {...itemProps} onDeleted={() => onDeleted(id)} />
      </li>
    );
  });
  return <ul className="todo-list">{elements}</ul>;
};

export default TaskList;
