import React from 'react'
import './index.css'

import TodoApp from './TodoApp/TodoApp';

function App() {

    return (
        <div className='app'>
            <h1 className='header'>Todo App</h1>
            <TodoApp />
        </div>
    )
}

export default App;