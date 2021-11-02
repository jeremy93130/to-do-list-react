import React from "react";

import '../App.css'

class List extends React.Component {
    render() {
        const { description, status } = this.props.task
        return (
            <>
                <div className="tooDoo">
                    <span>
                        <h1>List</h1>
                    </span>
                    <div className="dooToo">
                        <p>{status}</p>
                        <p>{description}</p>
                        <button type="button" onClick={this.props.removeTask}>Supprimer</button>
                    </div>

                </div></>
        )
    }
}

export default List