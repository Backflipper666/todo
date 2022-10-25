import React from "react";
import "./task.css";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import PropTypes from "prop-types";

export default class Task extends React.Component {
  state = {
    label: this.props.label,
    dateState: new Date(),
  };

  /*   onLabelChange = (e) => {
    this.setState({
      label: e.target.value,
    });
  };
 */

  /*   onLabelClick(evt) {
    const parentDiv = evt.target.parentElement;
    const grandParent = parentDiv.parentElement;

    grandParent.classList.toggle("completed");
  } */

  edit = (evt) => {
    const parentDiv = evt.target.parentElement;
    const grandParent = parentDiv.parentElement;
    parentDiv.classList.add("hidden");

    const form = document.createElement("form");
    const input = document.createElement("input");

    // form.classList.add('hidden');
    input.classList.add("edit-input");
    form.classList.add("edit-form");

    //! !!the following line works
    input.value = this.state.label;
    let inputValue;

    input.addEventListener("input", (evt) => {
      inputValue = evt.target.value;

      this.setState({
        label: evt.target.value,
      });
    });

    form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      parentDiv.classList.remove("hidden");
      form.classList.add("hidden");
      this.setState({
        label: inputValue,
      });
    });

    form.addEventListener("focusout", (evt) => {
      evt.preventDefault();
      parentDiv.classList.remove("hidden");
      form.classList.add("hidden");
      this.setState({
        label: inputValue,
      });
    });

    form.appendChild(input);
    grandParent.appendChild(form);

    // grandParent.classList.toggle('completed');
  };
  /* 
  toggle = (evt) => {
    // parentDiv is only used to get GrandParent element

    const parentDiv = evt.target.parentElement;
    const grandParent = parentDiv.parentElement;

    grandParent.classList.toggle("completed");
  }; */

  render() {
    const { onToggleDone } = this.props;
    const { label } = this.state;

    return (
      <div className="view">
        <input className="toggle" type="checkbox" onClick={onToggleDone} />
        <label>
          <span className="description">{label}</span>
          <span className="created">
            {`created ${formatDistanceToNow(this.state.dateState, {
              includeSeconds: true,
            })}`}
          </span>
        </label>
        <button type="button" className="icon icon-edit" onClick={this.edit} />
        <button
          type="button"
          className="icon icon-destroy"
          onClick={this.props.onDeleted}
        />
      </div>
    );
  }
}

Task.defaultProps = {
  onToggleDone: () => {},
  label: "",
  onDeleted: () => {},
};

Task.propTypes = {
  onToggleDone: PropTypes.func,
  label: PropTypes.any,
  onDeleted: PropTypes.func,
};
