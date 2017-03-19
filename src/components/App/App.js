import React from 'react'
import './App.css'

const App = (props) => {
    return (
        <div className="App">
            <div className="App-header">
                <h2>React Boilerplate</h2>
            </div>
            {props.children}
        </div>
    )
}

export default App