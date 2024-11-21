import './App.css';
import ScooterNavbar from './components/navbar';
import Dashboard from './components/Dashboard';
import About from './components/about';
import FiturPage from './components/fitur';
import HowToPage from './components/howto';
function App() {
  return (
    <>
      <ScooterNavbar />
      <div className="lg:pb-8">
        <Dashboard />
      </div>
      <div className="">
        <About />
      </div>
      <div className="">
        <FiturPage />
      </div>
      <div className="lg:py-24">
        <HowToPage />
      </div>
    </>
  );
}

export default App;
