import React from 'react';

export default class Task extends React.Component {
  toggle = (evt) => {
    //parentDiv is only used to get GrandParent element
    let parentDiv = evt.target.parentElement;
    let grandParent = parentDiv.parentElement;
    grandParent.classList.toggle('completed');
  };

  render() {
    const { edit, regular, compl } = this.props;
    if (edit) {
      return (
        <li className="editing">
          <div className="view">
            <input className="toggle" type="checkbox" />
            <label>
              <span className="description">Editing task</span>
              <span className="created">created 5 minutes ago</span>
            </label>
            <button className="icon icon-edit"></button>
            <button className="icon icon-destroy"></button>
          </div>
          <input
            type="text"
            className="edit"
            /* value="Editing task"  */ defaultValue="Editing task"
          />
        </li>
      );
    } else if (regular) {
      return (
        <li>
          <div className="view">
            <input className="toggle" type="checkbox" onClick={this.toggle} />
            <label>
              <span className="description">Active task</span>
              <span className="created">created 5 minutes ago</span>
            </label>
            <button className="icon icon-edit"></button>
            <button className="icon icon-destroy"></button>
          </div>
        </li>
      );
    } else if (compl) {
      return (
        <li className="completed">
          <div className="view">
            <input className="toggle" type="checkbox" onClick={this.toggle} />
            <label>
              <span className="description">Completed task</span>
              <span className="created">created 17 seconds ago</span>
            </label>
            <button className="icon icon-edit"></button>
            <button className="icon icon-destroy"></button>
          </div>
        </li>
      );
    }
  }
}
