import './App.css';
import DrumMachine from './components/DrumMachine';
import backgroundImage from './images/drumSet.jpg'

function App() {
  return (    
    <div className="background-container" style={{ backgroundImage: `url(${backgroundImage})`}}>
      <DrumMachine />
    </div>
  );
}

export default App;
