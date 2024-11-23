import './App.css';
import ScooterNavbar from './components/navbar';
import Dashboard from './components/Dashboard';
import About from './components/about';
import FiturPage from './components/fitur';
import HowToPage from './components/howto';
import FaqPage from './components/faq';
import JoinPage from './components/join';
import FooterPage from './components/footer';

function App() {
  return (
    <>
      <div className="">
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
        <div className="lg:pt-28 pt-16">
          <img src="/wave.png" alt="wave" width={1440} height={204} className="lg:block hidden" />
          <img src="/wave-mobile.png" alt="wave-mobile" width={440} height={152} className="lg:hidden" />
          <FaqPage />
        </div>
        <div className="">
          <JoinPage />
        </div>
        <div className="">
          <FooterPage />
        </div>
      </div>
    </>
  );
}

export default App;
