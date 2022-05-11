import './App.css';

function sendRequest() {
    fetch('http://127.0.0.1:3002/', {credentials: 'include', headers: {
        'Content-Type': 'application/json',
            'Authorization': `Bearer TOKEN`
        }} )
        .then(response => response.json())
        .then(data => console.log(JSON.stringify(data)));
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <button  className="App-link" onClick={sendRequest}>
             Send Request
          </button>
      </header>
    </div>
  );
}

export default App;
