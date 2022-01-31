const initialState = [{name: "init state todo", id: 0, complete: true}]

const todos = (state = initialState, action) => {
    switch(action.type) {
        case "SET_TODOS":
            return action.todos
        case "ADD_TODO":
            return [...state, action.todo];
        case "DELETE_TODO":
            return state.filter((todo)=> todo.id !== action.id)
        case "UPDATE_TODO":
            return state.map((todo)=> 
                todo.id === action.todo.id ? action.todo : todo
            )
        case "TOGGLE_TODO":
            return state.map((todo)=> 
                todo.id === action.id ? {...todo, complete: !todo.complete} : todo
            )
        default:
            return state
    }
}

export default todos;