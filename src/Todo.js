import React from "react";
import { connect } from "react-redux";

const Todo = ({name, id, complete, dispatch}) => {
    return (
        <div>
            <p>{name}</p>
            <button onClick={()=> dispatch()} >delete</button>
        </div>
    )
}

export default connect()(Todo)