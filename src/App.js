import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects'
import Screenshots from './components/Screenshots'
import Contact from './components/Contact'


function App() {
  return (
    <div className="App">
      <div className="borderWall"></div>
      <div className="homepageContainer">
        <Navbar />
        <div className="content">
          <About />
          <Projects />
          <Screenshots />
          <Contact />
        </div>

      </div>
      <div className="borderWall"></div>
    </div>
  );
}

export default App;
