import React from 'react';
import logo from './@_ryanward.jpeg';
import './App.css';
import ReactGA from 'react-ga';

function App() {
  ReactGA.initialize('UA-145320500-2');
  ReactGA.pageview('/homepage');
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Welcome to TikTok Collab!
        </p>
        <p>
          This website is made entirely from suggestions on my TikTok videos.
        </p>
        <p>
          Follow me on tiktok...
          <a
          className="App-link"
          href="https://www.tiktok.com/@_ryanward"
          target="_blank"
          rel="noopener noreferrer"
          >
            @_ryanward
          </a>
        </p>
        <img src={logo} className="App-logo fade-in" alt="logo" />
      </header>
    </div>
  );
}

export default App;
