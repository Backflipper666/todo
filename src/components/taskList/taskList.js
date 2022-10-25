import React from "react";
import PropTypes from "prop-types";
import Task from "../task/task";

export default class TaskList extends React.Component {
  onLabelChange = (e) => {
    console.log("changed", e.target);
    /*     this.setState({
      label: this.e.target.value,
    }); */
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
              const parentDiv = evt.target.parentElement;
              const grandParent = parentDiv.parentElement;

              grandParent.classList.toggle("completed");
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
    { label: "Active task", id: 1 },
    { label: "Editing task", id: 2 },
    { label: "Active task", id: 3 },
  ],
  onDeleted: () => {},
  onToggleImportant: () => {},
  onToggleDone: () => {},
};

TaskList.propTypes = {
  todos: PropTypes.array,
  onDeleted: PropTypes.func,
  onToggleImportant: PropTypes.func,
  onToggleDone: PropTypes.func,
};
