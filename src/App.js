import React from 'react';
import './App.css';
import apiConfig from './config/apiConfig.js';
import GetLocationButton from './components/GetLocationButton.js'

window.apiConfig = apiConfig;

function App() {
    return (
        <div className="App">
        <header className="App-header">
        </header>
        <p>Figure out what to do here . . . </p>
        <GetLocationButton />
        </div>
    );
}

export default App;