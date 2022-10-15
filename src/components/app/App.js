// import logo from './logo.svg';
import './app.css';
import Footer from '../footer/footer';
import NewTaskForm from '../newTaskForm/newTaskForm';
import TaskList from '../taskList/taskList';
import React from 'react';

export default class App extends React.Component {
  state = {
    todoData: [
      { label: 'Active task', id: 1 },
      { label: 'Editing task', id: 2 },
      { label: 'Active task', id: 3 },
    ],
  };

  render() {
    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <NewTaskForm />
        </header>
        <section className="main">
          <TaskList todos={this.todoData} />
          <Footer />
        </section>
      </section>
    );
  }
}
