import React from "react";

class Form extends React.Component {
    constructor() {
        super()

        this.state = {
            task: ""
        }
        this.handleTaskDescriptionChange = this.handleTaskDescriptionChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleTaskDescriptionChange(e) {
        this.setState({ task: e.target.value })
    }

    handleSubmit(e) {
        e.preventDefault()
        e.target.reset()
        // this.setState({task:""})

        this.props.addTask(this.state.task)
    }

    render() {
        return (
            <>
                <form className="form-inline" onSubmit={this.handleSubmit}>
                    <div className="form-group mx-sm-3 mb-2">
                        To Do List
                    </div>
                    <div className="line">
                        <input type="text" className="form-control" placeholder="Ecrivez ici" onChange={this.handleTaskDescriptionChange} />

                        <button type="submit" className="btn btn-primary mb-2">Create a To-do</button>
                    </div>
                </form>
            </>
        )
    }
}

export default Form