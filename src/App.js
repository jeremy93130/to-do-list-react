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
    this.deleteTask = this.deleteTask.bind(this)
    this.modifyTask = this.modifyTask.bind(this)
  }

  addTask(str) {
    let task = {
      description: str,
      status: "to do"
    }
    this.setState({ tasks: [...this.state.tasks, task] })
  }

  deleteTask(e) {
    this.state.tasks.splice(e.target.id, 1)
    this.setState({ tasks: this.state.tasks })
  }

  modifyTask() {
  }




  render() {
    return (
      <>
        <Form

          addTask={this.addTask}
        />
        <h1>List</h1>
        {this.state.tasks.map((task, i) => (
          <List task={task} removeTask={this.deleteTask} modifyTask={this.modifyTask} index={i} />))}

      </>

    )
  }
}

export default App