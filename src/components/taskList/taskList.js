import Task from "../task/task"

const TaskList = () => {
    return (
        <ul className="todo-list">
            <Task/>
              <li className="editing">
                <div className="view">
                  <input className="toggle" type="checkbox"/>
                  <label>
                    <span className="description">Editing task</span>
                    <span className="created">created 5 minutes ago</span>
                  </label>
                  <button className="icon icon-edit"></button>
                  <button className="icon icon-destroy"></button>
                </div>
                <input type="text" className="edit" value="Editing task"/>
              </li>
              <li>
                <div className="view">
                  <input className="toggle" type="checkbox"/>
                  <label>
                    <span className="description">Active task</span>
                    <span className="created">created 5 minutes ago</span>
                  </label>
                  <button className="icon icon-edit"></button>
                  <button className="icon icon-destroy"></button>
                </div>
              </li>
            </ul>
    )
}

export default TaskList