import React from 'react';

export default class Filter extends React.Component {
  state = {};

  showOnlyCompleted = (evt) => {
    this.evt = evt;
    const completed = document.querySelectorAll('.completed');
    // console.log('todos: ', todos);
    const todoList = document.querySelector('.todo-list');
    for (const child of todoList.childNodes) {
      if (!child.classList.contains('completed')) {
        child.classList.add('hidden-completed');
      } else {
        child.classList.remove('hidden-completed');
      }
    }

    const btns = document.querySelectorAll('.filters button');
    for (const button of btns) {
      button.classList.remove('selected');
    }
    evt.target.classList.add('selected');
  };

  showOnlyActive = (evt) => {
    const completed = document.querySelector('.completed');
    const todoList = document.querySelector('.todo-list');
    for (const child of todoList.childNodes) {
      if (!child.classList.contains('completed')) {
        child.classList.remove('hidden-completed');
      } else {
        child.classList.add('hidden-completed');
      }
    }

    const btns = document.querySelectorAll('.filters button');
    for (const button of btns) {
      button.classList.remove('selected');
    }
    evt.target.classList.add('selected');
  };

  showAll = (evt) => {
    const todoList = document.querySelector('.todo-list');
    for (const child of todoList.childNodes) {
      child.classList.remove('hidden-completed');
    }

    const btns = document.querySelectorAll('.filters button');
    for (const button of btns) {
      button.classList.remove('selected');
    }
    evt.target.classList.add('selected');
  };

  render() {
    const { todos } = this.props;

    return (
      <div>
        <ul className="filters">
          <li>
            <button className="selected" onClick={this.showAll}>
              All
            </button>
          </li>
          <li>
            <button onClick={this.showOnlyActive}>Active</button>
          </li>
          <li>
            <button onClick={this.showOnlyCompleted}>Completed</button>
          </li>
        </ul>
      </div>
    );
  }
}
