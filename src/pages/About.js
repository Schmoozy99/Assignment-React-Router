import logo from '../images/logo.svg';


export default function About() {
  return (
    <div className="App">
      <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>*** About Zach *** Edit <code>src/App.js</code> and save to reload.</p>
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer"> Learn React </a>
      </header>
    </div>
  );
}

