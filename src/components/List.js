import React, { StrictMode } from "react";

import '../App.css'

class List extends React.Component {

    render() {
        const { description, status } = this.props.task
        const { removeTask, index, modifyTask } = this.props
        return (
            <>
                <div className="tooDoo">
                    <div className="dooToo">
                        <p>{status}</p>
                        <p>{description}</p>
                        <span>
                            <button type="button" className="buts" onClick={modifyTask} id={index} >Modifier</button>
                            <button type="button" className="buts" onClick={removeTask} id={index}>Supprimer</button>
                        </span>
                    </div>

                </div></>
        )
    }
}

export default List