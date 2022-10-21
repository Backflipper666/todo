import React from 'react';
import Task from '../task/task';

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
    const { editor } = this.state;
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
            date1={new Date()}
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

    if (editor) {
      return <></>;
    }
    return <ul className="todo-list">{elements}</ul>;
  }
}
