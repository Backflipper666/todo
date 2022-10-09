// import logo from './logo.svg';
import './app.css';
import Footer from '../footer/footer';
import NewTaskForm from '../newTaskForm/newTaskForm';
import TaskList from '../taskList/taskList';

function App() {
  return (
    <section className="todoapp">
          <header className="header">
            <h1>todos</h1>
            <NewTaskForm/>
          </header>
          <section className="main">
            <TaskList/>
            <Footer/>
          </section>
        </section>
  );
}

export default App;
