import logo from './logo.svg';
import './App.css';
import EmojiVoting from './EmojiVoting';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <>
          <div className='vote-container'>
          <EmojiVoting />
          </div>
        </>
      </header>
    </div>
  );
}

export default App;
