import './App.css';
import Hero from './components/hero';
import Introduction from './components/introduction';
import NavBar from './components/navbar';
function App() {
  return (
    <div className="App">
           <NavBar />
          <Hero/>
          <Introduction/>
    </div>
  );
}

export default App;
