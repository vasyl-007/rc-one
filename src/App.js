import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
    render() {
        return (
            <div classname="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React!!!!</h1>
                </header>
                <p className="App-intro">
                    Welcome to my amazing React!
                </p>
            </div>
        )
    }
}

export default App;
