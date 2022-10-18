import Filters from '../filters/filters';

const Footer = ({ finished, all, todos }) => {
  const rest = all - finished;
  return (
    <footer className="footer">
      <span className="todo-count">{rest} items left</span>
      <Filters todos={todos} />
      <button
        className="clear-completed"
        onClick={() => {
          const todoList = document.querySelector('.todo-list');
          for (const child of todoList.childNodes) {
            if (child.classList.contains('completed')) {
              child.classList.add('hidden-permanently');
            }
          }
        }}
      >
        Clear completed
      </button>
    </footer>
  );
};

export default Footer;
