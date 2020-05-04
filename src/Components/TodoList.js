import React from "react";
import TodoItem from "./TodoItem";


const styles = {
    ul: {
        listStyle: 'none',
        margin: 0,
        padding: 0
    }
}

const TodoList = () => {
    return (
        <ul style={styles.ul}>
            <TodoItem/>
            <TodoItem/>
            <TodoItem/>
        </ul>

    )
}


export default TodoList;