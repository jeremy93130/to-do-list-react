import React from "react"

import Form from "./components/Form"
import List from "./components/List";

import './App.css';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      tasks: []
    }

    this.addTask = this.addTask.bind(this)
  }

  addTask(str) {
    let task = {
      description: str,
      status: "to do"
    }
    this.setState({ tasks: [...this.state.tasks, task] })
  }

  deleteTask(task) {
    this.state.tasks.splice(this.state.task.target.id, 1)
    this.setState({ tasks: this.state.tasks })
  }




  render() {
    return (
      <>
        <Form

          addTask={this.addTask}
        />
        {this.state.tasks.map((task, i) =>
          <List task={task} removeTask={this.deleteTask} index={i} />)}

      </>

    )
  }
}

export default App