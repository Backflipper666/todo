import React from 'react';

export default class Task extends React.Component {
  toggle = (evt) => {
    //parentDiv is only used to get GrandParent element
    let parentDiv = evt.target.parentElement;
    let grandParent = parentDiv.parentElement;
    grandParent.classList.toggle('completed');
  };

  edit = (evt) => {
    //parentDiv is only used to get GrandParent element
    let parentDiv = evt.target.parentElement;
    let grandParent = parentDiv.parentElement;
    grandParent.classList.toggle('editing');
    // grandParent.classList.add('editing');
  };

  render() {
    const { edit, regular, compl, label } = this.props;
    return (
      <li>
        <div className="view">
          <input className="toggle" type="checkbox" onClick={this.toggle} />
          <label>
            <span className="description">{label}</span>
            <span className="created">created 5 minutes ago</span>
          </label>
          <button className="icon icon-edit" onClick={this.edit}></button>
          <button className="icon icon-destroy"></button>
        </div>
      </li>
    );
  }
}
