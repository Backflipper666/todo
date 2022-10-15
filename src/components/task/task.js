import React from 'react';
import './task.css';

export default class Task extends React.Component {
  state = {
    done: false,
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

  edit = (evt) => {
    //parentDiv is only used to get GrandParent element
    let parentDiv = evt.target.parentElement;
    let grandParent = parentDiv.parentElement;
    console.log('clickedd');
    parentDiv.classList.toggle('editing');
    // grandParent.classList.add('editing');
    grandParent.removeChild(parentDiv);

    grandParent.innerHTML = <input value="sss" />;
    const input = document.createElement('input');
    input.textContent = 'ad';
    input.value = 'asdf';
    input.classList.add('edit');
    grandParent.append(input);
  };

  render(evt) {
    const { done } = this.state;
    const { edit, regular, compl, label } = this.props;

    if (done) {
      let parentDiv = evt.target.parentElement;
      let grandParent = parentDiv.parentElement;

      this.setState((state) => {
        return {
          done: !state.done,
        };
      });
    }

    return (
      <div className="view">
        <input className="toggle" type="checkbox" onClick={this.toggle} />
        <label>
          <span className="description">{label}</span>
          <span className="created">created 5 minutes ago</span>
        </label>
        <button className="icon icon-edit" /* onClick={this.edit} */></button>
        <button className="icon icon-destroy"></button>
      </div>
    );
  }
}
