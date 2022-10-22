import React from 'react';
import Filters from '../filters/filters';
import PropTypes from 'prop-types';

export default class Footer extends React.Component {
  render() {
    const { finished, all, todos } = this.props;
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
  }
}

Footer.defaultProps = {
  todos: [
    { label: 'Active task', id: 1 },
    { label: 'Editing task', id: 2 },
    { label: 'Active task', id: 3 },
  ],
};

Footer.propTypes = {
  todos: PropTypes.array,
};
