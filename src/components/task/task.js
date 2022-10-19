import React from 'react';
import './task.css';

export default class Task extends React.Component {
  state = {
    done: false,
    label: this.props.label,
  };

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value,
    });
  };

  toggle = (evt) => {
    //parentDiv is only used to get GrandParent element

    let parentDiv = evt.target.parentElement;
    let grandParent = parentDiv.parentElement;

    grandParent.classList.toggle('completed');
  };

  onLabelClick(evt) {
    let parentDiv = evt.target.parentElement;
    let grandParent = parentDiv.parentElement;

    grandParent.classList.toggle('completed');
  }

  onSubmit = () => {};

  edit = (evt) => {
    let parentDiv = evt.target.parentElement;
    let grandParent = parentDiv.parentElement;
    parentDiv.classList.add('hidden');

    const form = document.createElement('form');
    const input = document.createElement('input');

    //!!!the following line works
    input.value = this.state.label;
    let inputValue;

    input.addEventListener('input', (evt) => {
      inputValue = evt.target.value;
    });

    form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      parentDiv.classList.remove('hidden');
      form.classList.add('hidden');
      this.setState({
        label: inputValue,
      });
    });

    form.appendChild(input);
    grandParent.appendChild(form);
  };

  render() {
    const { onToggleDone } = this.props;
    const { label } = this.state;

    return (
      <div className="view">
        <input className="toggle" type="checkbox" onClick={onToggleDone} />
        <label>
          <span className="description">{label}</span>

          <span className="created">created 5 minutes ago</span>
          {/*           <form className="hidden form-edit">
            <input type="text" onChange={this.onLabelChange} />
          </form> */}
        </label>
        <button className="icon icon-edit" onClick={this.edit}></button>
        <button
          className="icon icon-destroy"
          onClick={this.props.onDeleted}
        ></button>
      </div>
    );
  }
}
