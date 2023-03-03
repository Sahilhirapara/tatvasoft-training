import logo from './logo.svg';
import './App.css';
import Title from './components/Title';
import Home from './components/Home';
import Counter from './components/Counter';
import About from './components/About'

function App() {
  return (
    <div className="App">
      <Home/>
      <Counter/>
    </div>
  );
}

export default App;
