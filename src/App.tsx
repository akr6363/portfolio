import React from 'react';
import './App.css';
import {Header} from "./components/Header";
import {Main} from "./components/Main";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects/Projects";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <AboutMe/>
            <Skills/>
            <Projects/>
        </div>
    );
}

export default App;

