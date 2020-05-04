import React from 'react';
import TodoList from "./Components/TodoList";


function App() {
    const q = React.useState([
        {id: 1, completed: false, title: 'Купить хлеб'},
        {id: 2, completed: false, title: 'Купить масло'},
        {id: 3, completed: false, title: 'Купить молоко'},
    ])

    function toggleTodo(id) {
        todos = todos.map (todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed
            }
            return todo;
        })
    }

    return (
        <div className='wrapper'>
            <h1>React</h1>

            <TodoList todos={todos} onToggle={toggleTodo}/>
        </div>
    );
}

export default App;
