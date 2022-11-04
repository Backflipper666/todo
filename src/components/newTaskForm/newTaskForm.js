import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class NewTaskForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      label: '',
    }
    this.onLabelChange = this.onLabelChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onLabelChange(e) {
    this.setState({
      label: e.target.value,
    })
    const label = this.state.label
    const trimmed = label.trim()
    if (trimmed.length === 0) {
      return
    }
  }

  onSubmit(e) {
    e.preventDefault()

    const label = this.state.label
    const trimmed = label.trim()
    if (trimmed.length === 0) {
      return
    }
    this.props.onItemAdded(this.state.label)
    this.setState({
      label: '',
    })
  }

  render() {
    return (
      <form onSubmit={this.onSubmit} className="form-input">
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          type="text"
          onChange={this.onLabelChange}
          value={this.state.label}
          // autoFocus
        />
      </form>
    )
  }
}

NewTaskForm.defaultProps = {
  onItemAdded: () => {},
}

NewTaskForm.propTypes = {
  onItemAdded: PropTypes.func,
}
