import Task from '../task/task';

const TaskList = ({ todos, onDeleted, onToggleImportant, onToggleDone }) => {
  const elements = todos.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <li key={item.id}>
        <Task
          regular
          {...itemProps}
          onDeleted={() => onDeleted(id)}
          onToggleImportant={() => onToggleImportant(id)}
          onToggleDone={(evt) => {
            let parentDiv = evt.target.parentElement;
            let grandParent = parentDiv.parentElement;

            grandParent.classList.toggle('completed');
            return onToggleDone(id);
          }}
        />
      </li>
    );
  });
  return <ul className="todo-list">{elements}</ul>;
};

export default TaskList;
