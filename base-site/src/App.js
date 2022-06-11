import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="xl" style={{height: '100%'}}>
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
