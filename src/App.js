import './App.css';
import HeroSection from './components/Header/HeroSection/HeroSection';
import Reviews from './components/Reviews/Reviews';
import ShowSection from './components/ShowSection/ShowSection';

function App() {
  return (
    <div className='App'>
      <HeroSection></HeroSection>
      <ShowSection></ShowSection>
      <Reviews></Reviews>
    </div>
  );
}

export default App;
