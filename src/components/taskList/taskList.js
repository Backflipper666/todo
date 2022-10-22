import React from 'react';
import Task from '../task/task';
import PropTypes from 'prop-types';

export default class TaskList extends React.Component {
  state = {
    label: '',
    editor: false,
  };

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value,
    });
  };

  render() {
    const { todos, onDeleted, onToggleImportant, onToggleDone } = this.props;
    const elements = todos.map((item) => {
      const { id, ...itemProps } = item;
      return (
        <li key={item.id}>
          <form className="hidden the-form">
            <input
              type="text"
              value={item.label}
              onChange={this.onLabelChange}
            />
          </form>
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
  }
}

TaskList.defaultProps = {
  todos: [
    { label: 'Active task', id: 1 },
    { label: 'Editing task', id: 2 },
    { label: 'Active task', id: 3 },
  ],
};

TaskList.propTypes = {
  todos: PropTypes.array,
  onDeleted: PropTypes.func,
  onToggleImportant: PropTypes.func,
  onToggleDone: PropTypes.func,
};
