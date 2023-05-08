import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Benifits of using React...</h1>
      <ol>
        <li>Component-based architecture</li>
        <li>Virtual DOM for efficient updates</li>
        <li>Rich ecosystem and community</li>
        <li>Cross-platform Development</li>
        <li>Strong community support</li>
      </ol>
      <button type='button'>GetStarted...</button>
      </header>
    </div>
    );
}

export default App;
