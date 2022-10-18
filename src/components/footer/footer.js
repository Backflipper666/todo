import Filters from '../filters/filters';

const Footer = ({ finished, all }) => {
  const rest = all - finished;
  return (
    <footer className="footer">
      <span className="todo-count">{rest} items left</span>
      <Filters />
      <button className="clear-completed">Clear completed</button>
    </footer>
  );
};

export default Footer;
