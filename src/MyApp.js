import React from "react";
import logo from "./logo.svg";
import "./App.css";

function MyApp() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          <code>src/MyApp.js</code> Edited
        </p>
        <a
          className='App-link'
          href='https://github.com/ChineseStuff/react-utn-mod1'
          target='_blank'
          rel='noopener noreferrer'
        >
          Take a look to my GHub repo
        </a>
      </header>
    </div>
  );
}

export default MyApp;
