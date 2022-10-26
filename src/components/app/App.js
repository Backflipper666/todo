// import logo from './logo.svg';
import React from 'react'

import './app.css'
import Footer from '../footer/footer'
import NewTaskForm from '../newTaskForm/newTaskForm'
import TaskList from '../taskList/taskList'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todoData: [
        { label: 'Active task', id: 1 },
        { label: 'Editing task', id: 2 },
        { label: 'Active task', id: 3 },
      ],
    }
    this.maxId = 100
    this.addItem = this.addItem.bind(this)
    this.deleteItem = this.deleteItem(this)
    this.onToggleDone = this.onToggleDone(this)
    this.onToggleImportant = this.onToggleImportant(this)
    this.toggleProperty = this.toggleProperty(this)
    this.createTodoItem = this.createTodoItem(this)
  }

  addItem(text) {
    // generate id
    const newItem = this.createTodoItem(text)

    this.setState(({ todoData }) => {
      const newArr = [...todoData, newItem]

      return {
        todoData: newArr,
      }
    })
  }

  deleteItem(id) {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id)
      const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)]

      return {
        todoData: newArray,
      }
    })
  }

  onToggleDone(id) {
    this.setState(({ todoData }) => ({
      todoData: this.toggleProperty(todoData, id, 'done'),
    }))
  }

  onToggleImportant(id) {
    this.setState(({ todoData }) => ({
      todoData: this.toggleProperty(todoData, id, 'important'),
    }))
  }

  toggleProperty(arr, id, propName) {
    const idx = arr.findIndex((el) => el.id === id)

    const oldItem = arr[idx]
    const newItem = { ...oldItem, [propName]: !oldItem[propName] }

    return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)]
  }

  createTodoItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: this.maxId++,
    }
  }

  render() {
    const doneCount = this.state.todoData.filter((el) => el.done).length
    const total = this.state.todoData.length
    // const todoCount = this.state.todoData.length - doneCount;
    const { todoData } = this.state
    /*     console.log('doneCount = : ', doneCount);
    console.log('todoCount: ', todoCount); */
    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <NewTaskForm onItemAdded={this.addItem} />
        </header>
        <section className="main">
          <TaskList
            todos={todoData}
            onDeleted={this.deleteItem}
            onToggleImportant={this.onToggleImportant}
            onToggleDone={this.onToggleDone}
          />
          <Footer finished={doneCount} all={total} todos={todoData} />
        </section>
      </section>
    )
  }
}
