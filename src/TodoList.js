import React from 'react';
import { connect } from 'react-redux';

const TodoList = (props) => {
  return (
    <div>
        <p>list</p>
        <p>PROPS:</p>
        {JSON.stringify(props.todos)}
    </div>
  )
}

const mapStateToProps = (state) => {
    return {todos: state.todos}
}

export default connect(mapStateToProps)(TodoList);